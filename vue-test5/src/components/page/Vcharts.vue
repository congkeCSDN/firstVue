<template>
  <div>
       <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item>图表</el-breadcrumb-item>
              <el-breadcrumb-item>vcharts图表</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="container">
          <ve-line :data="lineData" :settings="lineSettings"></ve-line>
          <ve-histogram :data="histogramData" :settings="histogramSettings"></ve-histogram>
          <ve-pie :data="pieData" :settings="pieSettings"></ve-pie>
          <ve-scatter :data="scatterData" :settings="scatterSettings"></ve-scatter>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    created(){
        this.lineData = {
          columns: ['日期', '成本', '利润', '占比', '其他'],
          rows: [
            { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
            { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
            { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
            { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
            { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
            { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 }
          ]
        }
        this.lineSettings = {
          axisSite: { right: ['占比'] },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['数值', '比率']
        }

        this.histogramData = {
            columns: ['日期', '成本', '利润', '占比', '其他'],
            rows: [
              { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
              { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
              { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
              { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 }
            ]
        }
        this.histogramSettings = {
          axisSite: { right: ['占比'] },
          yAxisType: ['KMB', 'percent'],
          yAxisName: ['数值', '比率']
        }

        this.pieData = {
            columns: ['日期', '成本', '利润'],
            rows: [
              { '日期': '1月1号', '成本': 123, '利润': 3 },
              { '日期': '1月2号', '成本': 1223, '利润': 6 },
              { '日期': '1月3号', '成本': 2123, '利润': 90 },
              { '日期': '1月4号', '成本': 4123, '利润': 12 },
              { '日期': '1月5号', '成本': 3123, '利润': 15 },
              { '日期': '1月6号', '成本': 7123, '利润': 20 }
            ]
        }
        this.pieSettings = {
          dimension: '成本',
          metrics: '利润'
        }

        this.scatterData = {
            columns: ['日期', '余额', '数量', '年龄'],
            rows: {
              '上海': [
                { '日期': '1-1', '余额': 123, '年龄': 3, '数量': 1244 },
                { '日期': '1-2', '余额': 1223, '年龄': 6, '数量': 2344 },
                { '日期': '1-3', '余额': 7123, '年龄': 9, '数量': 3245 },
                { '日期': '1-4', '余额': 4123, '年龄': 12, '数量': 4355 },
                { '日期': '1-5', '余额': 3123, '年龄': 15, '数量': 4564 },
                { '日期': '1-6', '余额': 2323, '年龄': 20, '数量': 6537 }
              ],
              '北京': [
                { '日期': '1-1', '余额': 123, '年龄': 3, '数量': 1244 },
                { '日期': '1-2', '余额': 1273, '年龄': 6, '数量': 2344 },
                { '日期': '1-3', '余额': 3123, '年龄': 15, '数量': 4564 },
                { '日期': '1-4', '余额': 2123, '年龄': 9, '数量': 3245 },
                { '日期': '1-5', '余额': 4103, '年龄': 12, '数量': 4355 },
                { '日期': '1-6', '余额': 7123, '年龄': 10, '数量': 3567 }
              ],
              '广州': [
                { '日期': '1-1', '余额': 123, '年龄': 3, '数量': 1244 },
                { '日期': '1-2', '余额': 1223, '年龄': 6, '数量': 2344 },
                { '日期': '1-3', '余额': 2123, '年龄': 30, '数量': 3245 },
                { '日期': '1-5', '余额': 4123, '年龄': 12, '数量': 4355 },
                { '日期': '1-4', '余额': 5123, '年龄': 18, '数量': 4564 },
                { '日期': '1-6', '余额': 3843, '年龄': 30, '数量': 4850 }
              ]
            }
      }
        this.scatterSettings = {
        dimension: '日期',
        metrics: ['年龄', '数量']
      }

    }
  }
</script>
<style>

</style>
