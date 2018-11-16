<template>
  <div id="app">
    <router-view></router-view>
    <app-footer v-if="show"></app-footer>

  </div>
</template>


<script>
import AppFooter from "@c/layout/AppFooter";
export default {
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
</script>

<style lang="scss">
</style>
