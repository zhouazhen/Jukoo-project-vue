<template>
    <div v-show = 'show' class="sele-tickets a-footer">
        <span class="price">{{info.price}}</span>
        <div class="operate">
            <span  @click="decrease(info)"><i class="far fa-minus-square increase"></i></span>
            <span class="num">{{info.num}}</span>
            <span @click="increase(info)"><i class="far fa-plus-square decrease"></i></span>  
            <span class="line"></span>
            <span @click="remove(info.price)"><i class="far fa-trash-alt remove"></i></span>  
        </div>
    </div> 
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    props: ['info'],
    data(){
        return {
            num:1
        }
    },
    computed: {
        show: function() {
            return this.$store.state.goods.allInfoShow
        },
    }, 
    methods:{
        ...mapMutations({
            priceTickets: 'goods/updateTickets',
        }),
        decrease(info) {
            this.num -= 1 ,

            this.priceTickets({
                price: info.price,num: this.num,flag:true
            })
        },
        increase(info) {
            this.num += 1,
           
            this.priceTickets({
                price: info.price,num: this.num,flag:true
            })
        },
        remove(price) {
            
            this.priceTickets({
                price: price
            })
        }
    }
}
</script>

<style lang="scss">
.sele-tickets{
    box-shadow: 0px -15px 15px -15px #ddd;
    .price{
    width: 2.666667rem;
    text-align: center;
    font-size: .533333rem;
    
    } 
    .operate{
        span{
            width: .533333rem;
            display: inline-block;
            font-size: .533333rem;
            margin-right: .266667rem;
            &.num{
                margin-right: 0;
                text-align: center;
            }
            i{
                width: .666667rem;
                font-size: .666667rem;
                text-align: center;
            }
        }
    }  
} 
   
</style>

