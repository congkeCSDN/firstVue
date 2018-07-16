<template>
    <div class="mine">
        <div class="mine-top">
            <div class="portrait">
                <img src="../assets/img/headimg.png">
            </div>
            <div class="login-reg">
                <router-link to="/login">登陆</router-link>
                |
                <router-link to="/register">注册</router-link>
            </div>
        </div>
        <ul class="mine-list">
            <li>
                <label class="icon wallet"></label>
                钱包
                <span></span>
            </li>
            <li>
                <label class="icon collect"></label>
                收藏
                <span></span>
            </li>
            <li>
                <label class="icon picture"></label>
                相册
                <span></span>
            </li>
            <li>
                <label class="icon card-bag"></label>
                卡包
                <span></span>
            </li>
            <li>
                <label class="icon expression"></label>
                表情
                <span></span>
            </li>
            <li>
                <label class="icon setting"></label>
                设置
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    /*@import "../assets/fonts/iconfont.css";*/
    .mine-top{background:#d40;height:180px;overflow: hidden}
    .mine-top .portrait{width:100px;height:100px;border-radius: 50%;overflow: hidden;margin:35px auto 0}
    .mine-top .login-reg{line-height: 30px;text-align: center}
    .mine-top .login-reg a{color:#fff;}
    .mine-list{margin:10px auto;padding:10px}
    .mine-list li{border-bottom:1px solid #ccc;height:40px;line-height:40px}
    .mine-list li label{float: left;width:40px;height:40px;max-width: none;margin-bottom: 0;font-weight: normal}
    .mine-list li .wallet{background: url("../assets/img/wallet.png") no-repeat center center;background-size: 20px}
    .mine-list li .collect{background: url("../assets/img/collect.png") no-repeat center center;background-size: 20px}
    .mine-list li .picture{background: url("../assets/img/picture.png") no-repeat center center;background-size: 20px}
    .mine-list li .card-bag{background: url("../assets/img/card-bag.png") no-repeat center center;background-size: 20px}
    .mine-list li .expression{background: url("../assets/img/expression.png") no-repeat center center;background-size: 20px}
    .mine-list li .setting{background: url("../assets/img/setting.png") no-repeat center center;background-size: 20px}
    .mine-list li span{float: right;background: url('../assets/img/next_img.png') no-repeat center center;background-size: 20px;width:40px;height: 40px;}
</style>