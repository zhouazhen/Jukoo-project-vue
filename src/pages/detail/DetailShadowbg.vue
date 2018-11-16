<template>
  <!-- 返回 -->
  <div class="shadow-bg" v-show="flag">
    <div class="mask" @click="hidebg" ></div>
    <div class="back-wrapper" v-if="tag">
      <div class="triangle"></div>
      <router-link  class="tohome" to="/home">首页</router-link>
      <router-link  class="myjucoo" to="/mine">我的聚橙</router-link>
    </div>
    <!-- //底部弹窗 -->
    <div class="promotion-wrapper" v-if="promotion">
      <div class="title">
        促销
        <span class="close" @click="hidebg">&times;</span>
      </div>
      <div class="promotion">
        <div class="tip">以下促销方式可在结算时任选其一</div>
        <div class="row">
          <span class="type">折扣</span>
          <span class="txt">【双十一特惠】重庆刘瑞琦，限时8折</span>
          <span class="txt-right">
            了解详情
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="promotion-wrapper" v-if="vipCard">
      <div class="title">
        欢聚橙卡
        <span class="close" @click="hidebg">&times;</span>
      </div>
      <div class="promotion">
        <div class="row">
          <span class="type">橙PLUS会员卡</span>
          <span class="txt">每单限购6张，限999单</span>
          <span class="txt-right">
            了解详情
            <i class="fa fa-angle-right"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bus from "@util/bus";

//等待传参，促销，欢聚橙卡，优惠券
export default {
  // props: ["flag"],
  data: function() {
    return {
      // tag: false
    };
  },
  /*  props: {
    flag: Boolean
  } 
  props : {
    flag : {
      type : Boolean,
      default : 'false'
    }
  } */
  mounted() {
    // this.getEvent()
  },
  methods: {
    /* getEvent() {
      bus.$on("eventForm", () => {
        this.tag = !this.tag;
        console.log(this.tag);
        
      })
    } */
    hidebg(){
      this.$store.commit("hidebg")
    }
  },
  computed: {
    flag() {
      return this.$store.state.flag;
    },
    tag() {
      return this.$store.state.back;
    },
    promotion() {
      return this.$store.state.promotion;
    },
    vipCard() {
      return this.$store.state.vipCard;
    }
  }
};
</script>


<style lang="scss">
.shadow-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .mask {
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background: #000;
  }
  //返回界面
  .back-wrapper {
    width: 3.7333rem;
    height: 2.3467rem;
    position: fixed;
    top: 1.1733rem;
    right: 0.1333rem;
    background: #fff;
    border-radius: 0.1333rem;
    z-index: 500;
    .tohome,
    .myjucoo {
      display: block;
      color: #212121;
      font-weight: 900;
      text-align: center;
      height: 1.1733rem;
      line-height: 1.1733rem;
    }
    .triangle {
      width: 0;
      height: 0;
      position: absolute;
      top: -0.1333rem;
      right: 0.2667rem;
      border: 0.16rem solid #fff;
      transform: rotate(45deg);
      border-radius: 0.0267rem;
    }
  }
  //底部弹窗界面
  .promotion-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 500;
    color: #333;
    .title {
      height: 1.3333rem;
      line-height: 1.3333rem;
      text-align: center;
      font-size: 0.4533rem;
      position: relative;
      border: 1px solid #ebebeb;
      background: #fafafa;
      .close {
        font-size: 60px;
        position: absolute;
        right: 20px;
        top: -10px;
        color: #b2b2b2;
      }
    }
    .promotion {
      height: 3.1333rem;
      padding-left: 0.4267rem;
      padding-right: 0.2667rem;
      .tip {
        height: 1.3333rem;
        line-height: 1.3333rem;
        color: #999;
        font-size: 0.3467rem;
        border-bottom: 1px solid #ebebeb;
      }
      .row {
        border-bottom: 1px dashed #ebebeb;
        height: 1.3333rem;
        line-height: 1.3333rem;
        margin-bottom: 0.4667rem;
        .type {
          display: inline-block;
          margin-right: 0.2667rem;
          border: 1px solid #ff7919;
          border-radius: 0.04rem;
          padding: 0 0.1333rem;
          height: 0.48rem;
          font-size: 0.2933rem;
          line-height: 0.5067rem;
          color: #ff7919;
        }
        .txt {
          width: 6.9333rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .txt-right {
          color: #b3b3b3;
          font-size: 0.32rem;
          i {
            font-size: 0.4533rem;
          }
        }
      }
    }
  }
}
</style>

