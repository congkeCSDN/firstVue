<template>
    <li class="goods-list">
        <!--这里是用来跳转页面的-->
        <router-link to="/GoodsDetail" class="goods-list-link">
            <div class="goods-list-pic">
                <!--这里的:src是vue的属性，里面的img是来自该组件的data中数据-->
                <img :src="img" alt="">
            </div>
            <div class="goods-list-desc">
                <p class="goods-list-name">{{title}}</p>
                <!--这里用到了过滤器货币形式和保留两位小数-->
                <p class="goods-list-price">{{price|dTofixed|dCurrency}}</p>
            </div>
        </router-link>
    </li>
</template>

<script>
    export default {
        //props是子组件获取父组件数据用的
        props:['price','title','img']
    }
</script>

<style scoped>
    .goods-list{
        width:50%;
        float: left;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
    }
    .goods-list:nth-of-type(odd){
        border-right: 0.15rem solid #ccc;
    }
    .goods-list:nth-of-type(even){
        border-left: 0.15rem solid #ccc;
    }
    .goods-list-link{
        display: block;
        padding: 0.5rem 0;
        margin: 0 0.3rem;
        text-align: center;
        background: #fff;
    }
    .goods-list:nth-of-type(even) .goods-list-link{
        margin-left: 0;
    }
    .goods-list:nth-of-type(odd) .goods-list-link{
        margin-right: 0;
    }
    .goods-list-pic{
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
    }
    .goods-list-pic>img{
        width: auto;
        height:4rem
    }
    .goods-list-desc{
        padding: 0 0.5rem;
    }
    .goods-list-desc::after{
        display: block;
        content: '';
        clear: both;
    }
    .goods-list-name,.goods-list-price{
        width:50%;
        height:1.2rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color:#333;
        float: left;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goods-list-price{
        color: #ff8000;
        float: right;
    }
</style>