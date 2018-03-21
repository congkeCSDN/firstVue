import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home'
import Classify from '@/components/classify'
import Community from '@/components/community'
import Shopcart from '@/components/shopcart'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      // 子路由
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/Classify',
          component: Classify
        },
        {
          path: '/community',
          component: Community
        },
        {
          path: '/shopcart',
          component: Shopcart
        },
        {
          path: '/mine',
          component: Mine
        }
      ]
    }
  ]
})
