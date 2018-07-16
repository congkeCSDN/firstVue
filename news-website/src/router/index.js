import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Follow from '@/components/Follow'
import Column from '@/components/Column'
import Mine from '@/components/Mine'
import Edit from '@/components/Edit'
import Article from '@/components/Article'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPwd from '@/components/ForgetPwd'
import EditAdd from '@/pages/EditAdd'
import EditSearch from '@/pages/EditSearch'
import EditTransition from '@/pages/EditTransition'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/follow',
            component: Follow
        },
        {
            path: '/column',
            component: Column
        },
        {
            path: '/mine',
            component: Mine
        },
        {
            path: '/edit',
            component: Edit,
            children: [
                {path: '/',component: EditAdd},
                {path: 'edit-search',component: EditSearch},
                {path: 'edit-transition',component: EditTransition}
            ]
        },
        {
            name: 'article',
            path: '/article/:id',
            component: Article
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/forget-pwd',
            component: ForgetPwd
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior: () => ({y: 0})
})
