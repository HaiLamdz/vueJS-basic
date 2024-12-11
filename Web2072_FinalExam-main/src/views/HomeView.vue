<script setup>
import instanceAxios from "@/ultis/configAxios";
import {  onMounted, ref} from "vue";

const employees = ref([]);

const getemployees = async ($id) => {
  const {data} = await instanceAxios.get(`employees`)
  employees.value = data;
}
const deleteEmployee = async ($id) => {
  const isDelete = confirm("b muốn Xóa??");
  if(!isDelete) return;
  await instanceAxios.delete(`employees/${$id}`);
  getemployees();
}
onMounted(() => {
  getemployees();
})
</script>

<template>
  <div class="container">
    <h3 class="text-center">Danh Sách Nhân Viên</h3>
    <RouterLink class="btn btn-success" :to="`/create`" >Tạo Mới</RouterLink>
    <table class="table">
      <thead>
        <tr >
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">YOb</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <th scope="row">{{ employee.id }}</th>
          <td >{{ employee.name }}</td>
          <td >{{ employee.yOb }}</td>
          <td >{{ employee.email }}</td>
          <td><img width="100" :src="employee.image" alt=""></td>
          <td>
            <RouterLink class="btn btn-info" :to="`/detail/${employee.id}`">Show</RouterLink>
            <RouterLink class="btn btn-warning" :to="`/update/${employee.id}`">Cập Nhật</RouterLink>
            <button class="btn btn-danger" @click="deleteEmployee(employee.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
