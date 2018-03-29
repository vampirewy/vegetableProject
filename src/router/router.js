import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/homepage'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'*',
      redirect:'/homepage'
    },
    {
      path:'/homepage',
      name:'HomePage',
      component:HomePage
    }
  ]
})