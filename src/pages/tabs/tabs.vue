<template>
  <div class="tabs">
    <mt-tabbar fixed>
      <mt-tab-item>
        <p slot="icon" class="icon"></p>
        <p>商城</p>
      </mt-tab-item>
      <mt-tab-item>
        <p slot="icon" class="icon"></p>
        <p>购物车</p>
      </mt-tab-item>
      <mt-tab-item>
        <p slot="icon" class="icon"></p>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="less">
.mint-tab-item{
  padding:0;
}
.tabs{
  .icon{
    width:1rem;
    height:1rem;
    background:url(../../img/tabs/icons.png)
  }
}
</style>