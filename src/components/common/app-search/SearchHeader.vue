<template>
    <header class="app-header">
        <div class="left">
            
            <router-link tag="span" to="/home" class="back"><i class="fa fa-chevron-left"></i></router-link>
        </div>
        <div class="right1">
        <!-- <router-link tag="div" to="/search" class="right"> -->
           <a class="search" href="#"><i class="fa fa-search s"></i>演出/艺人/场馆</a>
               <span class="title">搜索</span>
          
        <!-- </router-link> -->
        </div>
    </header>
       
</template>
<script>
export default {};
</script>
<style lang="scss" >
    .app-header{
        backface-visibility: hidden;
        margin: 0;
        border-bottom: 1px solid #e7e7e7;
        width: 100%;
        height: 1.2162rem;
        font-size: 0.72533rem;
        color: #212121;
        position:fixed;
        top:0;
        .left .back{
            
            font-size:0.4667rem;
            color:
rgb(153, 153, 153)
;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: Arial, "微软雅黑", sans-serif;
            position:relative;
            left:0.4rem;
           
                .fa{
                    font-size:0.6rem;
                    margin-right:0.1333rem;
                    position:relative;
                    top:0.0667rem;
           

                }

           // line-height: 1.87733rem;
        }
        .right1{
            width:7.4933rem;
            height:0.8rem;
            background-color:rgb(240, 240, 240);
            position:absolute;
            top:0.2rem;
            right:1.3333rem;
            border-radius: 3%;
           .search{
                font-size:0.4rem;
                position:absolute;
                top:0.1333rem;
                left:0.2667rem;
                color:#b3b3b3;
               .s{
                    font-size:0.4rem;
                    margin-right:0.1333rem
                 }

           }
           .title{
               color:rgb(102, 102, 102);
               font-size:0.3733rem;
               position:relative;
               right:-7.75rem;
               top:-0.18rem
           }
           

        }
    }
</style>
