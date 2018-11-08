<template>
    <div id="show">
        <show-header></show-header>
       
        <section class="content">
            <router-view name= 'all'></router-view> 
            <router-view name= 'other'></router-view> 
        </section>
           
    </div>
</template>
<script>

import showHeader from './ShowHeader.vue'
export default {
    name: 'show',
    components: {
      showHeader
    }
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


