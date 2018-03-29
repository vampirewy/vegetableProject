import Vue from 'vue'
import App from './App'
import router from './router/router'
var vm=new Vue({
  el:'#app',
  router,
  template:'<App/>',
 components:{App}
})
console.log(vm);
