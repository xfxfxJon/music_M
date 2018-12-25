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
import Search from '@/containers/Search'
import Player from '@/containers/Player'

import Dynamic from '@/containers/Dynamic'
import LocalMusic from '@/containers/LocalMusic'
import MyCollection from '@/containers/MyCollection'
import MyLike from '@/containers/MyLike'
import MyRadioStation from '@/containers/MyRadioStation'
import RecentlyPlay from '@/containers/RecentlyPlay'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Yinmu',
      component: Yinmu
    },
    {
      path: '/login',
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/player',
      name: 'Player',
      component: Player
    },
    {
      path: '/localmusic',
      name: 'LocalMusic',
      component: LocalMusic
    },
    {
      path: '/mycollection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/myradiostation',
      name: 'MyRadioStation',
      component: MyRadioStation
    },
    {
      path: '/recentlyplay',
      name: 'RecentlyPlay',
      component: RecentlyPlay
    },
    {
      path: '/mylike',
      name: 'MyLike',
      component: MyLike
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic

    }
  ]
})
