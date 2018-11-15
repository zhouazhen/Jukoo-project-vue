export default {
    vipCardIsShow : (state) => {
        state.bg.flag = !state.bg.flag
        state.bg.vipCard = !state.bg.vipCard
    },
    backIsShow : (state) => {
        state.bg.flag = !state.bg.flag
        state.bg.back = !state.bg.back
    },
    promotionIsShow : (state) => {
        state.bg.flag = !state.bg.flag
        state.bg.promotion = !state.bg.promotion
    },

}