<template>
    <!-- 返回 -->
    <div class="shadow-bg">
        <div class="mask"></div>
        <div class="back-wrapper">
            <div class="triangle"></div>
            <a href="" class="tohome">首页</a>
            <a href="" class="myjucoo">我的聚橙</a>
        </div>
        <!-- //底部弹窗 -->
        <div class="promotion-wrapper">
            <div class="title">
                促销
                <span class="close">&times;</span>
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
    </div>
</template>

<script>
//等待传参，促销，欢聚橙卡，优惠券
export default {
    
}
</script>


<style lang="scss">
.shadow-bg {
  display: none;
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
    display: none;
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
    display: none;
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

