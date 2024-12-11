<script setup>
import header_admin from "./components/admin/header_admin.vue";
import footer_admin from "./components/admin/footer_admin.vue";
import sideBar_admin from "./components/admin/sideBar_admin.vue";
import insertProduct from "./components/admin/product/insertProduct.vue";


</script>
<template>
   <div class="bg-danger-subtle p-3 shadow">
     <!-- header -->
     <header_admin></header_admin>
    <!-- main -->
    <main class=" d-flex mt-4">
        <!-- menu -->
        <div class="col-3 mt-2 ">
            <sideBar_admin></sideBar_admin>
        </div>
        <!-- noi dung chinh -->
        <div class="col-9 bg-light-subtle p-3 shadow">
            <insertProduct></insertProduct>
        </div>
    </main>
    <!-- footer -->
    <footer_admin></footer_admin>
   </div>
</template>