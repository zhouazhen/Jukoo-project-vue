<template>
    <div class="ticket-action">
        <div class="action-left">
            <span>应付：</span>
            <span class="sele-price js-sele-price">
                <i class="fa fa-yen-sign"></i>
                <span>{{info.allPrice}}</span>
            </span>
        </div>
        <span class="sele-confirm" @click="sureBuy" >去支付</span>            
    </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex'
export default {
    props: ['info'],
    methods: {
        sureBuy(){
            this.$router.push('/myOrders')
        }
    }

}
</script>


<style lang="scss">
.ticket-action {
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: .453333rem;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    .action-left{
        width: 4.6rem;
        span{
            margin-left: .4rem;
        }
    }
    .sele-confirm{
        width: 5rem;
        text-align: center;
        background: #ff7919;
        color: #fefefe;
    }
}
</style>


