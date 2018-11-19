<template>
  <header class="header login-header">
    <div class="header-wrap">
      <div class="header-left"><a @click="back" class="fa fa-angle-left head-btn"></a></div>
      <div class="header-middle"></div>
      <div class="header-right">
        <router-link :to="path" class="head-btn">{{title}}</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    path: String
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss">
.header {
  width: 100%;
  height: 1.6rem;
  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    color: #4d4d4d;
    .header-left,
    .header-right {
      display: flex;
      align-items: center;
    }
    .header-left {
      width: 1.2267rem;
      height: 1.0667rem;

      .head-btn {
        font-size: 0.5333rem;
      }
      .fa-angle-left {
        font-size: 0.7333rem;
        color: #b2b2b2;
        width: 1.0667rem;
        height: 1.0667rem;
        cursor: pointer;
        margin-right: 0.16rem;
      }
    }
    .header-left .head-btn,
    .header-right .head-btn {
      margin-right: 0.16rem;
    }
    .head-btn {
      display: block;
      padding: 0.2666666667rem;
      font-size: 0.3733333333rem;
    }
  }
}
</style>
