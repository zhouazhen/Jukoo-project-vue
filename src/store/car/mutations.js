import _ from 'lodash'

import {
    UPDATE_CAR_GOODS,
    SLOT_SELECT,
    PRICE_SELECT,
    REMOVE_GOODS
} from './mutation-types'

const mutations = {
    [UPDATE_CAR_GOODS]: (state, payload) => {
        state.goods=_.cloneDeep(payload.data)      //增加
    },
    [REMOVE_GOODS]: (state,payload) => {     
        let good=_.forEach(state.goods,['id', payload.data])                       //删除
        
        state.goods=_.remove(state.goods, good)
    },
    [SLOT_SELECT]: (state) => {
        state.slot = !state.slot
        
    },
    [PRICE_SELECT]: (state , payload) => {
        let isId = _.filter(state.price, function(item){         //判断price是否存在
            return item.price == payload.price;
        })
        if(isId.length == 0){
            state.price.push(_.cloneDeep(payload))
        }else{
            
            state.price= _.remove(state.price, function(item) {
                return item.price != payload.price;
            });
        }
    }
}

export default mutations