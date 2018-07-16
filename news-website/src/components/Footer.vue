<template>
    <div class="footer">
        <router-link tag="li" to="/home">
            <a href="javascrit:;" class="home"></a>
        </router-link>
        <router-link tag="li" to="/edit">
            <a href="javascrit:;" class="edit"></a>
        </router-link>
        <router-link tag="li" to="/mine">
            <a href="javascrit:;" class="mine"></a>
        </router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer{position:fixed;left:0;bottom:0;border-top:1px solid #ccc;height:44px;line-height:44px;width:100%;overflow: hidden;background:#fff;z-index:999}
    .footer li{float: left;width:33.3%;height:30px;text-align: center;line-height: 30px;margin:7px 0}
    .footer a {width:30px;height:100%;margin:0 auto;display: block}
    .footer .home{background: url("../assets/img/home1.png") no-repeat;background-size: 33px}
    .footer .edit{background: url("../assets/img/write.png") no-repeat;background-size: 30px}
    .footer .mine{background: url("../assets/img/my.png") no-repeat;background-size: 29px}
    .router-link-active .home{background: url("../assets/img/home.png") no-repeat;background-size: 33px}
    .router-link-active .mine{background: url("../assets/img/my1.png") no-repeat;background-size: 29px}
</style>