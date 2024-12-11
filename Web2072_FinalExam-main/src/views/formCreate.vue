<template>
     <div class="container">
        <h3 class="text-center">create</h3>
        <form @submit.prevent="handleSubmit()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="employee.name">
                <span class="text-danger" v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div class="mb-3">
                <label for="yob" class="form-label">yOb</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="employee.yOb">
                <span class="text-danger" v-if="errors.yOb">{{ errors.yOb }}</span>
            </div>
            <div class="mb-3 ">
                <label for="email">email</label>
                <input type="text" class="form-control" id="exampleCheck1" v-model="employee.email">
                <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
            </div>
            <div class="mb-3 ">
                <label for="img">image</label>
                <input type="text" class="form-control" id="exampleCheck1" v-model="employee.image">
                <span class="text-danger" v-if="errors.image">{{ errors.image }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import router from "@/router";
import instanceAxios from "@/ultis/configAxios";
import { reactive, ref } from "vue";
const employee = ref({
    name: '',
    yOb: '',
    email: '',
    image: ''
})
const errors = reactive([])
const validateForm = () => {
    let ketqua = true;
    if(!employee.value.name.trim()){
        errors.name = 'Name là 1 chuỗi ký tự'
        return false;
    }else{
        errors.name = '';
        ketqua = true;
    }

    if(!employee.value.yOb.trim() || isNaN(employee.value.yOb) || employee.value.yOb > 2024 || employee.value.yOb < 1900){
        errors.yOb = "yOb phải là số năm hợp lệ";
        return false;
    }else{
        errors.yOb = "";
        ketqua = true;
    }

    const testEmail = /^\S+@\S+\.\S+$/;
    if(!testEmail.test(employee.value.email.trim())){
        errors.email = "email không hợp lệ";
        return false;
    }else{
        errors.email = "";
        ketqua = true;
    }

    const testImage = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    if(!testImage.test(employee.value.image.trim())){
        errors.image = "img phải là 1 đường link";
        return false;
    }else{
        errors.image = "";
        ketqua = true;
    }
    return ketqua;
}
const handleSubmit = async () => {
    if(!validateForm()) return; 
    await instanceAxios.post(`employees`, employee.value)
    router.push({name: 'home'})
}
</script>

<style lang="scss" scoped>

</style>