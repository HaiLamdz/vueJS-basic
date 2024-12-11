import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '@/views/detailView.vue'
import FormCreate from '@/views/formCreate.vue'
import FormUpdate from '@/views/formUpdate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/create',
      name: 'create',
      component: FormCreate
    },
    {
      path: '/update/:id',
      name: 'update',
      component: FormUpdate
    },
  ]
})

export default router
