<template>
  <div class="homepage">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg:'hello~'
      }
    }
}
</script>
<style scoped lang="less">
  @import '../less/homepage.less';
</style>
