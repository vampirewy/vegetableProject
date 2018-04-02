<template>
  <div class="homepage">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:'这是商城'
      }
    }
}
</script>
<style scoped lang="less">
  .homepage{
    border:.5px solid red;
  }
</style>
