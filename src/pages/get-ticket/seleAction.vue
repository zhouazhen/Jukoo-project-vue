<template>
    <div class="sele-action a-footer">
        <div class="action-left">
            <span class="sele-num js-sele-num">
                <span @click="chevron"><i class="fa fa-chevron-circle-up"></i></span>
                <span class="num">{{data.allNumber}}</span>张
            </span>
            <span class="line"></span>
            <span class="sele-price js-sele-price">
                <i class="fa fa-yen-sign"></i>
                <span>{{data.allPrice}}</span>
            </span>
        </div>
        <router-link to='ticketDetail' tag='span' class="sele-confirm"  @click.native = 'sure'>确定</router-link>            
    </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
    data(){
        return {
            datas: JSON.parse(localStorage.getItem("item"))
        }
    },
    computed:{
        ...mapGetters({
            data: 'goods/allInfo',
        }),
    },
   
    methods:{
        ...mapMutations({
            allInfoShow : 'goods/allInfoShow',
            updateGoods: 'goods/updateGoods'
        }),
        chevron(){
            this.allInfoShow()       //选票信息的显示隐藏
        }, 
        sure(){
            let {allPrice,allNumber} = this.data        //解构出总价钱和数量
            let createDate = new Date()
            this.updateGoods({                        //保存到商品表
                ...this.datas,allPrice,allNumber,createDate,isDisabled:false   //商品信息，创建订单日期，订单是否失效等
            })
        }
    }
}
</script>

<style lang="scss">
.sele-action {
    font-size: .453333rem;
    .action-left{
        width: 4.666667rem;
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        span{
            margin-left: .266667rem;
        }
    }
    .sele-confirm{
        width: 4rem;
        text-align: center;
        background: #ff7919;
        color: #381414;
    }
}
</style>

