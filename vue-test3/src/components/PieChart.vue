<template>
    <ul class="bar-chart-list">
        <li>
            <h4>这是什么什么什么的饼状图</h4>
            <div class="bar-chart">
                <div id="myPieChart" style="height: 200px;"></div>
            </div>
            <p>
                <a href="#">查看详情</a>
            </p>
        </li>
    </ul>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/pie')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        data(){
            return{
                option:{
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        mounted(){
            let pieChart = echarts.init(document.getElementById("myPieChart"))
            pieChart.setOption(this.option)
            window.onresize = pieChart.resize
        }
    }
</script>

<style scoped>
    .bar-chart-list{background: #ccc}
    .bar-chart-list li{padding: 10px;background: #fff;border-bottom: 1px solid #999}
    .bar-chart-list li h4{border-bottom: 1px dotted #ccc;padding-bottom: 10px}
    .bar-chart-list li p{text-align: right}
</style>