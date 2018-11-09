<template>
    <div class="app-hot-two">
        <div class="items_wrap">
            <hot-two-item v-for= '(item,i) in lists' :key="i" :a = 'item'></hot-two-item>
          
        </div>
         
    </div>
</template>
<script>
import axios from 'axios'
import HotTwoItem from  '@c/common/app-home/HotTwoItem'
export default {
    props:['n'],
     components: {
        HotTwoItem
      
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
.app-hot-two{
  .items_wrap{
        margin-top: .266667rem;
        padding-left: .4rem;
        padding-right: .4rem;
        background-color: #ffffff;
    }

}
    




 






</style>




