<template>
    <header class="app-header">
        <div class="left">
            
            <router-link tag="span" to="/city" class="map"><i class="fa fa-map-marker"></i>{{chunks.city ? chunks.city.cityName : ''}}</router-link>
        </div>
        <router-link tag="div" to="/search" class="right">
           <a class="search" href="#"><i class="fa fa-search s"></i>搜索演出,艺人或场馆</a>
               
          
        </router-link>
    </header>
       
</template>
<script>

import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutations-type'
export default {
    beforeCreate(){
        // 一进来就先去定位更改城市信息, 如果有保存的，就别获取去了
        if ( localStorage.city ) {
            this.$store.commit({
                type: 'chunks/' + CHANGE_CITY,
                cities: JSON.parse(localStorage.cities),
                city: JSON.parse(localStorage.city)
            })
        } else {
            this.$store.dispatch({type: 'chunks/getCurrentPosition'})
        }     
    },
    computed:mapState(['chunks'])
     

    
};
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
        .left .map{
            
            font-size:0.3733rem;
            color:rgb(38, 38, 38);
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
        .right{
            width:7.4933rem;
            height:0.8rem;
            background-color:rgb(240, 240, 240);
            position:absolute;
            top:0.2rem;
            right:30px;
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
           

        }
    }
</style>













