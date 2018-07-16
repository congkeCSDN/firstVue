<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                          {{subItem.title}}
                        </el-menu-item>
                      </el-submenu>
                  </template>
                  <template v-else>
                      <el-menu-item :index="item.index" :key="item.index">
                          <i :class="item.icon"></i>
                          <span slot="title">{{item.title}}</span>
                      </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>
<script>
  export default {
    data() {
      return {
          collapse:false,
          items:[
            {
              icon:'el-icon-setting',
              index:'readme',
              title:'自述文件'
            },
            {
              icon:'el-icon-tickets',
              index:'table',
              title:'基础表格',
            },
            {
              icon:'el-icon-date',
              index:'3',
              title:'表单汇总',
              subs:[
                {
                  index:'form',
                  title:'基本表单'
                },
                 {
                  index:'editor',
                  title:'富文本编辑器'
                },
                {
                  index:'upload',
                  title:'文件上传'
                }
              ]
            },
            {
              icon:'el-icon-star-on',
              index:'4',
              title:'图表样式',
              subs:[
                {
                  index:'echarts',
                  title:'echarts图表'
                },
                {
                  index:'vcharts',
                  title:'vcharts图表'
                },
              ]
            }
          ]
      }
    },
    computed:{
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    },
    created(){

    }
  }
</script>
<style scoped>
  .sidebar{
    display:block;
    position:absolute;
    left: 0;
    top:70px;
    bottom:0
  }
  .sidebar-el-menu:not(.el-menu-collapse){
    width:250px;
  }
  .sidebar > ul{
    height:100%
  }
</style>
