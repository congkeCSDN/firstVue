<template>
    <div class="header">
        <a href="javascript:;" class="go-back" @click="goBack">返回</a>
        <h4 class="header-cont">商品详情页</h4>
    </div>
</template>

<script>
    export default {
        methods:{
            goBack(){
                window.history.back();
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        height:2rem;
        position: fixed;
        left:0;
        top:0;
        background: #ffffff;
        border-bottom:2px solid #ccc
    }
    .header .go-back{
        width: 2rem;
        height:2rem;
        text-align:center;
        color:#ccc;
        font-size:0.8rem;
        float: left;
        line-height: 2rem;
        margin-right: 1rem;
        position: absolute;
        left:0;
        top:0
    }
    .header .header-cont{
        width: 100%;
        text-align:center;
        line-height: 2rem;
        font-size: 1.2rem;
    }
</style>