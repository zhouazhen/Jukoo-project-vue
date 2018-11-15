<template>
  <header class="navbar detail-header">
    <div class="left">
      <a href=""><span class="fa fa-angle-left"></span></a>
    </div>
    <div class="center" v-if="tag">演出详情</div>
    <div class="right" @click="backShow"><span class="fa fa-ellipsis-h"></span></div>
  </header>
</template>

<script>
// import bus from '@util/bus'
export default {
  data: function() {
    return {
      tag: false
    };
  },
  methods: {
    backShow: function() {
      // this.$emit('show-bg')
      this.$store.commit("backIsShow");
    },
    /* top (){
      bus.$emit('eventForm')
    } */
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let headerbarOffsetTop = document.querySelector('header').offsetTop;
      if (scrollTop > headerbarOffsetTop) {
        this.tag = true;
      } else {
        this.tag = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 1.1733rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    width: 1.6rem;
    height: 1.1733rem;
    .fa-angle-left {
      font-size: 0.9333rem;
      display: inline-block;
      width: 0.5333rem;
      height: 1.1733rem;
      padding-left: 0.4rem;
    }
  }
  .right {
    width: 1.8667rem;
    height: 1.1733rem;
    .fa-ellipsis-h {
      font-size: 0.5333rem;
      width: 99.9975px;
      height: 1.1733rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .center {
    flex: 1 1;
    text-align: center;
    font-size: 0.4533rem;
  }
}
</style>
