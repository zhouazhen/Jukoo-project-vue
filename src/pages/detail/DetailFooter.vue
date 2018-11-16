<template>
  <div class="footer">
    <div id="juo-meiqia" class="service-btn">
      <span class="fa fa-headphones"></span>
      <span class="txt">客服</span>
      <span class="line"></span>
    </div>
    <div class="buy-now" @click="ticket()">立即购票</div>
    <div class="seat-online">在线选座</div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
    props:['info'],
    methods: {
    ticket(){
      this.$router.push({ path: "ticket"});
    }
  }
};
</script>

<style lang="scss">
.footer {
  border-top: 1px solid #e7e7e7;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.3333rem;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  z-index: 499;
  background: #fff;
  .service-btn {
    position: relative;
    width: 1.7333rem;
    height: 1.32rem;
    list-style: 1.32rem;
    .fa-headphones {
      margin-top: 0.2rem;
      display: block;
      font-size: 0.5067rem;
    }
    .txt {
      font-size: 0.2667rem;
    }
    .line {
      display: block;
      width: 0.0133rem;
      height: 0.8rem;
      position: absolute;
      right: 0;
      top: 0.2667rem;
      background: #ccc;
    }
  }
  .buy-now,
  .seat-online {
    width: 4.1333rem;
    height: 1.32rem;
    line-height: 1.32rem;
    font-size: 0.4533rem;
  }
  .seat-online {
    background: #ff7919;
    color: #fff;
  }
}
</style>
