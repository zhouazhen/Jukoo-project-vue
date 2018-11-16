<template>
    <section class="app-home">
        <app-header></app-header>
        <main>
            <app-home-swiper></app-home-swiper>
             <app-nav></app-nav>
             <app-skill-show></app-skill-show>
              <app-loop-show></app-loop-show>
               <app-hot-box></app-hot-box> 

             <img class="img1" :src="data">
          
        </main>
       
    </section>
</template>

<script>
import AppHeader from '@c/common/app-home/AppHeader'

import AppHomeSwiper from '@c/common/app-home/AppHomeSwiper'
import AppNav from '@c/common/app-home/AppNav'
import AppSkillShow from '@c/common/app-home/AppSkillShow'
import AppLoopShow from '@c/common/app-home/AppLoopShow'
import AppHotBox from '@c/common/app-home/AppHotBox'
export default {
   components: {
     
      AppHeader,
      AppHomeSwiper,
      AppNav,
      AppSkillShow,
      AppLoopShow,
      AppHotBox
      
    },
    data:function(){
        return{
            data:"http://image.juooo.com/group1/M00/01/9B/rAoKmVvFRm2AMGGvAABKuY20b_o268.png"
        }
    }
}
</script>

<style lang="scss" >
main{
    position:relative;
    top:1.2162rem;
    height:15.4595rem;
    overflow:auto;
    
    .img1{
       position:fixed;
       bottom:2rem;
       right:0.4rem;
    }

}
</style>

