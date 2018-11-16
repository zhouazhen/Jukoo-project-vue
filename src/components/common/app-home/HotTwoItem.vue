
<template>
    <div class="show_items" > 
        <div class="img_box">
            <img :src="a.pic">
        </div>
        <div class="detail_box">
            <p class="title"> {{a.show_name}}</p>
            <p class="time">{{a.display_show_time}}</p>
            <p class="place">
                "["<span>{{a.city_name}}</span>"]" {{a.venue_name}}
            </p>
            <div class="logo">{{data}}</div>
     
            <!-- <p class="price">
                <span class="fs0">￥</span>
                <span class="fs">{{info.min_price}} </span>
                <span class="fs fs1">-</span>
                <span class="fs">{{info.max_price}}</span>
            </p> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['a'],
  data(){
      return {
          data:"聚橙主办"
      }
  }

}
</script>
<style lang="scss">
    .show_items{
        display: flex;
        padding-top: .2rem;
        padding-bottom: .2rem;
        border-bottom: 1px solid #e6e6e6;
        position:relative;
        .img_box{
            position: relative;
            width: 2.4rem;
            height: 3.2rem;
            border: 1px solid #ebebeb;
            img{
                width: 100%;
                height: 100%;
                border: 1px solid transparent;
            }
        }
        .detail_box{
            flex: 1;
            padding-left: .4rem;
            padding-top: .066667rem;
            p{
                // display: -webkit-box;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                // -webkit-line-clamp: 2;
                // -webkit-box-orient: vertical;
        
            }
            .title{
                    min-height: .56rem;
                    max-height: .96rem;
                    line-height: .506667rem;
                    font-size: .373333rem;
                    color: #262626;
                    margin-bottom: .333333rem;
            }
                
            .time,.place{
                    
                    height: .466667rem;
                    line-height: .466667rem;
                    font-size: .293333rem;
                    color: #999999;
            }
           
            .price{
                color: #ff7919;
                margin-top: .333333rem;
                .fs0{
                    margin-right: .106667rem;
                    font-size: .32rem;
                    line-height: .426667rem;
                }
                .fs{
                    font-size: .426667rem;
                    line-height: .426667rem;
                }
                .fs1{
                    margin-right: .053333rem;
                    margin-left: .053333rem;
                }

            }

        }
         .logo{
                width: 0.7733rem;
                height: 0.9333rem;
                display: block;
                position: absolute;
                top: 0.2rem;
                left:0.2667rem;
                background-color:#FA483C;
                font-size:0.3rem;
                color:white;
                padding-left:0.1067rem
            }
     
        
    }
</style>


