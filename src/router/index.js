import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import RentHouse from '@/components/RentHouse'
import SecondHandHouse from '@/components/SecondHandHouse'
import NewHouse from '@/components/NewHouse'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/rent_house',
          name: 'RentHouse',
          component: RentHouse
        },
        {
          path: '/second_hand_house',
          name: 'SecondHandHouse',
          component: SecondHandHouse
        },
        {
          path: '/new_house',
          name: 'NewHouse',
          component: NewHouse
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
