import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './home.vue'
import Login from './login.vue'
import Page1 from './page1.vue'
import Page2 from './page2.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 },
  { path: '/login', component: Login },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
