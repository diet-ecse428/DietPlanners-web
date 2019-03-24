import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logbook from '@/components/Logbook'
import MyAccount from '@/components/MyAccount'
import Progress from '@/components/Progress'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    } ,
    {
      path: '/app/logbook',
      name: 'Logbook',
      component: Logbook
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/app/myaccount',
      name: 'MyAccount',
      component: MyAccount
    },
    {
      path: '/app/progress',
      name: 'Progress',
      component: Progress
    }
  ]
})
