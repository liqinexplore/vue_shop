import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../components/Home'
import About from '../components/About'
Vue.use(VueRouter)
// const Home = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'about',
          component: About
        }
      ]
    }
  ]
})
// 输出router
export default router
