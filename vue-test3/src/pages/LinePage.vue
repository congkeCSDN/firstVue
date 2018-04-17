<template>
    <div>
        <line-chart :options="lineData1.option" :title="lineData1.title" :height="lineData1.height" :id="lineData1.id"></line-chart>
        <line-chart :options="lineData2.option" :title="lineData2.title" :height="lineData2.height" :id="lineData2.id"></line-chart>
    </div>

</template>

<script>
    import LineChart from '../components/LineChart'

    export default {
        data(){
            return{
                lineData1:{
                    height:200,
                    title:'1.线型图1',
                    id:0,
                    option :{
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line'
                        }]
                    }
                },
                lineData2:{
                    height:300,
                    title:'2.线型图2',
                    id:1,
                    option:{
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一','周二','周三','周四','周五','周六','周日']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name:'邮件营销',
                                type:'line',
                                stack: '总量',
                                data:[120, 132, 101, 134, 90, 230, 210]
                            },
                            {
                                name:'联盟广告',
                                type:'line',
                                stack: '总量',
                                data:[220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name:'视频广告',
                                type:'line',
                                stack: '总量',
                                data:[150, 232, 201, 154, 190, 330, 410]
                            },
                            {
                                name:'直接访问',
                                type:'line',
                                stack: '总量',
                                data:[320, 332, 301, 334, 390, 330, 320]
                            },
                            {
                                name:'搜索引擎',
                                type:'line',
                                stack: '总量',
                                data:[820, 932, 901, 934, 1290, 1330, 1320]
                            }
                        ]
                    }
                }
            }
        },
        components: {LineChart}
    }
</script>

