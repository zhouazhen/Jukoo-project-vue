<template>
    <div class="SeleFooter">
        <sele-tickets v-for = 'item in good' :key = item.price :info = 'item'></sele-tickets>
        <sele-action></sele-action>
    </div>
</template>
<script>
import SeleTickets from './seleTickets.vue'
import SeleAction from './seleAction.vue'
export default {
    components: {
        SeleTickets,
        SeleAction
    },
    computed: {
        good: function() {
           return this.$store.state.car.goods
        }
    },
    created: function(){
        
    }

}
</script>
<style lang="scss">
    .SeleFooter{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        .a-footer{
            height: 1.333333rem;
            width: 100%;
            display: flex;
            flex-direction:row;
            justify-content:space-between;
            background: #fff;
            margin-top: .133333rem;
            line-height: 1.333333rem;
        }
    }
</style>


