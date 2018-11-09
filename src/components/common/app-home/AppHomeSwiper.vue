<template>
   <div class="app-home-swiper">
         <swiper v-if = "hasnum" :options="swiperOption" class="swiper">

            <!-- slides -->
            <swiper-slide 
                v-for = "img in imgs"
                :key = "img.si_id"
            >
            
                 <img width="100%"  :src="url+img.image_url" >
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
         </swiper>

   </div>
   
       
</template>
<script>
import axios from 'axios'
import qs from 'qs';
export default {
data:function(){
   return {
       swiperOption: {
          pagination: {
              el: '.swiper-pagination'
          },
          loop: true, 
          autoplay: true
        },
       imgs:[],
       url:"http://image.juooo.com/",
       hasnum:false

   }
},

   beforeCreate () {
     var that=this;
          axios({
             method: 'post',
                url: '/ju/index/getNationalSildeList',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: qs.stringify({
                    "confType": "L",
                    "isSymbol": 1,
                    "limit": 6
                }),
        }).then(function (res) {
                that.imgs=res.data.data
                that.hasnum=true
            })
    },
};
</script>
<style>
.app-home-swiper img{
    height:4.12rem;

}

</style>




