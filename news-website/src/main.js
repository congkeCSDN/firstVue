// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import filters from './filters'
import loading from './components/loading'
import VeeValidate from 'vee-validate'

// console.log(filters)
// console.log(Object.keys(filters))
Object.keys(filters).forEach((key) => Vue.filter(key,filters[key]))

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    //在请求发出之前进行一些操作
    // console.log(router.options.routes)
    // router.options.routes.filter((v) => {
    //     console.log(v.path)
    //     if(v.path == '/edit') {
    //         store.dispatch('hideLoading')
    //     }else{
    //         store.dispatch('showLoading')
    //     }
    // })
    return config;
},function(err){
    //Do something with request error
    return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
    //在这里对返回的数据进行处理
    store.dispatch('hideLoading')
    return res;
},function(err){
    //Do something with response error
    return Promise.reject(error);
})

Vue.use(VeeValidate);
Vue.use(loading)
require('./assets/css/base.css') //全局引用
Vue.prototype.$http = axios; //把axios对象挂在vue原型上

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    mode: 'history',
    components: {App},
    template: '<App/>'
})
