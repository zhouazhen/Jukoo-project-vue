<template>
  <div id="app">
   
    <body>
    
      <router-view ></router-view>
    </body>
      
    
     <app-footer></app-footer>
  </div>
</template>


<script>

import AppFooter from '@c/layout/AppFooter'

export default {
   
    name: 'app',
    components: {
     
      AppFooter
    },
   
//     methods: {
 
//      description(a){
//        console.log(a)

//      }
//  },
    
}

</script>

<style lang="scss">

// 



</style>
