import { createWebHistory, createRouter } from 'vue-router'
import Home from '../page/home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/',name:'home',component:Home}
  ]
})

export default router