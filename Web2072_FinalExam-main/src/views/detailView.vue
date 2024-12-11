<template>
    <div class="container">
        <h3 class="text-center">Detail</h3>
        <table class="table">
      <thead>
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">YOb</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <th scope="row">{{ employee.id }}</th>
          <td >{{ employee.name }}</td>
          <td >{{ employee.yOb }}</td>
          <td >{{ employee.email }}</td>
          <td><img width="100" :src="employee.image" alt=""></td>
          
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script setup>
import instanceAxios from "@/ultis/configAxios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const employee = ref([]);
const {params} = useRoute();
console.log(params.id);


const getEmployee = async() =>{
    const {data} = await instanceAxios.get(`employees/${params.id}`);
    employee.value = data;
} 


onMounted(() => {
    getEmployee();
})
</script>

<style lang="scss" scoped></style>