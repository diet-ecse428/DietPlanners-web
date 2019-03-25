import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import Register from '@/components/Register.vue'
import Logbook from '@/components/Logbook.vue'
import MyAccount from '@/components/MyAccount.vue'
import Progress from '@/components/Progress.vue'


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
