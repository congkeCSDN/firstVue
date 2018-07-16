<template>
    <div id="app">
        <header-nav v-show="headerShow"></header-nav>
        <!--<Loading v-show="loadingShow"></Loading>-->
        <transition enter-active-class="animated zoomIn">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import HeaderNav from './components/HeaderNav'
    import Footer from './components/Footer'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters([
            'headerShow',
            // 'loadingShow'
        ]),
        mounted() {
            if (this.$route.path.indexOf('mine')>0 || this.$route.path.indexOf('edit')>0 || this.$route.path.indexOf('article')>0 ||this.$route.path.indexOf('login')>0 ||this.$route.path.indexOf('register')>0||this.$route.path.indexOf('forget')>0) {
                this.$store.dispatch('hideHeader')
                // this.$store.dispatch('hideLoading')
            } else {
                this.$store.dispatch('showHeader')
                // this.$store.dispatch('showLoading')
            }
        },
        watch: {
            $route(to, from) {
                // console.log(to)
                if (to.path == '/mine' || to.path == '/edit' || to.name == 'article' || to.path == '/edit/edit-add' || to.path == '/edit/edit-search' || to.path == '/edit/edit-transition' || to.path == '/login' || to.path == '/register'|| to.path == '/forget-pwd') {
                    this.$store.dispatch('hideHeader')
                } else {
                    this.$store.dispatch('showHeader')
                }
            }
        },
        components: {HeaderNav, Footer}
    }
</script>

<style>
    @import './assets/css/animate.css';

    body {
        margin: 0
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    [v-cloak]{
        display: block;
    }
</style>
