<script setup>
import { ref, reactive } from "vue";
const list_student = reactive([
    {
        id: '01',
        name: 'Lam',
        year: 2005,
        chuyenNganh: "Phát Triển Phần Mềm"
    },
    {
        id: '02',
        name: 'tuấn',
        year: 2005,
        chuyenNganh: "Phát Triển Phần Mềm"
    },
    {
        id: '01',
        name: 'thắng',
        year: 2005,
        chuyenNganh: "IT"
    },
]);
let student = reactive({
    id: "",
    name: "",
    year: "",
    chuyenNganh: "",
});
let indexSelected = -1;

// xóa
function onClickDelete  (index){
    const confirmed = confirm("bạn chăc chắn muốn xóa nó chứ");
    if(confirmed){
        list_student.splice(index, 1);
    }
};
const error = reactive({});
function validate(){
    let ketqua = true;
    if(!student.id || student.id.trim == ""){
        error.id = "Bạn Phải Nhập ID";
        return false;
    }else{
        ketqua = true;
        error.id = "";
    }
    if(!student.name || student.name.trim == ""){
        error.name = "Bạn Phải Nhập Tên";
        return false;
    }else{
        ketqua = true;
        error.name = "";
    }
    if(!student.year || student.name.trim == ""){
        error.year = "Bạn Phải Nhập Năm Sinh";
        return false;
    }else if(student.year > 2006){
        error.year = "Bạn Phải Trên 18 Tuổi";
        return false;
    }else{
        ketqua = true;
        error.year = "";
    }
    if(!student.chuyenNganh || student.chuyenNganh.trim == ""){
        error.chuyenNganh = "Bạn Phải Nhập Tên";
        return false;
    }else{
        ketqua = true;
        error.chuyenNganh = "";
    }
    return ketqua;
    
}
function onShowUpdate(index){
    indexSelected =index;
    student.id = list_student[index].id;
    student.name = list_student[index].name;
    student.year = list_student[index].year;
    student.chuyenNganh = list_student[index].chuyenNganh;
};
function onClickCreate(){
    console.log(validate());
    
    if(validate()){
        list_student.push({
            id:student.id,
            name:student.name,
            year:student.year,
            chuyenNganh:student.chuyenNganh,
        });
    }
}

function onClickUpdate(){
    if(indexSelected !== -1){
        list_student[indexSelected] = {
            id:student.id,
            name:student.name,
            year:student.year,
            chuyenNganh:student.chuyenNganh,
        };
        student.id = "";
        student.name = "";
        student.year = "";
        student.chuyenNganh = "";
        alert("Cập nhập Thành Công");
    }else{
        alert("Cập nhập Không Thành Công");
    }
}

</script>

<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ Tên</th>
                    <th scope="col">Năm Sinh</th>
                    <th scope="col">Chuyên Ngành</th>
                    <th scope="col">Thao Tác</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in list_student" :key="student.id">
                    <th scope="row">{{ student.id }}</th>
                    <td>{{ student.name }}</td>
                    <td>{{ student.year }}</td>
                    <td>{{ student.chuyenNganh }}</td>
                    <td>
                        <button class="btn btn-info">Xem</button>
                        <button class="btn btn-warning" @click="onShowUpdate(index)">Sửa</button>
                        <button class="btn btn-danger" @click="onClickDelete(index)">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
            <h2>Tạo mới sinh viên</h2>
        <form >
            <div class="mt-3">
                <label for="" class="form-label">ID:</label>
                <input type="text" class="form-control" v-model="student.id">
                <span v-if="error.id" class="text-danger">{{ error.id }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Họ Tên:</label>
                <input type="text" class="form-control" v-model="student.name">
                <span v-if="error.name" class="text-danger">{{ error.name }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Năm Sinh:</label>
                <input type="text" class="form-control" v-model="student.year">
                <span v-if="error.year" class="text-danger">{{ error.year }}</span>
            </div>
            <div class="mt-3">
                <label for="" class="form-label">Chuyên Ngành</label>
                <select class="form-control" v-model="student.chuyenNganh" name="" id="">
                    <option value="">Lựa Chọn</option>
                    <option value="Phát Triển Phần Mềm">Phát Triển Phần Mềm</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div class="mt-3 text-center">
                <button class="btn btn-secondary">Quay Lại</button>
                <button class="btn btn-success ms-1" @click.prevent="onClickCreate()">Tạo Mới</button>
                <button class="btn btn-info ms-1" @click.prevent="onClickUpdate()">Cập Nhật</button>
            </div>
        </form>
    </div>
</template>