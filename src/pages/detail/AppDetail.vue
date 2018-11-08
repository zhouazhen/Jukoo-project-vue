<template>
  <div class="detail-wrapper">
    <detail-header></detail-header>
    <detail-shadowbg></detail-shadowbg>
    <div class="view">
      <article class="poster">
        <img class="img-fg" src="http://image.juooo.com/group1/M00/02/14/rAoKNVtiwvKAarn7AAB2P6sw5rA772.jpg" alt="">
        <div class="poster-bg-shadow"></div>
        <img class="logo-i" src="https://m.juooo.com/public/basic/Home/app/app-juooo4.2/images/juooo.png" alt="">
        <a class="round-num" href="https://m.juooo.com/tour/tourshowinfo?sid=33506">11场巡演</a>
        <div class="poster-fg"></div>
      </article>
      <article class="text-desc">
        <h3 class="title">【小橙堡】情绪管理亲子剧《我该怎么办》--天津站</h3>
        <div class="row">时间：<span class="time">2018.11.03-2018.11.24</span></div>
        <a href="" class="row venue">
          <span>场馆：</span>
          <span class="place">天津华夏未来剧场</span>
          <i class="fa fa-map-marker"></i>
        </a>
        <div class="price row">
          <i class="fa fa-cny"></i>
          <span class="num">88-298</span>
        </div>
        <div class="support">
          <div class="left">
            支持：
            <span class="sup-item">橙PLUS卡免邮</span>
          </div>
        </div>
        <div class="vipcard">
          <a href="" class="row">
            <div class="left">
              欢聚橙卡：
              <span class="sup-item">橙PLUS会员卡</span>
            </div>
            <div class="right">
              <i class="fa fa-ellipsis-h"></i>
            </div>
          </a>
        </div>
      </article>
      <!-- 促销 -->
      <!-- <div class="discount">
          <a class="row js-promotion clearfix" style="">
            <div class="left clearfix fl">
              <div class="fl txt3">促销：</div>
              <div class="sup fl cleafix js-discount-activity-list">
                <p class="sup-item fl clearfix"><span class="txt1 fl">折扣</span><span class="txt2 fl">【双十一特惠】重庆刘瑞琦，限时8折</span></p>
              </div>
            </div>
            <div class="right fr">
              <i class="fa fa-ellipsis-h"></i>
            </div>
          </a>
        </div> -->
      <article class="brief-intro">
        <h3 class="title">— 演出介绍 —</h3>
        <p class="brief-txt">出身于选秀、成名于独立——她是90后创作歌手刘瑞琦Richael</p>
        <a href="javascript:;" class="go-detail">查看详情 <span class="fa fa-angle-down"></span></a>
      </article>
      <article class="ticket-notice">
        <h3 class="title">— 购票须知 —</h3>
        <div class="ticket-txt">
          <p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
          <p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
          <p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
          <p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
        </div>
        <div class="in-to-know">
          入场须知： <span class="text">1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场。</span>
        </div>
      </article>
      <div class="empty"></div>
    </div>
    <detail-footer></detail-footer>
  </div>

</template>

<script>
import DetailHeader from "@pages/detail/DetailHeader";
import DetailFooter from "@pages/detail/DetailFooter";
import DetailShadowbg from "@pages/detail/DetailShadowbg";
export default {
  name: "detail",
  components: {
    DetailHeader,
    DetailFooter,
    DetailShadowbg
  }
};
</script>

<style lang="scss">
.view {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .poster {
    background-color: #000;
    height: 7.04rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    /* .poster-bg-shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6.9333rem;
      overflow: hidden;
      z-index: 4;
      background: #000;
      opacity: 0.4;
    } */
    .poster-fg {
      overflow: hidden;
      position: absolute;
      bottom: -0.2667rem;
      left: -25%;
      z-index: 5;
      border-top: 1px solid #ccc;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      width: 150%;
      height: 1.6rem;
      background: #fff;
    }
    .img-fg {
      width: 3.6533rem;
      height: 4.88rem;
      position: absolute;
      top: 1.52rem;
      left: 3.1333rem;
      z-index: 9;
      border: 3px solid #fff;
    }
    .logo-i {
      position: absolute;
      top: 1.52rem;
      left: 6rem;
      z-index: 10;
    }
    .round-num {
      position: absolute;
      right: 0.4266666667rem;
      bottom: 2.048rem;
      border: 1px solid #dadada;
      border-radius: 0.1707rem;
      padding: 0.2133rem;
      color: #dadada;
    }
  }
  .text-desc {
    padding: 0 0.2667rem 0 0.4rem;
    background: #fff;
    position: relative;
    margin-top: -2px;
    .title {
      font-size: 0.4533rem;
      padding-top: 3px;
      margin-bottom: 0.3333rem;
      word-break: break-word;
      color: #212121;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 900;
    }
    .row {
      color: #666;
      padding-bottom: 0.1333rem;
    }
    .venue {
      max-width: 6.5333rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        float: left;
      }
      .fa-map-marker {
        margin-left: 0.2667rem;
        border-left: 1px solid #ccc;
        padding: 0 0.6667rem 0 0.2667rem;
        font-size: 0.4267rem;
        vertical-align: text-bottom;
        color: #666;
        margin-top: 0.0667rem;
      }
    }
    .price {
      padding: 0.1333rem 0 0.4rem;
      font-size: 0.48rem;
      color: #ff7919;
      .fa-cny {
        font-size: 0.48rem;
        margin-right: 0.1333rem;
      }
    }
    .support {
      border-top: 1px dashed #ccc;
      height: 1.0667rem;
      font-size: 0.3467rem;
      line-height: 1.0667rem;
      color: #999;
      display: flex;
      justify-content: space-between;
    }
    .sup-item {
      display: inline-block;
      margin-left: 0.1733rem;
      border: 1px solid #ff7919;
      border-radius: 0.04rem;
      padding: 0 0.0667rem;
      height: 0.4267rem;
      font-size: 0.2667rem;
      line-height: 0.4rem;
      color: #ff7919;
    }
    .vipcard {
      border-top: 1px dashed #ccc;
      .row {
        display: block;
        width: 100%;
        padding-top: 0.2667rem;
        padding-bottom: 0.2rem;
        font-size: 0.3467rem;
        color: #999;
        background: #fff;
        overflow: hidden;
        .left {
          float: left;
          width: 6.9333rem;
          height: 0.6133rem;
          overflow: hidden;
          .sup-item {
          }
        }
        .right {
          float: right;
          margin-right: 0.1333rem;
          color: #666;
        }
      }
    }
    /*  .discount {
      margin-top: 0.2933rem;
      padding-right: 0.2667rem;
      font-size: 0.3467rem;
      color: #999;
      .row {
        display: block;
        width: 100%;
        padding-top: 0.2667rem;
        padding-bottom: 0.2rem;
        border-bottom: 1px dashed #ccc;
        overflow: auto;
        .right {
          margin-right: 0.1333rem;
          color: #666;
        }
        .left {
          .sup {
            width: 7.4667rem;
          }
          .sup-item {
            margin-bottom: 0.1733rem;
          }
          .sup-item:first-child {
            width: 100%;
          }
          .txt1 {
            display: inline-block;
            padding: 0 0.0667rem;
            height: 0.4rem;
            font-size: 0.2667rem;
            text-align: center;
            line-height: 0.4rem;
            color: #ff7919;
            border: 1px solid #ff7919;
            border-radius: 0.0667rem;
            margin-right: 0.1333rem;
            margin-top: 0.0667rem;
          }
          .txt2 {
            width: 5.8rem;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    } */
  }
  .brief-intro {
    margin: 0.2933rem 0;
    padding: 0 0.4rem;
    background: #fff;
    .title {
      padding-top: 0.6rem;
      font-size: 0.4267rem;
      font-weight: normal;
      text-align: center;
      color: #212121;
    }
    .brief-txt {
      padding-top: 0.2667rem;
      font-size: 0.3733rem;
      line-height: 0.6667rem;
    }
    .go-detail {
      padding: 0.4667rem 0;
      font-size: 0.32rem;
      color: #999;
      display: block;
      width: 100%;
      text-align: center;
      position: relative;
    }
  }
  .ticket-notice {
    margin: 0.2933rem 0;
    padding: 0 0.4rem;
    background: #fff;
    .title {
      padding-top: 0.6rem;
      font-size: 0.4267rem;
      font-weight: normal;
      text-align: center;
      color: #212121;
    }
    .ticket-txt {
      padding-top: 0.2667rem;
      font-size: 0.3733rem;
      overflow: hidden;
      p {
        line-height: 0.6667rem;
      }
    }
    .in-to-know {
      margin-top: 0.2rem;
      border-top: 1px dashed #ccc;
      padding: 0.3467rem 0 0.4667rem;
      font-size: 0.3467rem;
      line-height: 0.4667rem;
      color: #999;
      .text {
        color: #666;
      }
    }
  }
  .empty {
    width: 100%;
    height: 1.3333rem;
}
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.fa-ellipsis-h {
  font-size: 0.5333rem;
  color: #999;
  width: 0.5333rem;
  height: 0.5333rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
