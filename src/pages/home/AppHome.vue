<template>
    <section class="app-home">
        <app-header></app-header>
        <main>
            <app-home-swiper></app-home-swiper>
             <app-nav></app-nav>
             <app-skill-show></app-skill-show>
              <app-loop-show></app-loop-show>
               <app-hot-box></app-hot-box>

             
          
        </main>
       <app-footer class="bottom"></app-footer>
    </section>
</template>

<script>
import AppHeader from '@c/common/app-home/AppHeader'

import AppHomeSwiper from '@c/common/app-home/AppHomeSwiper'
import AppNav from '@c/common/app-home/AppNav'
import AppSkillShow from '@c/common/app-home/AppSkillShow'
import AppLoopShow from '@c/common/app-home/AppLoopShow'
import AppHotBox from '@c/common/app-home/AppHotBox'
import appFooter from '@c/layout/AppFooter.vue'
export default {
   components: {
     
      AppHeader,
      AppHomeSwiper,
      AppNav,
      AppSkillShow,
      AppLoopShow,
      AppHotBox,
      appFooter
      
    }
}
</script>

<style lang="scss" >
main{
    position:relative;
    top:1.2162rem;
    height:15.4595rem;
    overflow:auto;

}
</style>

