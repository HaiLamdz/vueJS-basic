<script setup>
import { ref, reactive } from "vue";

const product = reactive({
    name: "",
    category_id: "",
    description: "",
    price: 0,
    status: "",
})
// biến chứa thông báo lỗi
const error = reactive({});
const list_product = reactive([]);
function validateForm() {
    // đánh dấu trạng thái form
    let result = true;
    if (!product.name || product.name.trim == "") {
        error.name = "Bạn Phải Nhập Tên.";
        return false;
    } else {
        result = true;
        error.name = "";
    }

    // check nhập giá
    if (!product.price) {
        error.price = "Bạn Phải Nhập Giá.";
        return false;
    } else if (product.price <= 0) {
        error.price = "Giá Phải Lớn Hơn 0.";
        return false;
    } else {
        result = true;
        error.price = "";
    }

    return result;
}
function submitForm() {

    // gọi hàm validate
    console.log(validateForm());

    if (validateForm()) {
        console.log('submit thanh cong');
        // tao 1 danh sach doi tuong san pham
        // nhan tao moi thong tin doi tuong duoc the vao danh sach san pham
        list_product.push({
            name:product.name,
            description:product.description,
            name:product.name,
            name:product.name,
        });
        console.log(list_product);
    }

}
</script>
<template>
    <div class="container">
        <h2 class="text-center">Tao Moi San Pham</h2>
        <form @submit.prevent="submitForm">
            <div class="">
                <span class="form-lable">Ten San Pham</span>
                <input type="text" class="form-control" placeholder="Nhap Ten.." v-model.trim="product.name">
                <span v-if="error.name" class="text-danger">{{ error.name }}</span>
            </div>
            <div class=" mt-1">
                <span class="form-lable">Mo Ta San Pham</span>
                <textarea name="" class="form-control" id="" v-model.trim="product.description">Mo Ta </textarea>
            </div>
            <div class=" mt-1">
                <span class="form-lable">Danh Muc San Pham</span>
                <select class="form-select" v-model.trim="product.category_id" name="" id="">
                    <option value="">option</option>
                    <option value="1">Danh Muc 1</option>
                    <option value="2">Danh Muc 2</option>
                </select>
            </div>
            <div class=" mt-1">
                <span class="form-lable">Gia San Pham</span>
                <input type="text" v-model.number="product.price" class="form-control" placeholder="Nhap gia..">
                <span v-if="error.price" class="text-danger">{{ error.price }}</span>
            </div>
            <div class=" mt-1">
                <span class="form-lable">Trang Thai</span>
                <input type="checkbox" v-model.trim="product.status" class="form-check-input"> Con Hang
            </div>
            <div class="d-flex justify-content-center">
                <button class="btn btn-success">Tao Moi</button>
            </div>
        </form>
        <div>
        <ul class="list-group" v-for="pro in list_product" :key="pro">
            <li class="list-group-item" >
                {{ pro.name }}
            </li>
            <li class="list-group-item" >
                {{ pro.description }}
            </li>
            <li class="list-group-item" >
                {{ pro.category_id }}
            </li>
            <li class="list-group-item" >
                {{ pro.price }}
            </li>
        </ul>
    </div>
    </div>
    
</template>