<template>
    <div class="tickrtDetail">
        <nav-bar :info= 'data'></nav-bar>
        <count-down class="count-down"></count-down>
        <div class="ticketDetail_wrap">
            <ticket-items :info = 'detail'></ticket-items>
        </div>
        <ticket-price :info = 'detail'></ticket-price>
        <ticket-bottom :info = 'detail' ></ticket-bottom>
    </div>
</template>
<script>
import NavBar from './navBar.vue'
import TicketItems from "@c/common/app-cars/ticket-items.vue"
import TicketPrice from "@c/common/app-cars/ticket-price.vue"
import TicketBottom from "@c/common/app-cars/ticket-bottom.vue"
import CountDown from "@c/common/app-cars/count-down.vue"
 
import { mapGetters } from 'vuex'
export default {
     data() {
         return {
             data:'确认订单',
         }
     },
    computed:{
        ...mapGetters({
            detail: 'goods/allInfo',
        }),
    },
     components: {
        NavBar,
        TicketItems,
        TicketPrice,
        TicketBottom,
        CountDown
    },
    created(){
        console.log(this.$store.state.goods.goods,'商品表')
    }
}
</script>
<style lang="scss">
    .count-down{
        margin-top: 1.2rem;
    }
    .ticketDetail_wrap {
        height: 100%;
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        background-color: #ffffff;
        display: flex;
        flex-direction:row;
        justify-content: space-around;
    }
</style>



