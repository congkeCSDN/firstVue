<template>
    <div class="header">
        <div class="collapse-btn" @click="collapseChange">
            <i class="el-icon-menu"></i>
        </div>
        <div class="logo">后台管理</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    Admin
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
          </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        collapse:false,
      }
    },
    computed:{
      username(){
        let usrname = localStorage.getItem('ms_username');
        return username ? username : this.username;
      }
    },
    methods:{
      handleCommand(command){
        if(command == 'loginout'){
          localStorage.removeItem('ms_username');
          this.$router.push('/login')
        }
      },
      collapseChange(){
        this.collapse = ! this.collapse;
      }
    }
  }
</script>
<style scoped>
    .header{
      position:relative;
      box-sizing:border-box;
      width:100%;
      height:70px;
      font-size:22px;
      line-height:70px;
      color:#fff
    }
    .collapse-btn{
      float:left;
      padding:0 21px;
      cursor:pointer
    }
    .collapse-btn:hover{
      background:rgb(40,52,70)
    }
    .header .logo{
      float:left;
      width:250px
    }
    .user-info{
      float:right;
      padding-right:50px;
      font-size:16px;
      color:#fff
    }
    .user-info .el-dropdown-link{
      position:relative;
      display:inline-block;
      padding-left:50px;
      color:#fff;
      cursor: pointer;
      vertical-align: middle;
    }
    .user-info .user-logo{
      position: absolute;
      left:0;
      top:15px;
      width: 40px;
      height:40px;
      border-radius: 50%;
    }
    .el-dropdown-menu{
      text-align: center;
    }
</style>
