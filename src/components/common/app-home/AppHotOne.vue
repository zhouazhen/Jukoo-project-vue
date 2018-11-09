<template>
    <div class="app-hot-one">
      <div class="items_wrap">
            <hot-one-item v-for= '(item,i) in lists' :key="i" :b = 'item'></hot-one-item>
          
        </div>
         
    </div>
</template>
<script>
import axios from 'axios'
import HotOneItem from  '@c/common/app-home/HotOneItem'
export default {
   props:['n'],
   components: {
        HotOneItem
      
    },
    computed: {
        lists () {
            return JSON.parse(JSON.stringify(this.n))
        }
    },
    data:function(){
        return {
            
    }},
    

}

</script>
<style lang="scss">
.items_wrap{
    padding: 0 0.3333rem;
    background: #fff;
    margin-right: -0.1333rem;
    font-size: 0.3733rem;
    color: #666;
}
    




 






</style>




