<template>
    <div>
        <div class="header">
            小案例
        </div>
        <div class="container">
            <ul>
                <router-link tag="li" to="/edit" exact>
                    <a href="javascript:;">添加/删除</a>
                </router-link>
                <router-link tag="li" to="/edit/edit-search">
                    <a href="javascript:;">搜索</a>
                </router-link>
                <router-link tag="li" to="/edit/edit-transition">
                    <a href="javascript:;">多元素运动</a>
                </router-link>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
            // console.log(this.$route.path)
            // if(this.$route.path.indexOf('/edit')){
            //
            // }
        }
    }
</script>

<style scoped>
    .header{position: fixed;top:0;left:0;width:100%;height:44px;line-height: 44px;color:#fff;background:#007aff;letter-spacing: 3px;text-align: center;text-indent: 3px}
    a{text-decoration: none;color:#333}
    ul{display: flex;margin-top: 20px;margin-bottom:20px}
    ul li{flex: 1;height: 34px;line-height: 34px;text-align: center;border-radius:3px}
    .router-link-active{background:chocolate}
    .router-link-active a{color:#fff}
</style>