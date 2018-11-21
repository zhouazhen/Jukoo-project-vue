
import _ from 'lodash'

import {
    UPDATE_GOODS,
    UPDATE_TICKETS,
    REMOVE_TICKETS,
    SLOT_SELECT,
    ALLINFOSHOW
} from './mutation-types'

const mutations = {
    [UPDATE_GOODS]: (state, payload) => {                  //订单信息存储
        state.goods = _.cloneDeep(payload.goods)
    },
    [UPDATE_TICKETS] : (state,payload) => {               //票价与数量存储
        let isId = _.filter(state.tickets, function(item){         //判断price是否存在
            return item.price == payload.price;
        })
       
        if(isId.length >0 ){                                       
            if(payload.num <= 0){                                   //判断数量
                let ticket=_.forEach(state.tickets,['id', payload.price])  
                state.tickets=_.remove(state.tickets, ticket)
            }else{
                state.tickets.forEach(item => {
                    if(item.price == payload.price){
                        item.num = payload.num,
                        item.flag = payload.flag
                    }
                });
            }
        }else{
            state.tickets.push(_.cloneDeep(payload))
        }
    },
    [REMOVE_TICKETS]: (state,payload) => {                               //票价与数量信息的删除
        let ticket=_.forEach(state.tickets,['id', payload.price])  
        state.tickets=_.remove(state.tickets, ticket)
    },
    [SLOT_SELECT]: (state) => {                 //时间按钮选择状态
        state.slot = !state.slot
    },
    [ALLINFOSHOW]: (state) => {
        state.allInfoShow = !state.allInfoShow           //票价与数量信息展示隐藏
    }
    
}

export default mutations