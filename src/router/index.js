import Vue from 'vue'

import VueRouter from 'vue-router'
// import bus from '@util/bus'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
import AppShow from '@pages/show/AppShow'
import AppNotFound from '@pages/not-found/AppNotFound'
import AllItemList from '@pages/show/AllItemList'
import OtherItemList from '@pages/show/OtherItemList'

// 路由表
const routes = [
    {
        path: '/',
        // redirect: '/home'
        // redirect: { path: '/home'}
        redirect: { name: 'home'}
    },
    {
        path: '/home',
        name: 'home',
        component: AppHome,
        // alias: '/'
    },
    {
        path: '/mine',
        name: 'mine',
        component: AppMine
    },
    {
        path: '/show',
        name: 'show',
        component: AppShow,
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: AppNotFound
    },
    {
        path: '**',
        redirect: '/not-found'
    }
]



// 路由工具
const router = new VueRouter({
    mode: 'history', // hash
    // base: '/app/',
    routes
})




export default router


