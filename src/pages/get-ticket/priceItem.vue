<template>
    <div class="item price-select">
        <div  class="item"  @click="changeActive(info)" :class = "{active: isShow == true }">
            <span >
                <i class="fa fa-yen-sign"></i>
                <span>{{info.price}}</span>
            </span>
        </div>
        
    </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex'
import _ from 'lodash'
export default {
    props:['info'],
    data() {
        return {
            flag: false,
            // isShow: false,
            // show: ''
        }
    },
    computed: {
        isShow:function() {
            let arr = this.$store.state.goods.tickets 
            if(arr){
                    console.log('val ok')
                    Array.from(arr).forEach(item => {
                        if(item.price == this.info.price){
                            console.log(item.flag,'item.flag')
                            // this.isShow = item.flag
                            return item.flag
                        }
                    });
                }else{
                    console.log('false')
                    return false                   //不存在，说明选择时间的按钮未选中
                }    
        }   
    },
    watch: {
        
    },
    methods: {
        ...mapMutations({
            updateTickets: 'goods/updateTickets',
            updateGoods: 'goods/updateGoods',
            removeTickets: 'goods/removeTickets'
        }),
      
        changeActive(info) {
            this.flag = !this.flag
            this.updateTickets({   //把当前点击的按钮的price放到tickets数组
                price: this.info.price,num: 1,flag: this.flag
            })
        }
    }
  
}
</script>
<style lang="scss">
    .price-select{
        display: inline-block;
        margin-right: .133333rem; 
        .item{
           height: 2.666667rem;
           line-height: 1.333333rem;
           text-align: center;
           span{
               span{
                   margin-left: .133333rem;
               }
           }
        }
    }
</style>

