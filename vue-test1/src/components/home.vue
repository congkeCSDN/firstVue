<template>
  <div>
    <header1 :titl="titl">
      <div slot="title">标题</div>
      <div>测试12</div>
    </header1>
    <div class="content-msg">{{msg}}</div>
    <!--<router-view/>-->
    <!--<div class="footer">-->
      <!--<div @click="go('/')">1</div>-->
      <!--<div @click="go('/community')">2</div>-->
      <!--<div @click="go('/shopcart')">3</div>-->
    <!--</div>-->
  </div>
</template>
<script>
import header1 from './header1.vue'
export default {
  data () {
    return {
      msg: '这是首页',
      titl: ''
    }
  },
  components: {
    header1: header1
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    this.titl = ''
  }
}
</script>
<style>
  .footer {position:fixed;bottom:0;left:0;right:0;height:50px;border-top:1px solid #e5e5e5;display:flex}
  .footer div {flex:1}
  .content-msg{font-size: 26px;font-family:"宋体";padding-top: 20px}
</style>
