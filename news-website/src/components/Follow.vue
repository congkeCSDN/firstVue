<template>
    <div class="container">
        <div class="follow">
            <ul>
                <li v-for="(item,index) in newsList">
                    <h4>{{index+1}}、{{item.title}}</h4>
                    <p>{{item.detail}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: []
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.$http.get('/static/data/follow.data').then((res)=>{
                    // console.log(res.data)
                    this.newsList = res.data;
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    .follow{padding:10px}
    .follow ul li{margin-bottom: 10px}
    .follow ul li p{margin-top:5px;line-height:18px}
</style>