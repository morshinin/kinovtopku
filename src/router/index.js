import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import SingleMovie from "@/views/SingleMovie";

const routes = [
  {
    path: '/movie/:id',
    name: 'Single Movie',
    component: SingleMovie
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
