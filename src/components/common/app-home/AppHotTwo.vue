<template>
    <div class="app-hot-two">
        <div class="items_wrap">
            <hot-two-item v-for='(item,i) in lists' :key="i" :a='item' @click.native="toDetail(item)"></hot-two-item>
 <router-link tag="div" :to="{path:'/show',query: {category: more.category}}" class="more">
            {{more.title}}>
        </router-link>
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
    return {
       more:{title:"查看全部演出",category: 0}

    };
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
  .more{
        height:1rem;
        width:3.5rem;
        line-height: 1rem;
        text-align:center;
     
        position:relative;
        left:3rem;
        bottom:-0.3333rem;
        margin-bottom:0.6667rem

    }
}
</style>




