<template>
    <section class="app-home">
        <app-header></app-header>
        <main>
            <app-home-swiper></app-home-swiper>
             <app-nav></app-nav>
             <app-skill-show></app-skill-show>
              <app-loop-show></app-loop-show>
             
          
        </main>
       
    </section>
</template>

<script>
import AppHeader from '@c/common/app-home/AppHeader'

import AppHomeSwiper from '@c/common/app-home/AppHomeSwiper'
import AppNav from '@c/common/app-home/AppNav'
import AppSkillShow from '@c/common/app-home/AppSkillShow'
import AppLoopShow from '@c/common/app-home/AppLoopShow'
export default {
   components: {
     
      AppHeader,
      AppHomeSwiper,
      AppNav,
      AppSkillShow,
      AppLoopShow
      
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

