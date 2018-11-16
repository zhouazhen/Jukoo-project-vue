//模拟后端数据库
import _ from 'lodash'

const api = {
    async addGoods ({id, pic, show_name, show_price,num,p_id}) {
        return new Promise( resolve => {
            setTimeout(async () => {
                let {goods} = await this.getGoods();
                let good = _.find('goods',item => item.p_id === p_id)
                //存在
                if ( good ) {
                    good.num += num
                } else {
                    // 如果是新商品
                    goods.push({
                        id, pic, show_name, show_price,num,p_id 
                    })
                }           

                this.changeCarGoods(goods)

                resolve({status: 200, goods})  //返回存store

            }, 200);
        })
       
    },
    // 取
    async getGoods () {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    goods: localStorage.goods ? JSON.parse(localStorage.goods) : []
                })
            }, 200)
        })
    },
    // 存
    changeCarGoods (goods) {
        localStorage.goods = JSON.stringify(goods)
    }
}

export default api