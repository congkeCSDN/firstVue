<template>
    <div>
        <div class="nav">
            <a href="javascript:;" @click="$router.back()">〈</a>
        </div>
        <div class="content">
            <div class="header clear">
                <h2>
                    <img :src="articleData.author_face" alt=""/>
                </h2>
            </div>
            <div class="cont">
                <h3>{{articleData.title}}</h3>
                <div class="time">
                    <p>{{articleData.time | formatDate}}</p>
                </div>
                <div class="text-box" v-html="articleData.content"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        mounted(){
            // console.log(this.$route.params.id)
            this.fetchData(this.$route.params.id);

            // //发送 隐藏footer的 action
            // if(this.$route.path.indexOf('article')>0){
            //     this.$store.dispatch('hideFooter');
            // }
        },
        data(){
            return {
                articleData:{}
            }
        },
        methods:{
            fetchData(id) {
                this.$http.get('/static/data/article.data').then((res) => {
                    // console.log(res.data[id-1])
                    this.articleData = res.data[id-1]
                })
            }
        }
    }
</script>
<style scoped>
    .nav{width:100%; position:fixed;top:0;left:0; border-bottom:1px solid #e8eaec; z-index:99;height:0.74rem;line-height:0.74rem;background:#007aff}
    .nav a{color:#fff;font-size:0.4rem}

    .content{max-width:6.4rem; margin:0 auto; padding-top:0.75rem; background:#f2f4f5; padding-bottom:0.85rem;}
    .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto;}
    .header h2{ float:left; margin-right:0.18rem;}
    .header p{ float:left; margin-top:0.18rem; font-size:0.3rem;}

    .content .cont{ padding:0 0.38rem; color:#494d4d;}
    .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
    .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
    .time p{ float:left}

    .cont .text-box{ font-size:0.25rem;}
    .text-box p{ line-height:0.45rem; margin-bottom:0.1rem;}
</style>