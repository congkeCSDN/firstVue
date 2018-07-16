import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'login'
    },
    {
      path:'/readme',
      component:resolve=>require(['../components/common/Home.vue'],resolve),
      children:[
        {
          path:'/',
          component:resolve=>require(['../components/page/Readme.vue'],resolve)
        },
        {
          path:'/table',
          component:resolve=>require(['../components/page/BaseTable.vue'],resolve)
        },
        {
          path:'/form',
          component:resolve=>require(['../components/page/BaseForm.vue'],resolve)
        },
        {
          path:'/editor',
          component:resolve=>require(['../components/page/VueEditor.vue'],resolve)
        },
        {
          path:'/upload',
          component:resolve=>require(['../components/page/Upload.vue'],resolve)
        },
        {
          path:'/echarts',
          component:resolve=>require(['../components/page/Echarts.vue'],resolve)
        },
        {
          path:'/vcharts',
            component:resolve=>require(['../components/page/Vcharts.vue'],resolve)
        }
      ]
    },
    {
      path:'/login',
        component:resolve=>require(['../components/page/Login.vue'],resolve)
    }
  ]
})
