// \babel-polyfill
// import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'

// 引入全局通用样式
import '@styles/main.scss'

// flexible 移动端适配
import '@libs/flexible'
//font-awesome字体图标
import '@libs/font-awesome/css/font-awesome.min.css'
// 引入各种插件： swiper...
import '@libs'

// router 路由
import router from './router'

import store from './store/index'

// Vue.config.devtools = false
Vue.config.productionTip = false


// 根实例
new Vue({
  router,// router,// 从此任何组件都可以使用到$router （路由工具） ,$route (路由属性)
  store,
  render: h => h(App)
  
  // render: (createElement) => {
  //   return createElement(App)
  // }
}).$mount('#app')



//                            _ooOoo_
//                           o8888888o
//                           88" . "88
//                           (| -_- |)
//                            O\ = /O
//                        ____/`---'\____
//                      .   ' \\| |// `.
//                       / \\||| : |||// \
//                     / _||||| -:- |||||- \
//                       | | \\\ - /// | |
//                     | \_| ''\---/'' | |
//                      \ .-\__ `-` ___/-. /
//                   ___`. .' /--.--\ `. . __
//                ."" '< `.___\_<|>_/___.' >'"".
//               | | : `- \`.;`\ _ /`;.`/ - ` : | |
//                 \ \ `-. \_ __\ /__ _/ .-` / /
//         ======`-.____`-.___\_____/___.-`____.-'======
//                            `=---='
//
//         .............................................
//                  佛祖保佑             永无BUG



