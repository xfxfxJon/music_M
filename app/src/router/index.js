import Vue from 'vue'
import Router from 'vue-router'

//页面
import Yinmu from '@/containers/Yinmu'
import Mine from '@/containers/Mine'
import Dongtai from '@/containers/Dongtai'
import Recommend from '@/containers/Home_containers/Recommend'
import MusicList from '@/containers/Home_containers/MusicList'
import Diantai from '@/containers/Home_containers/Diantai'
import TopMusic from '@/containers/Home_containers/TopMusic'
import Login from '@/containers/Login'
import Register from '@/containers/Register'
import Relogin from '@/containers/Relogin'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/relogin',
      name: 'Relogin',
      component: Relogin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/yinmu',
      name: 'Yinmu',
      component: Yinmu
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/dongtai',
      name: 'Dongtai',
      component: Dongtai
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/musiclist',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/diantai',
      name: 'Diantai',
      component: Diantai
    },
    {
      path: '/topmusic',
      name: 'TopMusic',
      component: TopMusic
    }
  ]
})
