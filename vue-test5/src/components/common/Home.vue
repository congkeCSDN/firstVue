<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content" :class="{'content-collapse':collapse}">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
  import vHead from './Header.vue';
  import vSidebar from './Sidebar.vue';

  export default {
    data() {
      return {
        collapse:false
      }
    },
    components:{
      vHead,
      vSidebar
    }
  }
</script>
<style>

</style>
