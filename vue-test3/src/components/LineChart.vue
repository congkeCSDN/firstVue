<template>
    <ul class="line-chart-list">
        <li>
            <h4>{{title}}</h4>
            <div class="line-chart">
                <div ref="myLineChart" :style="'height:'+height+'px'"></div>
            </div>
            <p>
                <!--<router-link :to="'/LineDetail/'+id">查看详情</router-link>-->
                <router-link :to="{name:'LineDetail',params:{id:id}}">查看详情</router-link>
            </p>
        </li>
    </ul>
</template>

<script>
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/line')
    require('echarts/lib/component/tooltip')
    require('echarts/lib/component/title')
    export default {
        props: ['options','title','height','id'],
        data(){
            return{
                field:{}
            }
        },
        mounted(){
            //初始化图表
            let lineChart =echarts.init(this.$refs.myLineChart)
            //绘制图表
            lineChart.setOption(this.options)
            //图表自适应
            window.onresize = lineChart.resize
        },
        methods:{
            go(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style>
    .line-chart-list{background: #ccc}
    .line-chart-list li{padding: 10px;background: #fff;border-bottom: 1px solid #999}
    .line-chart-list li h4{border-bottom: 1px dotted #ccc;padding-bottom: 10px}
    .line-chart-list li p{text-align: right}
</style>