import Vue from 'vue'
import Router from 'vue-router'

//页面zhy
import Yinmu from '@/containers/Yinmu'
import Mine from '@/containers/Mine'
import Dongtai from '@/containers/Dongtai'
import BigList from '@/containers/BigList'
//gcx
import Login from '@/containers/Login'
import Register from '@/containers/Register'
import Relogin from '@/containers/Relogin'
import Search from '@/containers/Search'
import Player from '@/containers/Player'
import DtDetail from '@/containers/DtDetail'
//xy
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

    },
    {
      path: '/biglist',
      name: 'BigList',
      component: BigList

    },
    {
      path: '/dtdetail',
      name: 'DtDetail',
      component: DtDetail
    }
  ]
})
