// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vcharts from 'v-charts'

Vue.use(ElementUI)
Vue.use(Vcharts)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//使用钩子函数对路由进行权限跳转
router.beforeEach( (to,from,next) => {
  if(to.meta.permisson){
    const role = localStorage.getItem('ms_username');
    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    role === 'admin' ? next() : next('/login');
  }else{
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看\', \'浏览器不兼容通知',{
        confirmButtonText:'确定'
      });
    }else{
      next();
    }
}
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
