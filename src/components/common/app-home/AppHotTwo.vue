<template>
    <div class="app-hot-two">
        <div class="items_wrap">
            <hot-two-item v-for='(item,i) in lists' :key="i" :a='item' @click.native="toDetail(item)"></hot-two-item>

        </div>

    </div>
</template>
<script>
import axios from "axios";
import HotTwoItem from "@c/common/app-home/HotTwoItem";
export default {
  props: ["n"],
  components: {
    HotTwoItem
  },
  computed: {
    lists() {
      return JSON.parse(JSON.stringify(this.n));
    }
  },
  data: function() {
    return {};
  },
  methods: {
    toDetail(item) {
      localStorage.setItem("item", JSON.stringify(item));
      this.$router.push({ path: "detail" });
    }
  }
};
</script>
<style lang="scss">
.app-hot-two {
  .items_wrap {
    margin-top: 0.266667rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    background-color: #ffffff;
  }
}
</style>




