<template>
  <div class="homepage">
    <h1>{{msg}}</h1>
    <img :src="poster" alt="">
    <img :src="ball" alt="">
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
