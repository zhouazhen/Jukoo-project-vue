<template>
    <div id="show">
        <show-header></show-header>
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

}
</style>


