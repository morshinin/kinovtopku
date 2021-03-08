import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import MovieDetail from '../views/MovieDetail.vue'
import NewHome from "@/views/NewHome";
import SingleMovie from "@/views/SingleMovie";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Single Movie',
    component: SingleMovie
  },
  {
    path: '/new-home',
    name: 'New Home',
    component: NewHome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
