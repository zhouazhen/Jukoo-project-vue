<template>
  <div id="app">

    <!-- <body>
      
        <router-view></router-view>
      
<<<<<<< HEAD
    
=======
      
    </body> -->
        <router-view></router-view>
    <app-footer v-if="show"></app-footer>
  
>>>>>>> 8dab1b47bcda8a81807deecf13c4c941cc3baf7a
  </div>
</template>


<script>
import AppFooter from "@c/layout/AppFooter";
export default {
<<<<<<< HEAD
   
    name: 'app',
    components: {
    },
   
    
    
}

=======
  name: "app",
  components: {
    AppFooter
  },
  data: function() {
    return {
      show: true
    };
  },
  beforeCreate: function() {
    this.$bus.$on("footer-show", message => {
      this.show = message;
    });

    this.$router.beforeEach((to, from, next) => {
      let noFooter = ["search", "city", "detail"];
      if (noFooter.indexOf(to.name) > -1) {
        this.$bus.$emit("footer-show", false);
      } else {
        this.$bus.$emit("footer-show", true);
      }

      next();
    });
  }
};
>>>>>>> 8dab1b47bcda8a81807deecf13c4c941cc3baf7a
</script>

<style lang="scss">
</style>
