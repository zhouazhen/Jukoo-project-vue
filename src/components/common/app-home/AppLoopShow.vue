<template>
    <div class="app-loop-show">
        <h4>轮回演出<span>更多演出></span></h4>
        <div class="app-loop-show-swiper">
            <swiper :options="swiperOption" class="swiper">

                <!-- slides -->
                <swiper-slide class="slide c" v-for="item in data" :key="item.show_id" @click.native="toDetail(item)">

                    <img :src="item.pic">

                </swiper-slide>

            </swiper>

        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },

      data: []
    };
  },
  beforeCreate() {
    var that = this;
    axios({
      method: "post",
      url: "/ju/Tour/ShowList",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(function(res) {
     
      that.data = res.data.data;
    });
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
.app-loop-show {
  padding: 0.3rem 0 0.4rem 0.3333rem;

  h4 {
    font-size: 0.48rem;
    color: #1a1a1a;
    margin-bottom: 0.3333rem;
    position: relative;
    font-weight: bold;
    span {
      width: 1.4533rem;
      height: 0.3867rem;
      font-size: 0.2933rem;
      font-weight: 400;
      color: #999;
      position: relative;
      right: -5.6rem;
    }
    .swiper{
        height:100%;
         width:9.6667rem;

        .slide{
            width:3rem;
            height:3.9067rem;
            // display: flex;
            margin-right:0.1333rem;
            
        }
    }
  }
}
</style>




