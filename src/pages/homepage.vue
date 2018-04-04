<template>
  <div class="homepage">
    <p>{{msg}}</p>
    <img src="../img/tabs/pic_huodong_bg@3x.png" alt="">
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
    border:1px solid red;
  }
</style>
