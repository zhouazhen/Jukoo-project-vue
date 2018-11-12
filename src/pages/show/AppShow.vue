<template>
    <div id="show">
        <show-header></show-header>
        <div  class="content">
            <show-content ref="list" :isBackShow.sync = "isBackShow"></show-content>
        </div>
        <transition
            enter-active-class="fadeIn"
            leave-active-class="fadeOut"
        >
            <div @click = "backTop" v-if = "isBackShow"  class="back-top animated">
                <i class="fa fa-arrow-up"></i>
            </div>  
        </transition>
        <app-footer class="bottom"></app-footer>
    </div>
</template>
<script>
import ajax from '../../util/axios'
import showHeader from './ShowHeader.vue'
import showContent from  './AllItemList.vue'
import appFooter from '@c/layout/AppFooter.vue'

export default {
    name: 'show',
    components: {
        showHeader,
        showContent,
        appFooter
    },
    data() {
        return {
            isBackShow: false
        }
       
    },
    methods:{
        backTop (e) {
            this.$refs.list.backTop()
        }
    }
}
</script>
<style lang="scss">
.back-top {
       position: fixed;
       right: .533333rem;
       bottom: 2rem;
        background-color: #ccc;
        width: 1.28rem;
        height: 1.28rem;
        line-height: 1.28rem;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
   } 
#show{
    height: 100%;
    background-color: #f2f2f2; 
    .content{
       height: 100%;
       position: absolute;
       top: 2.106667rem;
    }
    .bottom{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
    }
}

</style>


