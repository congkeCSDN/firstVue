<template>
    <div class="wrapper">
        <div class="header">
            注册
        </div>
        <div class="container-wrapper">
            <form action="" class="form-horizontal">
                <div class="form-group">
                    <label for="username" class="col-xs-3 control-label">昵称：</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" placeholder="请输入昵称" name="username" id="username" v-model="username" v-validate="'required|username'" data-vv-as='昵称'>
                    </div>
                    <div class="errors" v-show="errors.has('username')">{{errors.first('username')}}</div>
                </div>
                <div class="form-group">
                    <label for="password" class="col-xs-3 control-label">密码：</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" placeholder="请输入密码" name="password" id='password' v-model="password" v-validate="'required|password'" data-vv-as="密码">
                    </div>
                    <div class="errors" v-show="errors.has('password')">{{errors.first('password')}}</div>
                </div>
                <div class="form-group">
                    <label for="rePwd" class="col-xs-3 control-label">确认密码：</label>
                    <div class="col-xs-9">
                        <input type="password" class="form-control" placeholder="请确认密码" name="rePwd" id="rePwd" v-model="rePwd" v-validate="'required|rePwd'" data-vv-as="密码">
                    </div>
                    <div class="errors" v-show="errors.has('rePwd')">{{errors.first('rePwd')}}</div>
                </div>
                <div class="form-group">
                    <label for="phone" class="col-xs-3 control-label">手机号：</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" placeholder="请输入手机号" name="phone" id="phone" v-model="phone" v-validate="'required|phone'" data-vv-as="手机号">
                    </div>
                    <div class="errors" v-show="errors.has('phone')">{{errors.first('phone')}}</div>
                </div>
                <div class="form-group">
                    <label for="phoneCode" class="col-xs-3 control-label">验证码：</label>
                    <div class="col-xs-9 verify-code">
                        <input type="text" class="form-control" placeholder="请输入验证码" name="phoneCode" id="phoneCode" v-model="phoneCode" v-validate="'required'">
                        <span class="phone-code" @click="changeTxt" ref="phoneCode">获取验证码</span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="imgCode" class="col-xs-3 control-label">图形码：</label>
                    <div class="col-xs-9 verify-code">
                        <input type="text" class="form-control" placeholder="请输入图形码" name="imgCode" id="imgCode" v-model="imgCode" v-validate="'required|imgCode'" data-vv-as="图形码">
                        <span class="img-code" ref="imgCode" @click="changeNum">1678</span>
                    </div>
                    <div class="errors" v-show="errors.has('imgCode')">{{errors.first('imgCode')}}</div>
                </div>
                <button class="btn btn-block btn-info" @click="validateBeforeSubmit">提交</button>
            </form>
        </div>
        <div class="footer">
            <router-link to="/login">已有账号，去登陆</router-link>
        </div>
    </div>
</template>

<script>
    import VeeValidate from 'vee-validate'

    VeeValidate.Validator.localize('zh_CN');
    VeeValidate.Validator.localize({
        zh_CN: {
            messages: {
                required(name) {
                    return name + '不能为空'
                }
            }
        }
    });
    VeeValidate.Validator.extend('username',{
        getMessage(){
            return '请输入4-10位以字母和字母或数字组合的字符'
        },
        validate(value) {
            return /^[a-zA-Z][a-zA-Z0-9]{3,9}$/.test(value)
        }
    });
    VeeValidate.Validator.extend('password',{
        getMessage() {
            return '请输入6位数字'
        },
        validate(value) {
            return /^\d{6}$/.test(value)
        }
    });
    VeeValidate.Validator.extend('rePwd',{
        getMessage() {
            return '密码不一致'
        },
        validate(value) {
            var pwd = document.getElementById('password').value;
            return /^\d{6}$/.test(value) && value == pwd
        }
    });
    VeeValidate.Validator.extend('phone',{
        getMessage() {
            return '请输入正确的手机号'
        },
        validate(value) {
            return /^1[3,4,5,7,8]\d{9}$/.test(value)
        }
    });
    VeeValidate.Validator.extend('imgCode',{
        getMessage() {
            return "请输入正确的图形码"
        },
        validate(value) {
            var imgCode = document.getElementsByClassName('img-code')[0].innerHTML;
            return value == imgCode;
        }
    })

    export default {
        data() {
            return {
                username: '',
                password: '',
                rePwd: '',
                phone: '',
                phoneCode: '',
                imgCode: ''
            }
        },
        mounted() {
            this.$refs.imgCode.innerHTML = ''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
        },
        methods: {
            changeTxt() {
                clearInterval(timer);
                //禁止点击
                this.$refs.phoneCode.style.pointerEvents = "none"
                this.$refs.phoneCode.style.background = "#ccc";
                let _this = this;
                let n = 60;
                var timer  = setInterval(function () {
                    n --;
                    _this.$refs.phoneCode.innerHTML = n+'s重新获取';
                    if(n<0) {
                        clearInterval(timer);
                        n = 60;
                        _this.$refs.phoneCode.innerHTML = '获取验证码';
                        _this.$refs.phoneCode.style.cssText = "background:sandybrown;pointer-events:auto"
                    }
                },1000)
            },
            changeNum() {
                this.$refs.imgCode.innerHTML = ''+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)+Math.floor(Math.random()*10)
            },
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if(result) {
                        alert("注册成功！");
                        return;
                    }
                    alert("嘿，认真点儿填写！")
                })
            }
        }
    }
</script>

<style scoped>
    .header{width:100%;height:44px;line-height: 44px;text-align: center;background:#007aff;color:#fff;position: fixed;left:0;top:0;z-index: 999}
    .container-wrapper{padding: 10px;padding-top: 2rem!important}
    .control-label{padding-right:0;line-height: 34px}
    .col-xs-9{padding-left:0}
    .verify-code{position: relative;}
    .verify-code span{position: absolute;right:15px;top:0px;display: block;width:100px;height:34px;line-height: 34px;text-align: center;background:sandybrown;border-radius: 4px;color:#fff}
    .footer {text-align: right;padding-right:15px}
    .footer a{display: block;margin-bottom:10px}
    .footer a:hover{text-decoration: underline}
    .errors{color:red}
</style>