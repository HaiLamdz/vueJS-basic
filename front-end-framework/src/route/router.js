import { createRouter, createWebHistory } from "vue-router";
import ListView from "@/components/baiHoc/day14/listView.vue";
import CreateView from "@/components/baiHoc/day14/createView.vue";
import UpdateView from "@/components/baiHoc/day14/updateView.vue";
import DetailView from "@/components/baiHoc/day14/detailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: ListView, name: "list"},
    { path: "/create", component: CreateView, name: "create"},
    { path: "/detail/:id", component: DetailView, name: "detail"},
    { path: "/update/:id", component: UpdateView, name: "update"},
  ]
});

export default router;