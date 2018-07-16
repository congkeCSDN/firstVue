<template>
    <div class="container">
        <div class="column">
            <ul>
                <li v-for="(item,index) in newsList">
                    <h4>{{index+1}}、{{item.title}}</h4>
                    <div>
                        <img :src="item.author_face" alt="">
                    </div>
                    <div>
                        <p>{{item.time | formatDate}}</p>
                        <p v-html="item.content"></p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList:[]
            }
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.$http.get("/static/data/article.data").then((res)=>{
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
    .column{padding:10px}
    .column ul li{margin-bottom: 10px}
    .column ul li h4{color:darkred}
    .column ul li p{margin-top:5px;line-height:18px}

</style>