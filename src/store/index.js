import Vue from 'vue'
import Vuex from 'vuex'



import car from './car'


import chunks from './chunks'

import bg from './bg'
// 保存城市信息到本次存储的插件
// 因为这个动作放在组件中不合适，因为总感觉已经不是组件的逻辑，属于store，mutations专门用来操作state，actions处理异步动作，衍生出来的逻辑代码，就可以放在插件中
import { saveCityInStorage } from './plugins'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        chunks,
        car
    },
    plugins: [saveCityInStorage],

    state: {
        flag: false,
        back: false,
        promotion: false,
        vipCard: false
    },
    mutations: {
        vipCardIsShow: (state) => {
            state.flag = !state.flag
            state.vipCard = !state.vipCard
        },
        backIsShow: (state) => {
            state.flag = !state.flag
            state.back = !state.back
        },
        promotionIsShow: (state) => {
            state.flag = !state.flag
            state.promotion = !state.promotion
        },
        hidebg : (state) => {
            state.flag = false,
            state.back=false,
            state.promotion=false,
            state.vipCard=false
        }
    }
})
export default store
