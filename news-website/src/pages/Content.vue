<template>
    <div class="content">
        <ul>
            <li v-for="(item,index) in homeList">
                <router-link :to="'/article/'+item.id">
                    <h4>{{item.id}}、{{item.title}}</h4>
                    <p>{{item.detail}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                homeList:[]
            }
        },
        methods: {
            fetchData() {
                let _this = this;
                this.$http.get('../static/data/index.data').then(function(res){
                    // console.log(res)
                    _this.homeList = res.data;
                }).catch(function(err){
                    console.log(err)
                })
            }
        },
        mounted() {
            this.fetchData();
        }
    }
</script>

<style scoped>
    .content{padding:10px}
    .content ul li{margin-bottom: 10px}
    .content ul li p{margin-top:5px;line-height:18px;text-indent:20px}
</style>