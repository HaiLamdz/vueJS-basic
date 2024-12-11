<script setup>
import { ref, reactive } from "vue";
const list_books = reactive([
    { id: 1, name: "Sách A", author: "Tác giả A", price: 200000, quantity: 10 },
    { id: 2, name: 'Sách B', author: 'Tác giả B', price: 150000, quantity: 5 },
    { id: 3, name: 'Sách C', author: 'Tác giả C', price: 300000, quantity: 2 }
]);


let books = reactive({
    id: "",
    name: "",
    author: "",
    price: 0,
    quantity: 0
});
let indexSelected = -1;
function onShowUpdate(index) {
    indexSelected = index;
    books.id = list_books[index].id;
    books.name = list_books[index].name;
    books.author = list_books[index].author;
    books.price = list_books[index].price;
    books.quantity = list_books[index].quantity;
};
const error = reactive({});
function validate() {
    let ketqua = true;
    if (!books.id || books.id.trim == "") {
        error.id = "Bạn Phải Nhập ID";
        return false;
    } else {
        ketqua = true;
        error.id = "";
    }
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
function onClickCreate() {
    if (validate()) {
        list_books.push({
            id: books.id,
            name: books.name,
            author: books.author,
            price: books.price,
            quantity: books.quantity,
        });
        books.id = "";
        books.name = "";
        books.author = "";
        books.price = 0;
        books.quantity = 0;
    }
};
function onClickDelete(index) {
    const xacNhan = confirm("Bạn Muốn Xóa Sách Này Chứ??")
    if (xacNhan) {
        list_books.splice(index, 1);
    }
};

function onClickUpdate() {
    if (indexSelected !== -1) {
        list_books[indexSelected] = {
            id: books.id,
            name: books.name,
            author: books.author,
            price: books.price,
            quantity: books.quantity,
        };
        books.id = "";
        books.name = "";
        books.author = "";
        books.price = 0;
        books.quantity = 0;
    }
}
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
                <tr v-for="(books, index) in list_books" :key="books.id">
                    <th scope="row">{{ books.id }}</th>
                    <td>{{ books.name }}</td>
                    <td>{{ books.author }}</td>
                    <td>{{ books.price }}</td>
                    <td>{{ books.quantity }}</td>
                    <td>
                        <button class="btn btn-info" @click="onShowUpdate(index)">Xem</button>
                        <button class="btn btn-danger" @click="onClickDelete(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>Tạo Mới Sách</h2>
        <form>
            <div class="mt-3">
                <label for="" class="form-label">ID:</label>
                <input type="text" class="form-control" v-model="books.id">
                <span class="text-danger" v-if="error.id">{{ error.id }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Tên:</label>
                <input type="text" class="form-control" v-model="books.name">
                <span class="text-danger" v-if="error.name">{{ error.name }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Tác Giả:</label>
                <select name="" class="form-control" v-model="books.author" id="">
                    <option value="">Lựa Chọn</option>
                    <option value="Tác giả A">Tác giả A</option>
                    <option value="Tác giả B">Tác giả B</option>
                    <option value="Tác giả C">Tác giả C</option>
                </select>
                <span class="text-danger" v-if="error.author">{{ error.author }}</span>

            </div>
            <div class="mt-3">
                <label for="" class="form-label">Giá:</label>
                <input type="text" class="form-control" v-model="books.price">
                <span class="text-danger" v-if="error.price">{{ error.price }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Số Lượng:</label>
                <input type="text" class="form-control" v-model="books.quantity">
                <span class="text-danger" v-if="error.quantity">{{ error.quantity }}</span>
            </div>
            <div class="mt-3 text-center">
                <button class="btn btn-success" @click.prevent="onClickCreate()">Tạo Mới</button>
                <button class="btn btn-info ms-2" @click.prevent="onClickUpdate()">Cập Nhật</button>
            </div>
        </form>
    </div>
</template>