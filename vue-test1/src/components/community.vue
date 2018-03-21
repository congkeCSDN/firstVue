<template>
  <div>
    <header1 title="社区"></header1>
    <div class="content-msg">{{msg}}</div>
  </div>
</template>
<script>
import header1 from './header1.vue'
export default {
  data () {
    return {
      msg: '这是社区'
    }
  },
  components: {
    header1: header1
  }
}
</script>
<style>
.content-msg{font-size: 26px;font-family:"宋体";padding-top: 20px}
</style>
