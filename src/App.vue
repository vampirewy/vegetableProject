<template>
  <div id="app">
    <!--底部tabs页-->
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tabs from './public/tabs'
export default {
  name: 'App',
  components:{
    //tabs页
    'tab':Tabs
  }
}
</script>

<style>
#app {

}
</style>
