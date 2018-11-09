<template>
    <div class="app-hot-box">
        <h4>热门演出</h4>  
       <span class="s1" v-if="show" @click="show=!show"> <i @click="handleChangeView('one')" class="fa fa-list"></i></span>
       <span class="s2" v-else @click="show=!show"><i @click="handleChangeView('two')" class="fa fa-th-large"></i></span>
        
        <component :is="currentView" :n="shows"></component>
    </div>
</template>
<script>


import AppHotOne from '@c/common/app-home/AppHotOne'
import AppHotTwo from '@c/common/app-home/AppHotTwo'
import axios from 'axios'
import qs from 'qs';
export default {
    components: {
        one:AppHotOne,
        two:AppHotTwo
      
    },

     methods:{
                handleChangeView:function(component){
                    this.currentView=component;
                }
            },

    data:function(){
        return {
            currentView:"one",
             shows : [],
             show:false,
            
    }},
   beforeCreate(){
        var that=this;
        axios({
             method: 'post',
                url: '/ju/index/hotsShowList',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                 data: qs.stringify({
                
                   "city_id":0
                }),
        }).then(function (res) {
                
               that.shows=res.data.data
               console.log( that.shows)
            })
    }
     

}

</script>
<style lang="scss">
.app-hot-box{
    position:relative;
   
    h4{
        font-size: 0.48rem;
        color: #333;
        padding: 0.2667rem 0.3333rem 0.3333rem 0.1333rem;
        font-weight: bold;
        background: #fff;
        position: relative;
    }
    .s1,.s2{
        position:absolute;
        top: 0.3333rem;
        right: 0.6rem;
        font-size:0.5rem
        
    }
}



    




 






</style>




