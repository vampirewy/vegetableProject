import Vue from 'vue'
import App from './App'
//router的r不能大写，否则报错，类型出错
import router from './router/router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUi)

var vm=new Vue({
  el:'#app',
  router,
  template:'<App/>',
 components:{App}
})
console.log(vm);
