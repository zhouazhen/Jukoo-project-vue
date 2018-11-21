import api from '@util/api'

import {
    namespace,
    UPDATE_GOODS
} from './mutation-types'
import { __await } from 'tslib';
//处理异步
const action = {
    //加入购物车
    async addGoods(context, payload) {
        //模拟发送ajax
        let result = await api.addGoods(payload)
            //提交motation
            if(result.status === 200){
                context.commit({
                    type: UPDATE_GOODS,
                    goods: result.goods     //api 中存的商品列表
                })
            }
    },
    //初始化数据
    async initialCarGoods (context) { // 初始化数据
        let result = await api.getGoods()
        if ( result.status === 200 ) {
            // 提交 mutations
            context.commit({
                type: UPDATE_GOODS,
                goods: result.goods
            })
        }
    },
    //增减
    async decrease(context,payload){
        console.log('yunxingl')
        let result = await api.getGood(payload)
        if(result.status === 200){
            context.commit({
                type: UPDATE_GOODS,
                goods: result.goods     //api 中存的商品列表
            })
        }
    }
}

export default action