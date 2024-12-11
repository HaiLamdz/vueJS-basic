<template>
    <div class="container">
        <h3>Update</h3>
        <form @submit.prevent="handleSubmit()">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="employee.name">
            </div>
            <div class="mb-3">
                <label for="yob" class="form-label">yOb</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="employee.yOb">
            </div>
            <div class="mb-3 ">
                <label for="email">email</label>
                <input type="text" class="form-control" id="exampleCheck1" v-model="employee.email">
            </div>
            <div class="mb-3 ">
                <label for="img">image</label>
                <input type="text" class="form-control" id="exampleCheck1" v-model="employee.image">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import router from "@/router";
import instanceAxios from "@/ultis/configAxios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const {params} = useRoute()

const employee = ref({
    id: params.id,
    name: '',
    yOb: '',
    email: '',
    image: ''
})

const getemployee = async () => {
    const {data} = await instanceAxios.get(`employees/${params.id}`)
    employee.value = data;
}

const handleSubmit = async () => {
    await instanceAxios.put(`employees/${params.id}`, employee.value)
    router.push({name: 'home'})
}
onMounted(() => {
    getemployee();
})
</script>

<style lang="scss" scoped></style>