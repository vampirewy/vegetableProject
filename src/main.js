import Vue from 'vue'
import App from './App'

var vm=new Vue({
  el:'#app',
  template:'<App/>',
 components:{App}
})
console.log(vm);
