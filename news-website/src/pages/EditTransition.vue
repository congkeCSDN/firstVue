<template>
    <div>
        <input type="text" class="form-control" v-model="text">
        <transition-group enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
            <p v-for="(item,index) in lists" :key="index" v-show="text">{{item}}</p>
        </transition-group>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                list: ['apple','bannana','lemo','pear','peach','piataya'],
                text:''
            }
        },
        computed: {
            lists(){
                    // return this.list
                let arr = [];
                this.list.forEach((val) => {
                    if(val.indexOf(this.text)!= -1){
                        arr.push(val)
                    }
                });
                return arr;
            }
        }

    }
</script>

<style scoped>
   @import "../assets/css/animate.css";
    p{
        color:#fff;
        width:100px;
        height:100px;
        margin:10px auto;
        background: cornflowerblue;
        text-align: center;
        line-height: 100px;
    }
</style>