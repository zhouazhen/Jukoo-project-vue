import Vue from 'vue'

import VueRouter from 'vue-router'
 import bus from '@util/bus'

Vue.use(VueRouter)

import AppHome from '@pages/home/AppHome'
import AppMine from '@pages/mine/AppMine'
import AppShow from '@pages/show/AppShow'
import AppDetail from '@pages/detail/AppDetail'
import AppNotFound from '@pages/not-found/AppNotFound'
import AllItemList from '@pages/show/AllItemList'
import OtherItemList from '@pages/show/OtherItemList'
import AppSearch from '@pages/search/AppSearch'//搜索页
import AppCity from '@pages/citys/AppCitys'//定位

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
        // beforeEnter: function(to, from, next) {
          
        //     let keyword = to.query.keyword
          
        //    this.key=keyword
        //     console.log( this.key)
        //   next()
        //   }
    },
    {
        path: '/detail',
        name: 'detail',
        component: AppDetail,
    },
    {
        path: '/search',
        name: 'search',
        component: AppSearch
    },
    {
        path: '/city',
        name: 'city',
        component: AppCity
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


