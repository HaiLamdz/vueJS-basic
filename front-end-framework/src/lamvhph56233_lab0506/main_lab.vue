<script setup>
import { onMounted, ref, reactive } from "vue";
import instanceAxios from "@/ultis/configAxios";
const list_clother = ref();

const getListClother = async ()=>{
    const response = await instanceAxios.get('list_clother');
    if(response && response.data){
        list_clother.value = response.data;
    }
    
}
let clothers = reactive({
    id: '',
    name: '',
    type: '',
    price: 0,
    img: '',
});

const onClickDelete = async (id) => {
    const XacNhanXoa = confirm('B có muốn xóa sản phẩm này không??');
    if(XacNhanXoa){
        const response = await instanceAxios.delete(`list_clother/${id}`);
        list_clother.value = list_clother.value.filter((clother) => clother.id != id);
        alert('Xóa Thành Công');
    }
}
const onShowUpdate = async(id) => {
    const response = await instanceAxios.get(`list_clother/${id}`)
    if(response){
        clothers.id = response.data.id;
        clothers.name = response.data.name;
        clothers.type = response.data.type;
        clothers.price = response.data.price;
        clothers.img = response.data.img;
    }
}
const error = reactive({});
function validate(){
    let ketqua = true;
    const validateImg = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if(!clothers.name || clothers.name.trim == ''){
        error.name = "Tên Phải Làm 1 chuỗi ký tự";
        return false;
    }else{
        ketqua = true;
        error.name = "";
    }
    if(!clothers.type || clothers.type.trim == '' ){
        error.type = "Thể Loại Pahri Dược Chọn";
        return false;
    }else{
        ketqua = true;
        error.type = "";
    }if(!clothers.price || clothers.price.trim < 0  ){
        error.price = "giá Phải lớn hơn 0";
        return false;
    }else{
        ketqua = true;
        error.price = "";
    }
    if(!clothers.img || validateImg(clothers.img)){
        error.img = "Ảnh Phải LÀ 1 đường link";
        return false;
    }else{
        ketqua = true;
        error.img = "";
    }

    return ketqua;
}
const onClickCreate = async() => {
    
    if(list_clother.value.length > 0){
        clothers.id = list_clother.value.length + 1 + "";
    }else{
        clothers.id = "1";
    }
    if(validate()){
        const response = await instanceAxios.post('list_clother', clothers);
        if(response){
            getListClother();
        }
    }
}

const onClickUpdate = async(id) => {
    const response = await instanceAxios.put (`list_clother/${id}`, {
        id: clothers.id,
        name: clothers.name,
        type: clothers.type,
        price: clothers.price,
        img: clothers.img,
    });
    if(response){
        alert('Cập Nhật Thành Công');
        getListClother();
    }
}
onMounted(() => {
    getListClother();
})
</script>
<template>
<div class="container">
    <h2>Danh Sách Quần Áo</h2>
    <button class="btn btn-success">Tạo Mới</button>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Thao Tác</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(clother, index) in list_clother" :key="clother.id">
      <th scope="row">{{ clother.id }}</th>
      <td>{{ clother.name }}</td>
      <td>{{ clother.type }}</td>
      <td>{{ clother.price }}</td>
      <td><img width="90" :src="clother.img" alt=""></td>
      <td>
        <button class="btn btn-info" @click="onShowUpdate(clother.id)">Cập Nhật</button>
        <button class="btn btn-danger" @click="onClickDelete(clother.id)">Xóa</button>
      </td>
    </tr>
  </tbody>
</table>
<h2>Tạo Mới</h2>
<form >
    <div class="mt-3">
        <span class="form-label">ID:</span>
        <input type="text" class="form-control" disabled v-model.trim="clothers.id">
    </div>
    <div class="mt-3">
        <span class="form-label">Name:</span>
        <input type="text" class="form-control"  v-model.trim="clothers.name">
        <span v-if="error.name" class="text-danger">{{ error.name }}</span>
    </div>
    <div class="mt-3">
        <span class="form-label">Type:</span>
        <select name="" class="form-control" v-model="clothers.type" id="">
            <option value="">Chọn Danh Mục</option>
            <option value="Áo Len">Áo Len</option>
            <option value="Áo Nỉ">Áo Nỉ</option>
            <option value="Áo Phông">Áo Phông</option>
        </select>
        <span v-if="error.type" class="text-danger">{{ error.type }}</span>
    </div>
    <div class="mt-3">
        <span class="form-label">Price:</span>
        <input type="text" class="form-control"  v-model.trim="clothers.price">
        <span v-if="error.price" class="text-danger">{{ error.price }}</span>
    </div>
    <div class="mt-3">
        <span class="form-label">Image:</span>
        <input type="text" class="form-control" v-model.trim="clothers.img" >
        <img width="90" :src="clothers.img" alt="">
        <span v-if="error.img" class="text-danger">{{ error.img }}</span>
    </div>
    <div class="mt-3 text-center">
        <button class="btn btn-success" @click.prevent="onClickCreate()">Tạo Mới</button>
        <button class="btn btn-info" @click.prevent="onClickUpdate(clothers.id)">Cập Nhật</button>
    </div>
</form>
</div>
</template>