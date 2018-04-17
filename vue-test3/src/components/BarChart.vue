<template>
    <ul class="bar-chart-list">
        <li>
            <h4>这是什么什么什么的柱状图</h4>
            <div class="bar-chart">
                <div id="myBarChart" style="height: 200px;"></div>
            </div>
            <p>
                <a href="#">查看详情</a>
            </p>
        </li>
    </ul>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        data(){
            return{
                option:{
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                }
            }
        },
        mounted(){
            let barChart = echarts.init(document.getElementById("myBarChart"))
            barChart.setOption(this.option)
            window.onresize = barChart.resize
        }
    }
</script>

<style scoped>
    .bar-chart-list{background: #ccc}
    .bar-chart-list li{padding: 10px;background: #fff;border-bottom: 1px solid #999}
    .bar-chart-list li h4{border-bottom: 1px dotted #ccc;padding-bottom: 10px}
    .bar-chart-list li p{text-align: right}
</style>