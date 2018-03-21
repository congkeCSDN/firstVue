<template>
    <div class="container">
        <HomeHeader></HomeHeader>
        <div class="content">
            <ul class="cont-ul">
                <List v-for="item in items" :price="item.price" :title="item.title" :img="item.img"></List>
            </ul>

        </div>
        <CommonFooter></CommonFooter>
    </div>
</template>

<script>
    import HomeHeader from '../components/HomeHeader'
    import CommonFooter from '../components/CommonFooter'
    import List from '../components/List'
    export default {
        data () {
            return{
                items:[] /*定义一个空数组*/
            }
        },
        components:{
            HomeHeader,
            CommonFooter,
            List
        },
        //这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数
        created (){
            //调用vue的Ajax来请求数据，promise(es6)语法，并用es6的箭头函数
            this.$http.get('/api/goods').then((data) => {

                this.items = data.body.data
            })
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        margin: 0 auto;
        position: relative;
    }
    .content{
        padding-top:2rem;
        padding-bottom: 1.8rem;
    }
    .cont-ul{
        padding-top:0.5rem;
        background: #ccc;
    }
    .cont-ul::after{
        content: '';
        display: block;
        clear: both;
        width: 0;
        height: 0;
    }
</style>