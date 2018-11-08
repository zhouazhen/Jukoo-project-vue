<template>
    <div class="app-skill-show">
            <h4>显示秒杀</h4>
            <div class="app-skill-show-swiper">
                <swiper  :options="swiperOption" class="swiper">

                    <!-- slides -->
                    <swiper-slide 
                    class="slide"
                    v-for = "item in data"
                    :key= "item.ticket_id"
                    >
                    <div class="left">
                        <img :src="url+item.pic">
                        </div>
                    <div class="right">
                        <p>{{item.schedular_name}}</p>
                       <p class="p2"> <span class="s1">￥{{item.seckill_ticket_price}}</span><span class="s2">￥{{item.ticket_price}}</span></p>
                        </div>
                        
                    </swiper-slide>
                
                </swiper>

            </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data:function(){
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                },
        
            data:[],
            url:"http://image.juooo.com",
            // data2:[
            //     {id:1,title:"下手慢了"},
            //     {id:1,title:"即将开始"},
            // ]
    }},
    beforeCreate(){
        var that=this;
        axios({
             method: 'post',
                url: '/ju/index/getNationalSeckill',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                // data: qs.stringify({
                //     "confType": "L",
                //     "isSymbol": 1,
                //     "limit": 6
                // }),
        }).then(function (res) {
                // that.imgs=res.data.data
                // that.hasnum=true
                console.log(res.data.data.secKillInfo)
                that.data=res.data.data.secKillInfo
            })
    }
  

}

</script>
<style lang="scss">
.app-skill-show{
        padding: 0.3rem 0 0.4rem 0.3333rem;
       
    h4{
        font-size: 0.48rem;
        color: #1a1a1a;
        margin-bottom: 0.3333rem;
        position: relative;
        font-weight: bold;
    }
    .app-skill-show-swiper{
        height:100%;
        width:9.3333rem;
        .slide{
            width:9.3333rem;
            height:100%;
            display: flex;
            margin:0;
            
            .left {
                    width:2.4rem;
                    height:3.2rem;
                    img{
                        width:2.4rem;
                        height:3.2rem;
                    }
            }
    
    .right{
        width: 6.3333rem;
        padding:0.3333rem 0.2667rem 0.3333rem 0.3333rem;
        position: relative;
        p{
            font-size:0.3733rem;
            font-weight:700;
        }
        .p2{
            position:relative;
            top:1rem;
             .s1{
                color:rgb(255, 121, 25);
                }
            .s2{
                color:rgb(178, 178, 178);
                 text-decoration:line-through;
                 display:inline-block;
margin-left:0.2667rem

            }
        }
       
    }
}
   
}}
    




 






</style>




