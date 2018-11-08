<template>
    <div id="show">
        <show-header></show-header>
    
    </div>
</template>
<script>

import showHeader from './ShowHeader.vue'


export default {
    props: ['url'],
    components: {
        showHeader,
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


