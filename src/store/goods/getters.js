import _ from 'lodash'

const getters = {
    allInfo (state) { // 派生出来的是购物车商品的总价钱和总数量
        let allNumber = 0
        let allPrice = 0
        if ( state.tickets.length ) {
            state.tickets.forEach(ticket => {
                allNumber += ticket.num
                allPrice  += ticket.num * ticket.price
            });
        }
        return { allNumber, allPrice }
    },
    getFlag (state) {
        if(state.slot == true){
            state.tickets = _.sortBy(state.tickets, function(item){    //把所有选中的price 装进里面
                return item.flag == true;
            });
        }else{                             //不存在  清空state.price
            state.tickets = []
        }
        return state.tickets
    },
}

export default getters