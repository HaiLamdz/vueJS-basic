<script setup>
import { ref, reactive } from "vue";

const age = ref(17);
const grade = ref(10);

const isAbsent = ref(true);
function toggleAbsent() {
	isAbsent.value = !isAbsent.value;
}

const array = reactive(['Food1', 'Food2', 'Food3', 'Food4']);
const des_arr = reactive({ Food1: 20, Food2: 30, Food3: 40, Food4: 50 })
const list_food = reactive([
	{ id: "f01", name: 'a', quantity: 10, price: 20 },
	{ id: "f02", name: 'b', quantity: 5, price: 30 },
	{ id: "f03", name: 'c', quantity: 7, price: 40 },
	{ id: "f04", name: 'd', quantity: 11, price: 50 }
])
// const count = ref(0);
function increamentCount(index) {
	list_food[index].quantity++;
}

function totalCart(){
	// const total = 0;
	return list_food.reduce((total, item) =>{
		return total + item.quantity* item.price;
	}, 0).toFixed(2)
}

// xoa san pham khoi gio hang
function deleteItem(id){
	// tim index cua doi tuong
	const index = list_food.findIndex((item)=>item.id == id);
	list_food.splice(index, 1);
}
</script>

<template>
	<div class="container">
		<h3>if - else</h3>
		<div v-if="age >= 18">
			<p class="text-success">{{ age }} tuoi, Ban da du tuoi di tu</p>
		</div>
		<div v-else>
			<p class="text-danger">{{ age }} tuoi, Ban chua du tuoi di tu</p>
		</div>
		<h6>Chech Diem So</h6>
		<div class="d-flex">
			<p>{{ grade }}</p> -
			<div v-if="grade >= 9">
				<p class="text-success">Xuat Sac</p>
			</div>
			<div v-else-if="grade >= 7.5">
				<p class=".text-primary">Gioi</p>
			</div>
			<div v-else-if="grade >= 6.5">
				<p class=".text-warning">Kha</p>
			</div>
			<div v-else>
				<p class=".text-danger">Trung Binh - Yeu</p>
			</div>
		</div>

		<!-- Check Diem Danh -->
		<button :class="isAbsent ? 'btn btn-danger' : 'btn btn-success'" @click="toggleAbsent()">
			{{ isAbsent ? "Vang Mat" : "Co Mat" }}
		</button>
		<hr>
		<div class="bg-danger-subtle p-4 rounded Regular shadow">
			<h3>LIST RENDERING</h3>
			<p>Danh Sach Mon An</p>
			<ul class="list-group" v-for="item in array" :key="item">
				<li class="list-group-item">{{ item }}</li>
			</ul>
			<p>Danh Sach Mon An Kem Theo Index</p>
			<ul class="list-group" v-for="(item, index) in array" :key="item">
				<li class="list-group-item">{{ index }} - {{ item }}</li>
			</ul>
			<p>Danh Sach Mon An Hien Thi Theo index - key - value</p>
			<!-- value truoc, key sau -->
			<ul class="list-group">
				<li class="list-group-item" v-for="( price, food, index) in des_arr" :key="index">
					{{ index }} - {{ food }} - {{ price }}vnd
				</li>
			</ul>
		</div>
		<div class="bg-danger-subtle p-4 mt-4 rounded Regular shadow">
			<h3>Ap Dung Gio Hang</h3>
			<table class="table mt-3">
				<thead>
					<tr>
						<th>id</th>
						<th>Ten</th>
						<th>So Luong</th>
						<th>Gia</th>
						<th>Thanh Tien</th>
						<th>Hanh Dong</th>
					</tr>
				</thead>
				<tbody>
					<tr class="" v-for="(food, index) in list_food" :key="food.id">
						<td>{{ food.id }}</td>
						<td>{{ food.name }}</td>
						<td>
							<div class="d-flex">
								<button class="btn btn-primary" :disabled="food.quantity < 1" @click="food.quantity--">-</button>
								<input type="text" class="form-control" v-model="food.quantity">
								<button class="btn btn-primary" @click="increamentCount(index)">+</button>
							</div>
						</td>
						<td>{{ food.price }}</td>
						<td>{{ (food.price * food.quantity).toFixed(2) }}</td>
						<td>
							<button class="btn btn-danger" onclick="return confirm('Ban muon xoa no ha??')" @click="deleteItem(food.id)">Xoa</button>
						</td>
					</tr>
					<tr>
						Tong Tien: {{ totalCart() }}  VND
					</tr>
				</tbody>
			</table>
		</div>
	</div>

</template>