<template>
  <div class="homepage">
    <h1>{{msg}}</h1>
    <!--<img :src="poster" alt="">-->
    <h2>大家好</h2>
    <img :src="ball" alt="">
    <img src="../img/pic_huodong_bg@3x.png" alt=""/>
  </div>
</template>

<script>
  import background from '../img/pic_huodong_bg@3x.png'
  import ball from '../img/basketball.png'
  export default {
    data(){
      return{
        msg:'hello~',
        poster:background,
        ball:ball
      }
    }
}
</script>
<style scoped lang="less">
  @import '../less/homepage.less';
</style>
