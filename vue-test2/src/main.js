// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
//在项目中需要使用vue-resource来与后台进行数据交互,要引用需安装即cnpm install vue-resource
import VueResource from 'vue-resource'
import router from './router/index'

Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    data(){
    return {

    }
    },
    router/*引入路由*/
  // components: { App },/*注册引入的组件App.vue*/
  // template: '<App/>'/*给Vue实例初始一个App组件作为template相当于默认组件*/
})
Vue.filter('dCurrency',function (value) {
    return '￥'+value
})
Vue.filter('dTofixed',function(value){
  var isNum = parseFloat(value);
  if(!isNum){
      alert("请输入数字");
      return "请输入数字"
  }else{
    var value = Math.round(isNum*100)/100;
    var item = value.toString().split(".");
    if(item.length == 1){
      value = value.toString()+".00";
      return value;
    }
    if(item.length>1){
      if(item[1].length<2){
        value = value.toString()+"0";
      }
      return value;
    }
  }
})