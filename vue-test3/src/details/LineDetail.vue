<template>
    <div class="detail">
        <a href="javascript:window.history.back()" class="back">〈</a>
        <h4 class="detail-title">{{field.title}}</h4>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                field:{}
            }
        },
        mounted(){
            // alert(this.$route.params.id)

            // this.field =
        }
    }
</script>
<style>
    .detail{
        position: fixed;
        top: 0;
        left: 0;
        height: 50px;
        line-height: 50px;
        width: 100%;
        background: #000;
        color:#fff;
        text-align: center;
    }
    .detail .back{
        display: block;
        position: absolute;
        left:10px;
        height: 28px;
        line-height: 28px;
        font-size: 28px;
        top: 11px;
        color:#fff;
        text-decoration: none;
    }
    .detail .detail-title{
        height: 50px;
        line-height: 50px;
        margin:0!important;
    }
</style>
