<template>
  <header class="navbar detail-header">
    <div class="left">
      <a href=""><span class="fa fa-angle-left"></span></a>
    </div>
    <div class="center">演出详情</div>
    <div class="right"><span class="fa fa-ellipsis-h"></span></div>
  </header>
</template>

<script>
export default {

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
    //   display: none;
  }
}
</style>
