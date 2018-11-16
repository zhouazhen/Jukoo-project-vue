<template>
    <div class="item price-select">
        <div  class="item"  @click="changeActive(info.price)" :class = "{active: flag == true }">
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
            datas: '',
            flag: false,
        }
    },
    computed: {
        ...mapGetters({
            getFlag: 'car/getFlag',
        }),
    }, 
    watch: {
        getFlag(val){  
            if(val){
                let num = Array.from(val)    //拿到getters算好的变化后的price数组
                this.datas = num 
            }else{
                this.flag = false
            }   
        },
    },
    methods: {
        ...mapMutations({
            priceSelect: 'car/priceSelect',
            updateGoods: 'car/updateGoods',
            removeGoods: 'car/removeGoods'
        }),
      
        changeActive(info) {
            this.flag = !this.flag
            this.data = info      //当前组建的price
            this.priceSelect({   //把当前点击的按钮的price放到price数组
                price: this.data
            })
            setTimeout(() => {
                this.updateGoods({     //把带有选中信息的price存入goods
                    data: this.datas
                })
            },0)
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

