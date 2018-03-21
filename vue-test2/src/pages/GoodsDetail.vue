<template>
    <div class="detail">
        <DetailHeader></DetailHeader>
        <div class="content">
            <img src="../assets/img/mango.jpg" alt="">
            <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
            <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
        </div>
        <CommonFooter></CommonFooter>
    </div>
</template>

<script>
    import DetailHeader from '../components/DetailHeader'
    import CommonFooter from '../components/CommonFooter'
    export default {
        data(){
            return {

            }
        },
        components:{
            DetailHeader,
            CommonFooter
        }
    }
</script>

<style scoped>
    .detail{
        padding: 0.25rem;
        font-size: 12px;
    }
    .content{
        padding-top: 2rem;
        padding-bottom: 1.8rem;
    }
    .content>img{
        display: block;
        width: 80%;
        margin: 0 auto 0.5rem;
    }
    .content>p{
        font-size: 1.1rem;
        line-height: 1.5rem;
        text-align: left;

    }
    .content>p.site-title{
        color: #ff8000;
        border-top: 1px solid #ccc;
        padding-top: 0.3rem;
    }
    .content>p.site-cont{
        color:#666;
        font-size: 0.9rem;
    }
</style>