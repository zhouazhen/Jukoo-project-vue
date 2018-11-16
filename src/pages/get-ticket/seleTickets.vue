<template>
    <div class="sele-tickets a-footer">
        <span class="price">{{info.price}}</span>
        <div class="operate">
            <span  @click="decrease"><i class="fa fa-minus-square-o increase"></i></span>
            <span class="num">{{num}}</span>
            <span @click="increase"><i class="fa fa-plus-square-o decrease"></i></span>  
            <span class="line"></span>
            <span @click="remove"><i class="fa fa-trash remove"></i></span>  
        </div>
    </div> 
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['info'],
    data() {
         return {
             num: 1,
             data: JSON.parse(localStorage.getItem("item"))
         }
    },
    computed: {
        prices: function() {
            return this.num *80
        }
    }, 
   
    methods:{
        ...mapActions({
            addGoods: 'car/addGoods'
        }),
        decrease() {
            this.num -= 1
        },
        increase() {
            this.num += 1
        },
        remove() {
            console.log('删除')
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

