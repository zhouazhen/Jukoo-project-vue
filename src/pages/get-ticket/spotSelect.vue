<template>
    <div class="row spot-select-wrapper">
        <slot></slot>
        <spot-item v-if = 'flag'></spot-item>
        <price-item v-else v-for= 'item in type' :key = 'item.price_id' :info = 'item' ></price-item>
	</div>
</template>
<script>
import SpotItem from './spotItem.vue'
import PriceItem from './priceItem.vue'
export default {
    props:["info"],
    components:{
        SpotItem,
        PriceItem
    },
    data() {
        return {
            flag: true,
            type: [
                {price_id: 1,price: 80},
                {price_id: 2,price: 180},
                {price_id: 3,price: 280},
                {price_id: 4,price: 380},
                {price_id: 5,price: 580},
            ]
        }
    },
    created(){      //判断type类型   显示相应组件
        if(this.info.id == 1){
            this.flag = true
        }else{
            this.flag = false
        }
    }
}
</script>

<style lang="scss">
    
</style>

