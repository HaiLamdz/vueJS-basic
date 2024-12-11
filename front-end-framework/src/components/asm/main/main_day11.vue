<script setup>
import { onMounted, ref, reactive } from "vue";
// khai báo kết nối
import instanceAxios from '@/ultis/configAxios';

// khai báo danh sách books
const list_book = ref();
let books = reactive({
    id: '',
    name: '',
    author: '', 
    price: 0,
    quantity: 0
});
const getListBooks = async () => {
    const response = await instanceAxios.get('list_book');
    if (response && response.data) {
        list_book.value = response.data;
    }
    console.log(list_book.value);


};
const onClickDelete = async (list_bookId) => {
    // confirm delete
    console.log(list_bookId);
    
    const XacNhanXoa = confirm('Bạn có chắc chắn xóa sách này?');
    if (XacNhanXoa) {
        const response = await instanceAxios.delete(`list_book/${list_bookId}`);
        // cách 1 : call api 

        // cách 2: dùng filter
        // xóa book trong danh sách
        list_book.value = list_book.value.filter((book) => book.id != list_bookId);
        alert('Xóa sách thành công');
        console.log(list_book.value);
    }

}



// hàm validate
const error = reactive({});
function validate() {
    let ketqua = true;
    if (!books.name || books.name.trim == "") {
        error.name = "Bạn Phải Nhập Tên";
        return false;
    } else {
        ketqua = true;
        error.name = "";
    }
    if (!books.author || books.author.trim == "") {
        error.author = "Bạn Phải Chọn Tác Giả";
        return false;
    } else {
        ketqua = true;
        error.author = "";
    }
    if (isNaN(books.price) || books.price <= 0) {
        error.price = "Giá Phải Là Số Và Lớn Hơn 0"
        return false;
    } else {
        ketqua = true;
        error.price = "";
    }
    if (isNaN(books.quantity) || books.quantity <= 0) {
        error.quantity = "Số Lượng Phải Là Số Và Lớn Hơn 0"
        return false;
    } else {
        ketqua = true;
        error.quantity = "";
    }
    return ketqua;
};
// hàm tạo mới
const onClickCreate = async()=>{
    // check validate
    if(!validate()){
        alert('Thông tin không hợp lệ?');
        return;
    } 
    if(list_book.value.length > 0){
        books.id = list_book.value.length + 1 + "";
    }else{
        books.id = "1";
    }

    // call api
    const response = await instanceAxios.post('list_book', books);
    if(response){
        alert('Thêm Thành Công!!');
        // call api
        getListBooks();
    }
}
// hàm xem chi tiết
const onShowUpdate = async(id) =>{
    // call api lấy thông tin chi tiết
    const response = await instanceAxios.get(`list_book/${id}`);
    console.log(response.data);
    
    if(response){
        books.id = response.data.id;
        books.name = response.data.name;
        books.author = response.data.author;
        books.price = response.data.price;
        books.quantity = response.data.quantity;
    }
}

const onClickUpdate= async (id)=>{
    console.log(books.name);
    
  const response=await instanceAxios.put(`list_book/${id}`,{
    id: id,
    name: books.name,
    author: books.author,
    price: books.price,
    quantity: books.quantity
  });
  console.log(response);
  
  if(response){
    console.log(response);
    alert("cập nhận thành công")
    getListBooks();

  }
}
// gọi hàm lấy danh sách books
onMounted(() => {
    // lấy danh sách books sau khi load templates lên dom
    getListBooks();
})

</script>
<template>
    <div class="container mt-5">
        <h2>Danh Sách Sách</h2>
        <button class="btn btn-success" style="margin-left: 93%;">Tạo Mới</button>
        <table class="table table-striped" style="width: 100%; table-layout: fixed;">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Tác Giả</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số Lượng</th>
                    <th scope="col">Tương Tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(books, index) in list_book" :key="books.id">
                    <th scope="row">{{ books.id }}</th>
                    <td>{{ books.name }}</td>
                    <td>{{ books.author }}</td>
                    <td>{{ books.price }}</td>
                    <td>{{ books.quantity }}</td>
                    <td>
                        <button class="btn btn-info" @click="onShowUpdate(books.id)">Xem</button>
                        <button class="btn btn-danger" @click="onClickDelete(books.id)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <h2>Tạo Mới Sách</h2>
        <form>
            <div class="mt-3">
                <span class="form-label">ID:</span>
                <input class="form-control" type="text" v-model.trim="books.id" disabled>
            </div>

            <div class="mt-3">
                <span class="form-label">Tên:</span>
                <input class="form-control" type="text" v-model.trim="books.name">
            </div>

            <div class="mt-3">
                <span class="form-label">Tác giả:</span>
                <select class="form-control" v-model="books.author">
                    <option value="">- Lựa chọn -</option>
                    <option value="Nguyễn Nhật Ánh">Nguyễn Nhật Ánh</option>
                    <option value="Vũ Trọng Phụng">Vũ Trọng Phụng</option>
                    <option value="Nam Cao">Nam Cao</option>
                </select>
            </div>

            <div class="mt-3">
                <span class="form-label">Giá:</span>
                <input class="form-control" type="text" v-model.number="books.price">

            </div>
            <div class="mt-3">
                <span class="form-label">Số lượng:</span>
                <input class="form-control" type="text" v-model.number="books.quantity">
            </div>

            <div class="mt-3 text-center">
                <a class="btn btn-success me-3" @click.prevent="onClickCreate()">Tạo Mới</a>
                <a class="btn btn-info" @click.prevent="onClickUpdate(books.id)">Cập nhật</a>
            </div>
        </form>
    </div>
</template>