<!-- C1: ÔPTION API -->

<!-- <script>
export default{
    // Khai báo biến
    data(){
        return {
            count: 0
        }
    },
    // Khai báo hàm
    methods: {
        increament(){
            this.count++;
        }
    }
}
</script>
<template>
    Count: {{ count }}
    <button @click="increament">Tăng số lượng</button>
</template> -->

<!-- C2: COMPOSITION API -->

<script setup>
import { ref, reactive } from 'vue';
// 1. Dùng ref với kiểu dữ liệu nguyên thủy
const count = ref(0);
const studentName = ref('Vũ Hai Lam');
const studentAge = 19;
const status = ref(true);

	// dung reative voi du lieu dang doi tuong
	const info = reactive({
		name: 'Truong Nguyen Anh Tuyet',
		age: 19,
		status: false,
	})

// Có 2 cú pháp viết hàm
const increament = () => {
	count.value--;
}
function increamentCount() {
	count.value++;
}
</script>
<template>
	<div class="d-flex">
		<button @click="increament">giam số lượng</button>
		Count: {{ count }}
		<button @click="increamentCount">Tăng số lượng</button>
	</div>
	<br>
	<ul class="list-group mt-5">
		<li class="list-group-item">Ten: {{ info.name }}</li>
		<li class="list-group-item">Tuoi: {{ info.age }}</li>
		<li class="list-group-item">Trang Thai: {{ info.status ? 'Dang Hoc' : 'Da Nghi' }}</li>
	</ul>
</template>