<template>
    <div id="show">
        <show-header></show-header>
        <div class="content" >
            <show-content keep-alive></show-content>
        </div>
      
    </div>
</template>
<script>
import ajax from '../../util/axios'
import showHeader from './ShowHeader.vue'
import showContent from  './AllItemList.vue'

export default {
    name: 'show',
    components: {
        showHeader,
        showContent
    },
  

}
</script>
<style lang="scss">
#show{
    height: 100%;
    background-color: #f2f2f2; 
    .content{
       height: 100%;
       position: absolute;
       top: 2.106667rem;
   }

}

</style>


