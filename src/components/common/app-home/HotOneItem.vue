
<template>
    <div class="show_items1" > 
        <div class="img_box1">
            <img :src="b.pic">
        </div>
        <div class="detail_box1">
            <p class="title1"> {{b.show_name}}</p>
            <span class="time1" v-bind="sub">{{b.display_show_time}}</span>
            <span class="place1">
                {{b.city_name}} 
            </span>
            <div class="logo1">{{data}}</div>
     
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
    props: ['b'],
    data(){
        return {
            data:"聚橙主办"
        }
    },
  
    computed:{
        sub:function(){
           this.b.display_show_time=this.b.display_show_time.substring(0,10)
            console.log(this.b.display_show_time)

      }
 
  

  }
 


}
</script>
<style lang="scss">
    .show_items1{
        display: inline-block;
        float: left;
        position: relative;
        width: 2.9rem;
        margin-right: 0.1333rem;
        padding: 0.2rem 0;
        .img_box1{
            position: relative;
            width: 3rem;
            height: 3.9067rem;
            margin-bottom: 0.1333rem;
           
            img{
                width: 100%;
                height: 100%;
                border: 1px solid transparent;
            }
        }
        .detail_box1{
            width:3.4133rem;
            height:1.0667rem;
            color:rgb(102, 102, 102);
            p{
                // display: -webkit-box;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                // -webkit-line-clamp: 2;
                // -webkit-box-orient: vertical;
        
            }
            .title1{
                color: #1a1a1a;
                padding: 0 0.1067rem;
                font-size: 0.3733rem;
                font-weight: bold;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
                
            .time1{
                    
                font-size: 0.32rem;
                color: #b3b3b3;
              
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height:0.3733rem;
                position: relative;
            }
            .place1{
                font-size:0.32rem
            }
           
            

        }
         .logo1{
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


