import { createWebHistory, createRouter } from 'vue-router'
import Home from '../page/home.vue'
import base_introduce from '../page/base/introduce.vue'
import base_temSyntax from '../page/base/temSyntax.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', name: 'home', component: Home
    },
    { path: '/base_introduce', name: 'base_introduce', component: base_introduce },
    { path: '/base_temSyntax', name: 'base_temSyntax', component: base_temSyntax },
  ]
})

export default router