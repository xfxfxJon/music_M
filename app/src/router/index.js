import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'  
import Relogin from '@/components/Relogin'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
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
    } 
  ]
})
