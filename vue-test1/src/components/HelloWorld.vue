<template>
  <div>
      <div class="content">
        <router-view/>
      </div>
    <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/classify">分类</router-link>
        <router-link to="/community">社区</router-link>
        <router-link to="/shopcart">购物车</router-link>
        <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{margin:0;pading:0;list-style: none}
  .nav{position:fixed;bottom:0;width:100%;display:flex;border-top:1px solid #ccc;background:#fff}
  .nav a{flex:1;display:block;text-align:center;line-height:50px;color:#000;text-decoration:none}
  .content{font-size:30px;padding-bottom: 50px}
</style>
