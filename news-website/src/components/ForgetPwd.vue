<template>
    <div class="wrapper">
        <div class="header">
            <a href="javascript:;" @click="$router.back()">〈</a>
            忘记密码
        </div>
        <div class="container-wrapper">
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <label for="" class="col-xs-2 control-label">手机号：</label>
                    <div class="col-xs-10">
                        <input type="text" class="form-control" placeholder="请输入手机号" maxlength="12">
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-xs-2 control-label">验证码：</label>
                    <div class="col-xs-10 verify-code">
                        <input type="number" class="form-control" placeholder="请输入验证码" maxlength="12">
                        <span class="phone-code">获取验证码</span>
                    </div>
                </div>
                <router-link to="/login" class="btn btn-info btn-block">确认</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .header{width:100%;height:44px;line-height: 44px;text-align: center;background:#007aff;color:#fff;position: fixed;left:0;top:0;z-index: 999}
    .header a{display: block;position: absolute;left:10px;top:0;width:30px;height:44px;line-height: 44px;text-align: center;color:#fff}
    .container-wrapper{padding: 10px;padding-top: 3rem!important}
    .control-label{padding-right:0;line-height: 34px}
    .col-xs-10{padding-left: 0}
    .verify-code{position: relative;}
    .verify-code span{position: absolute;right:15px;top:0px;display: block;width:100px;height:34px;line-height: 34px;text-align: center;background:sandybrown;border-radius: 4px;color:#fff}
</style>