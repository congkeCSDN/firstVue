<template>
    <div>
        <form class="form-horizontal">
            <div class="form-group has-feedback has-success">
                <label class="control-label col-xs-2">Search：</label>
                <div class="col-xs-10">
                    <input type="text" class="form-control" v-model="inpuTxt" @keyup="news($event)" @keydown.down="changeDown" @keydown.up.prevent="changeUp">
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
            </div>
        </form>
        <div class="row">
            <div class="col-xs-2">{{nowIndex}}</div>
            <ul class="col-xs-10">
                <li v-for="(item,index) in newsData" :class="{gray:index == nowIndex}">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {news} from '../service/api'
    export default {
        data() {
            return {
                newsData: [],
                inpuTxt: '',
                nowIndex: -1
            }
        },
        methods: {
            changeDown() {
                this.nowIndex++;
                if(this.nowIndex==this.newsData.length){
                    this.nowIndex = 0
                };
                this.inpuTxt = this.newsData[this.nowIndex]
            },
            changeUp() {
                this.nowIndex--;
                if(this.nowIndex==-1){
                    this.nowIndex = this.newsData.length - 1;
                };
                this.inpuTxt = this.newsData[this.nowIndex];

            },
            async news(ev) {
                if(ev.keyCode == 38 || ev.keyCode == 40) {
                    return;
                }
                if(ev.keyCode == 13) {
                    window.open('https://www.baidu.com/s?wd='+this.inpuTxt)
                }
                let res = await news(this.inpuTxt,1);
                // console.log(eval(res))
                let formatRes = eval(res);
                this.newsData = formatRes.s
            }
        }

    }
</script>

<style scoped>
    .control-label {
        line-height: 34px
    }
    .row{margin-top: -10px}
    .gray{background:#eee}
</style>