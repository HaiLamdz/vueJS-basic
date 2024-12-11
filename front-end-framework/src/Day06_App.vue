<script setup>
import { ref, reactive } from "vue";
const list_book = reactive({
    books: [
        {
            name: 'book1',
            publish: 'publish1',
            year: 2023,
            price: 1000,
        },
        {
            name: 'book2',
            publish: 'publish2',
            year: 2010,
            price: 2000,
        },
        {
            name: 'book3',
            publish: 'publish3',
            year: 2000,
            price: 3000,
        },
    ],
    libary: [
        {
            name: 'book4',
            publish: 'publish4',
            year: 2003,
        },
        {
            name: 'book5',
            publish: 'publish5',
            year: 2002,
        },
        {
            name: 'book6',
            publish: 'publish6',
            year: 2001,
        }
    ],
});

function ageBook(bookyear, bookname) {
    const date = new Date();
    const year_now = date.getFullYear();
    const year = year_now - bookyear;
    // const age = date_Now - year;
    alert('Tuổi của ' + bookname + ' là: ' + year);
};

function detailBook(bookname, bookpublish){
    alert('Tên sách: ' + bookname + ', ' + 'Tác Giả: ' + bookpublish)
}
</script>
<template>
    <div class="container-fluid">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên Sách</th>
                    <th scope="col">Tác Giả</th>
                    <th scope="col">Năm Xuất Bản</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Update Giá</th>
                    <th scope="col">Tuổi Sách</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(book, index) in list_book.books" :key="book">
                    <th scope="row">{{ ++index }}</th>
                    <td>{{ book.name }}</td>
                    <td>{{ book.publish }}</td>
                    <td>{{ book.year }}</td>
                    <td>{{ book.price }}</td>
                    <td><input type="number" class="form-control" v-model="book.price"></td>
                    <td><button class="btn btn-success" @click="ageBook(book.year, book.name)">Tính Tuổi</button></td>
                </tr>
            </tbody>
            <!--  -->
            <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên Sách</th>
                    <th scope="col">Năm Xuất Bản</th>
                    <th scope="col">Chi Tiết</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(books, index) in list_book.libary" :key="books">
                    <td>{{ ++index }}</td>
                    <td>{{ books.name }}</td>
                    <td>{{ books.year }}</td>
                    <td><button class="btn btn-success" @click="detailBook(books.name, books.publish)">Chi Tiết</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>