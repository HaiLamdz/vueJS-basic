<script setup>
import { ref, reactive } from "vue";

const products = reactive({
    list: [
        {
            id: "SP01",
            ten: "Ao Khoac",
            anh: "/img/logo2.png",
            gia: 100,
            idDanhMuc: "DM01",
            tenDanhMuc: "Ao Blazer",
            status: true
        },
        {
            id: "SP02",
            ten: "Ao So Mi",
            anh: "/img/logo3.jpg",
            gia: 200,
            idDanhMuc: "DM02",
            tenDanhMuc: "t-shift",
            status: false,
        },
    ]
}

);
function ComfirmDelete() {
    alert('Ban chac chan muon xoa ban ghi');
}

const increament = () => {
    count.value--;
}
function increamentCount() {
    count.value++;
}

function Buy(){
    alert('Mua Hang Thanh Cong');
}
</script>

<template>
    <div style="width: 100%;">
        <h2>danh sach san pham</h2>
        <button class="btn btn-success" style="margin-left: 70%;">Tao Moi San Pham</button>
        <table class="table" border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Anh</th>
                    <th>Ten</th>
                    <th>Danh Muc</th>
                    <th>Trang Thai</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- <li class="list-group-item" v-for="pro in categoryInfo.listPro" :key="pro.id"> 
                                {{ pro.id }}  - {{ pro.name }} - {{ pro.price }} - {{ pro.status ? 'Con Hang' : 'Het Hang' }}
                            </li> -->
                <tr class="table-active" v-for="product in products.list" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td><img v-bind:src="product.anh" width="90" alt=""></td>
                    <td>{{ product.ten }}</td>
                    <td>{{ product.tenDanhMuc }}</td>
                    <td>{{ product.status ? 'Con Hang' : 'Het Hang' }}</td>
                    <td>
                        <button class="btn btn-primary">Xem</button>
                        <button class="btn btn-warning">Sua</button>
                        <button class="btn btn-danger" @click="ComfirmDelete()">Xoa</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <h2>Gio Hang</h2>
        <table class="table" border="1">
            <thead>
                <tr>
                    <th>San Pham</th>
                    <td></td>
                    <td></td>
                    <th>Don Gia</th>
                    <th>So Luong</th>
                    <th>So Tien</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products.list" :key="product.id">
                    <td><input type="checkbox"></td>
                    <td><img v-bind:src="product.anh" width="90" alt=""></td>
                    <td>{{ product.ten }}</td>
                    <td>{{ product.gia }}</td>
                    <td>
                        <div class="d-flex">
                            <button class="btn btn-primary" @click="increament">-</button>
                            1 {{ count }}
                            <button class="btn btn-primary" @click="increamentCount">+</button>
                        </div>
                    </td>
                    <td>{{ product.gia }}</td>
                    <td>
                        <button class="btn btn-danger" @click="ComfirmDelete()">Xoa</button>
                    </td>
                </tr>

            </tbody>
        </table>
        <tr>
            <td><input type="checkbox"></td>
            <td>Chon Tat Ca(2)</td>
            <td><button class="btn btn-danger">Xoa</button></td>
        </tr>
        <button class="btn btn-success" style="margin-left: 80%;" @click="Buy()">Mua Hang</button>
    </div>
</template>