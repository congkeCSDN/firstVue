<template>
    <ul class="bar-chart-list">
        <li>
            <h4>这是什么什么什么的散点图</h4>
            <div class="bar-chart">
                <div id="myScatterChart" style="height: 200px;"></div>
            </div>
            <p>
                <a href="#">查看详情</a>
            </p>
        </li>
    </ul>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/scatter')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        data(){
            return{
                option:{
                    xAxis: {},
                    yAxis: {},
                    series: [{
                        symbolSize: 20,
                        data: [
                            [10.0, 8.04],
                            [8.0, 6.95],
                            [13.0, 7.58],
                            [9.0, 8.81],
                            [11.0, 8.33],
                            [14.0, 9.96],
                            [6.0, 7.24],
                            [4.0, 4.26],
                            [12.0, 10.84],
                            [7.0, 4.82],
                            [5.0, 5.68]
                        ],
                        type: 'scatter'
                    }]
                }
            }
        },
        mounted(){
            let scatterChart = echarts.init(document.getElementById("myScatterChart"))
            scatterChart.setOption(this.option)
            window.onresize = scatterChart.resize
        }
    }
</script>

<style scoped>
    .bar-chart-list{background: #ccc}
    .bar-chart-list li{padding: 10px;background: #fff;border-bottom: 1px solid #999}
    .bar-chart-list li h4{border-bottom: 1px dotted #ccc;padding-bottom: 10px}
    .bar-chart-list li p{text-align: right}
</style>