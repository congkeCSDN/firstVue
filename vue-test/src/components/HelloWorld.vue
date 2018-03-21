<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-top">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
              <a href="#" class="navbar-brand">{{brand}}</a>
            </div>
            <div class="collapse navbar-collapse" id="nav-top">
                <ul class="nav navbar-nav navbar-right">
                    <li :class="index ? '' : 'active'"  v-for="(item,index) in chartList" :key="item">
                      <a :href="item.name">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <chart></chart>
  </div>
</template>

<script>
import Chart from './Chart.vue'
export default {
  data () {
    return {
      brand: 'Echarts',
      chartList: [{name: '线型图'}, {name: '柱状图'}, {name: '饼状图'}, {name: '散点图'}]}
  },
  components: {Chart}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
