<template>
  <div id="myEcharts" style="width:300px;height:300px;"></div>
</template>

<script>
let echarts = require('echarts')
export default {
  name: 'Chart',
  data () {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

    }
  },
  mounted () {
    let myEcharts = echarts.init(document.getElementById('myEcharts'))
    myEcharts.setOption(this.option)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
