<script setup>
import { ref, reactive } from "vue";
// Tạo mảng sinh viên
const list_student = reactive([
    {
        id: "PH0001",
        name: "Nguyễn Văn A",
        yOb: 2004,
        mayjor: "Phát Triển Phần Mềm"
    },
    {
        id: "PH0002",
        name: "Nguyễn Thị B",
        yOb: 2005,
        mayjor: "Ứng Dụng Phần Mềm"
    },

    {
        id: "PH0003",
        name: "Nguyễn Văn C",
        yOb: 2005,
        mayjor: "Ứng Dụng Phần Mềm"
    },
]);
let student = reactive({
    id: "",
    name: "",
    yOb: 0,
    mayjor: ""
});
let indexSelected = -1;

// Xóa
const onClickDelete = (index) => {
    const confirmed = confirm("Bạn có chắc muốn xóa không?");
    if (confirmed) {
        // thực hiện xóa
        list_student.splice(index, 1);
    }
}

const onClickCreate = () => {
    // validate: viết hàm tự xử lý
    // const validate = true;
    // if (validate) {
    console.log(student);
    list_student.push({
        id: student.id,
        name: student.name,
        yOb: student.yOb,
        mayjor: student.mayjor
    });
    // }
}
// Chọn đối tượng để sửa
const onClickSelect = (index) => {

    console.log(list_student[index].id);
    indexSelected = index;
    // dùng ref để thay thế giá trị toàn bộ đối tượng
    // student.value = {
    //     id: list_student[index].id,
    //     name: list_student[index].name,
    //     yOb: list_student[index].yOb,
    //     mayjor: list_student[index].mayjor
    // };
    // dùng reactive
    student.id = list_student[index].id;
    student.name = list_student[index].name;
    student.yOb = list_student[index].yOb;
    student.mayjor = list_student[index].mayjor;
}

// Cập nhật đối tượng vừa chọn
// const
const onClickUpdate = () => {
    if (indexSelected !== -1) {
        // Kiểm tra nếu đã chọn một sinh viên
        list_student[indexSelected] = {
            id: student.id,
            name: student.name,
            yOb: student.yOb,
            mayjor: student.mayjor
        };
        // Reset trạng thái sau khi cập nhật
        student.id = "";
        student.name = "";
        student.yOb = 0;
        student.mayjor = "";
        indexSelected = -1;
        alert("Cập nhật thành công!");
    } else {
        alert("Vui lòng chọn sinh viên cần cập nhật!");
    }
};

</script>
<template>
    <div>
        <h2>Danh sách sinh viên</h2>
        <table class="table table-tripped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Năm sinh</th>
                    <th>Chuyên ngành</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(student, index) in list_student" :key="student.id">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.yOb }}</td>
                    <td>{{ student.mayjor }}</td>
                    <td>
                        <button class="btn btn-info btn-sm me-2"> Xem </button>
                        <button class="btn btn-warning btn-sm me-2" @click="onClickSelect(index)"> Sửa </button>
                        <button class="btn btn-danger btn-sm me-2" @click="onClickDelete(index)"> Xóa </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <h2>Tạo mới sinh viên</h2>
        <form>
            <div class="mt-3">
                <span class="form-label">ID:</span>
                <input type="text" class="form-control" v-model="student.id">
            </div>

            <div class="mt-3">
                <span class="form-label">Họ tên:</span>
                <input class="form-control" type="text" v-model="student.name">
            </div>

            <div class="mt-3">
                <span class="form-label">Năm sinh:</span>
                <input class="form-control" type="text" v-model="student.yOb">
            </div>

            <div class="mt-3">
                <span class="form-label">Chuyên ngành:</span>
                <select class="form-control" v-model="student.mayjor">
                    <option value="">- Lựa chọn -</option>
                    <option value="Phát Triển Phần Mềm">Phát Triển Phầm Mềm</option>
                    <option value="Ứng Dụng Phần Mềm">Ứng Dụng Phầm Mềm</option>
                    <option value="Lập Trình WEB">Lập Trình WEB</option>
                </select>
            </div>

            <div class="mt-3 text-center">
                <a href="" class="btn btn-secondary me-3">Quay Lại</a>
                <a class="btn btn-success me-3" @click="onClickCreate()">Tạo Mới</a>
                <a class="btn btn-info" @click="onClickUpdate()">Cập nhật</a>
            </div>
        </form>
    </div>

</template>