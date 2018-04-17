import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LinePage from '@/pages/LinePage'
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
import ScatterChart from '@/components/ScatterChart'
import LineDetail from '@/details/LineDetail'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          component: HelloWorld,
          children:[
              {
                  // 这个是路径，要跳转都是用这跳如果后面加"/:id",就是动态路由可以传参
                  path: '/',
                  component: LinePage
              },
              {
                  path: '/BarChart',
                  component: BarChart
              },
              {
                  path: '/PieChart',
                  component: PieChart
              },
              {
                  path: '/ScatterChart',
                  component: ScatterChart
              }
          ]
      },
      {
          path: '/LineDetail/:id',
          component: LineDetail,
          name:'LineDetail'
      }
  ]
})
