<template>
  <div id="app">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        msg:'hello world!!!!!!'
      }
    }
  }
</script>
<style scoped lang="less">
  #app{
    h1{
      background:red;
    }
  }
</style>

