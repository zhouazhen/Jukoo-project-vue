<template>
   <header class="search-top border-bt">
       <search-bar></search-bar>
       <search-nav></search-nav>
   </header>
</template>
<script>
import searchBar from "./HeaderSearchBar.vue";
import searchNav from "./HeaderSearchNav.vue";
export default {
  name: "search",
  components: {
    searchBar,
    searchNav
  }
};
</script>
<style lang="scss">
.search-top.border-bt {
  border-bottom: 1px solid #dfdfdf;
}
.search-top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #ffffff;
    padding-left: .4rem;
    padding-right: .4rem;
}
</style>



