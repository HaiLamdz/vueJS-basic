<script setup>
// data binging
// 1. gan ket noi suy 
import { ref, reactive } from "vue";
const product = reactive({
    id: "SP001",
    name: "rolex",
    price: 1000,
    category: "Watch"
});

// 2. gan ket thuoc tinh
const cauNoiYeuThich = "I Love You";
const logoUrl = "/img/logo2.png"; // duong dan truc tiep toi thu muc public
function onClickDangKy() {
    alert('thanh cong');
}
function onBlurInput() {
    alert("Goi Ham onblur Thanh Cong");
}



// 4. 2way data binding
const hoVaTen = ref("Vu Hai Lam");

const categoryInfo = reactive({
    id: "Cate01",
    name: "Iphone",
    count: 100,
    listPro: [
        {
            id: "SP001",
            name: "IP 14 Plus",
            price: 1000,
            status: true
        },
        {
            id: "SP002",
            name: "IP 15 Plus",
            price: 2000,
            status: true
        },
        {
            id: "SP001",
            name: "IP 16 Plus",
            price: 3000,
            status: false
        }
    ]
})

</script>
<template>
    <div class="container">
        <!-- 1. interpolation view -->
        <div class="row bg-danger-subtle rounded Regular shadow">
            <div class="mb-3">
                <h3>Thong Tin San Pham</h3>
                <ul class="list-group">
                    <li class="list-group-item">ID : {{ product.id }}</li>
                    <li class="list-group-item">Ten SP : {{ product.name }}</li>
                    <li class="list-group-item">Gia SP : {{ product.price }}</li>
                    <li class="list-group-item">Danh muc : {{ product.category }}</li>
                </ul>
            </div>
        </div>
        <!-- 2.property biding view -->
        <!-- C1: SU dung v-bind:[Atribute]="ten_bien" -->
        <div class="row bg-danger-subtle rounded Regular shadow mt-4">
            <div class="mb-4">
                <h6>Property value</h6>
                <input type="text" class="form-control" v-bind:value="cauNoiYeuThich">
                <h6>Property src</h6>
                <img v-bind:src="logoUrl" style="height: 100px;" alt="">
            </div>
        </div>
        <!-- Even binding -->
        <div class="row bg-danger-subtle rounded Regular shadow mt-4">
            <div class="mb-3">
                <h3>Even binding</h3>
                <h6>Even click</h6>
                <button class="btn btn-primary" @click="onClickDangKy()">Dang Ky</button>
                <h6>Even blur</h6>
                <input type="text" class="form-control" @blur="onBlurInput()">
            </div>
        </div>
        <!-- 4. 2way data binding: dong bo du lieu tu js va html, su dung v-model  -->
        <div class="row bg-danger-subtle rounded Regular shadow mt-4">
            <div class="mb-3">
                <input type="text" class="form-control mt-3" v-model="hoVaTen">
                <p>Xin Chao, {{ hoVaTen }}</p>
            </div>
        </div>
        <!--  -->
        <div class="row bg-danger-subtle rounded Regular shadow mt-4">
            <div class="mb-3">
                <h3>Thong Tin Cate San Pham</h3>
                <ul class="list-group">
                    <li class="list-group-item">ID : {{ categoryInfo.id }}</li>
                    <li class="list-group-item">Ten DM : {{ categoryInfo.name }}</li>
                    <li class="list-group-item">So Luong  : {{ categoryInfo.count }}</li>
                    <li class="list-group-item">List SP :
                        <ul class="list-group">
                            <li class="list-group-item" v-for="pro in categoryInfo.listPro" :key="pro.id"> 
                                {{ pro.id }}  - {{ pro.name }} - {{ pro.price }} - {{ pro.status ? 'Con Hang' : 'Het Hang' }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div> 
    </div>
</template>