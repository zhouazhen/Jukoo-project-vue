import api from '@util/api'

import {
    namespace,
    UPDATE_CAR_GOODS
} from './mutation-types'
import { __await } from 'tslib';
const action = {
    async addGoods (context, payload) {
        //模拟发送ajax
        let result = await api.addGoods(payload)
            //提交motation
            if(result.status === 200){
                context.commit({
                    type: UPDATE_CAR_GOODS,
                    goods: result.goods     //api 中存的商品列表
                })
            }
    }
}

export default action