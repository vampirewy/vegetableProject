import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
   //重定向
    {
      path:'*',
      redirect:'homepage'
    },
    {
      path:'/homepage',
      name:'首页',
      component:HomePage
    }
  ]
})
