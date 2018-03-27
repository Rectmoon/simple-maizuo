import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Film from '@/pages/films'
import Detail from '@/pages/detail'
import Cinema from '@/pages/cinema'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'lzx',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/film/:type',
      name: 'film',
      component: Film
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/cinema/:id',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '*',
      redirect:'/home'
    }
  ] 
})
