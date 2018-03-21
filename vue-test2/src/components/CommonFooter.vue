<template>
    <div class="footer">
        <ul class="footer-cont">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .footer{
        height:1.8rem;
        width: 100%;
        position:fixed;
        bottom:0;
        left:0;
        border-top:2px solid #ccc;
        background:#fff
    }
    .footer-cont li{
        float: left;
        width:25%;
        height:1.8rem;
        font-size:1.4rem;
        color:#ff8000;
        text-align:center;
        border-right: 1px dotted #ccc;
        box-sizing: border-box;
    }
    .footer-cont li:nth-last-of-type{
        border-right: 0;
    }
    .footer-cont li:active{
        background: #ccc;
    }
    .footer-cont::after{
        content: '';
        display: block;
        height: 0;
        width: 0;
        clear: both;
    }
</style>