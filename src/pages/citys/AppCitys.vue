<template>
               
    <section class="app-citys">
         <div class="header">
            <router-link tag="i" to="/home" class="fa fa-chevron-left"></router-link>
            <span>切换城市</span>
        </div>  
        <div class="body">
           
           <app-content-block title = "当前所在城市">
           <app-content-item class="active" v-if = "chunks.city">{{chunks.city.cityName}}</app-content-item>
          </app-content-block>
           <app-content-block title = "热门城市">
           <app-content-item 
                v-for = "city in hotCitys"
                :key  = "city.id"
                   @click.native = "changeCity(city)"
           >{{city.name}}</app-content-item>
        </app-content-block>
       <app-city-content></app-city-content>
     
       </div>
       
       
    </section>
</template>

<script>

import AppContentBlock from '@c/layout/AppContentBlock'
import AppContentItem from '@c/layout/AppContentItem'
import AppCityContent from '@c/common/app-city/AppCityContent'
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutations-type'
export default {
     name: 'app-citys',
     components: {
                 AppContentBlock  ,
                   AppContentItem,
                   AppCityContent
                                                                                                                                                     
    },
    data () {
        return {
             activeCity: {
                id: 12,
                name: '北京'
            },
            hotCitys: [
                {id: 0,  name: '全国'},
                {id: 1, name: '深圳'},
                {id: 3, name: '广州'},
                {id: 5, name: '北京'},
                {id: 4, name: '上海'},
                {id: 6, name: '成都'},
                {id: 12, name: '重庆'},
                {id: 17, name: '武汉'},
              
                
            ]
        }
    },
   computed: mapState(['chunks']),
   
    methods: {
        changeCity ({id: cityId, name: cityName}) {
            // 更改城市信息
            this.$store.commit({type: 'chunks/' + CHANGE_CITY, city: {
                cityId, cityName
            }})
             console.log( cityId,9999999999999999999999999999999)
            //回到首页
            this.$router.push({name: 'home'})
           
        }
    }
}
</script>

<style lang="scss" >
    .app-citys {
        .header{
            backface-visibility: hidden;
            margin: 0;
            border-bottom: 1px solid #e7e7e7;
            width: 100%;
            height: 1.2162rem;
            font-size: 0.72533rem;
            color: #212121;
            position:fixed;
            top:0;
            z-index: 30;
            .fa{
                height: 100%;
                line-height: 2.5067rem;
                font-size: 0.4267rem;
                text-align: right;
                position:absolute;
                top:-0.6rem;
                left:0.5333rem
            }
            span{
                font-size: 0.4267rem;
                color: #212121;
                text-align: center;
                position:absolute;
                left:3.8rem;
                top:0.35rem
            }
        }
        .body{
            height:16.4533rem;
            position: relative;
            top:1.6rem;
          overflow :auto
           
        }
    }
</style>

