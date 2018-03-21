<template>
  <div class="header">
    <div>top</div>
    <slot name="title"></slot>
    <div>main</div>
    <slot></slot>
    <div>buttom</div>
      {{titl}}
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['titl']
}
</script>
<style scoped>
    .header{
      background:#ddd;
      text-align:center;
      line-height:50px
    }
</style>
