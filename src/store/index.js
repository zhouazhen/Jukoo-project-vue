import Vue from 'vue'
import Vuex from 'vuex'

import bg from './bg'

Vue.use(Vuex)

const store = new Vuex.Store({
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