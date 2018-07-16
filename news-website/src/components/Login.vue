<template>
    <div class="wrapper">
        <div class="header">
            登陆
        </div>
        <div class="container-wrapper">
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <label for="usrname" class="col-xs-2 control-label">昵称：</label>
                    <div class="col-xs-10">
                        <input type="text" class="form-control" placeholder="请输入昵称" name="username" id="username">
                    </div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-xs-2 control-label">密码：</label>
                    <div class="col-xs-10">
                        <input type="password" class="form-control" placeholder="请输入密码" maxlength="12" name="password" id="password">
                    </div>
                </div>
                <button class="btn btn-block btn-info">确认</button>
            </form>
        </div>
        <div class="footer">
            <router-link to="/forget-pwd">忘记密码？</router-link>
            <router-link to="/register">还没有账号，去注册</router-link>
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
    .container-wrapper{padding: 10px;padding-top: 3rem!important}
    .control-label{padding-right:0;line-height: 34px}
    .col-xs-10{padding-left: 0}
    .footer {text-align: right;padding-right:15px}
    .footer a{display: block;margin-bottom:10px}
    .footer a:hover{text-decoration: underline}
</style>