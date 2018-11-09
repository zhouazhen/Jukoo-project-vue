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
        // redirect: {name:'showsLibrary'},
        //     children: [
        //         {
        //             path: 'showsLibrary',
        //             name: 'showsLibrary',
        //             components: {
        //                 showsLibrary: AppShow
        //             }
        //         }
        //     ]
    },
    {
        path: '/detail',
        name: 'detail',
        component: AppDetail,
    },
    {
        path: '/search',
        name: 'search',
        component: AppSearch,
        // beforeEnter:  (to, from ,next) => {
        //     console.log(to.path)
        //     // this.$emit('url',to.path);
        // }

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


