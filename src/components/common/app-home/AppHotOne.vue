<template>
    <div class="app-hot-one">
        <div class="items_wrap">
            <hot-one-item v-for='(item,i) in lists' :key="i" :b='item' @click.native="toDetail(item)"></hot-one-item>
        <router-link tag="div" :to="{path:'/show',query: {category: much.category}}" class="much">
            {{much.title}}>
        </router-link>
        </div>

    </div>
</template>
<script>
import axios from "axios";
import HotOneItem from "@c/common/app-home/HotOneItem";
export default {
  props: ["n"],
  components: {
    HotOneItem
  },
  computed: {
    lists() {
      return JSON.parse(JSON.stringify(this.n));
    }
  },
  data: function() {
    return {
      much:{title:"查看全部演出",category: 0}
     
  }},
  methods: {
    toDetail(item) {
      localStorage.setItem("item", JSON.stringify(item));
      this.$router.push({ path: "detail" });
    }
  }
};
</script>
<style lang="scss">
.app-hot-one{
  margin-bottom:1.3333rem;
  .items_wrap {
  padding: 0 0.3333rem;
  background: #fff;
  margin-right: -0.1333rem;
  font-size: 0.3733rem;
  color: #666;
}
.much{
      height:1.3333rem;
      line-height: 1.3333rem;
      text-align: center
    }
}

</style>




