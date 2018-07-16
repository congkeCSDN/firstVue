<template>
    <div class="header-nav">
        <router-link to="/home">首页</router-link>
        <router-link to="/follow">关注</router-link>
        <router-link to="/column">栏目</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header-nav{height:44px;line-height:44px;position: fixed;width:100%;left:0;top:0;background:#fff;z-index:999}
    .header-nav a{display: block;width:33.3%;box-sizing: border-box;float: left;text-decoration:none;color:#333;text-align: center}
    .router-link-active{border-bottom: 2px solid #007aff;color:#007aff}
</style>