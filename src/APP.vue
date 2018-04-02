<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import Tabs from './pages/tabs/tabs'
  export default {
   components:{
     'tabbar':Tabs
   }
  }
</script>
<style lang="less" scoped>


</style>

