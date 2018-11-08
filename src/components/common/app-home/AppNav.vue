<template>
<div class="app-nav">
   <div class="app-nav-top">
        <div class = "app-nav-top-item"  v-for = "item in data" :key  = "item.id ">
        
            <img :src="item.url">
            <p><span>{{item.content}}</span></p>
        </div>

   </div>

   <div class="app-nav-bottom">
        <div class = "app-nav-bottom-item"  v-for = "item in dataBottom" :key  = "item.id ">
        
            <img :src="item.url">
             <p>{{item.content}}</p>
           
        </div>

   </div>
   
  </div>     
</template>
<script>

export default {
data:function(){
   return {
        data:[
            {id:1, url:"http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUxWAVCq7AAA1AYjHYo4689.png" , content:"演唱会"},
            {id:2, url:"http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyCATRKeAAAs7TXa0as743.png" , content:"音乐会"},
            {id:3, url:"http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyiAJYdkAAAznnkz53A336.png" , content:"舞台剧"},
            {id:4, url:"http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUzCANA78AAAuNmAUVOY761.png" , content:"音乐剧"},
            {id:5, url:"http://image.juooo.com/group1/M00/02/45/rAoKNVvFUzmASY4pAAAm76AQAHw370.png" , content:"儿童"},
            
        ],
         dataBottom:[
            {id:1, url:"http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png" , content:"演出日历"},
            {id:2, url:"http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png" , content:"聚待汇"},
            {id:3, url:"http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png" , content:"学社专区"},
            {id:4, url:"http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png" , content:"欢聚橙卡"},
           
            
        ]
       

   }

      

   
},

  
};
</script>
<style lang="scss">
 .app-nav-top{
    margin: 0.2667rem 0.3333rem  0 0.3333rem;
    padding: 0.36rem 0;
    display: flex;
    justify-content : space-around;
    border-radius: 0.1333rem;
    box-shadow: rgba(178, 178, 178, 0.1) 0.0667rem 0.0667rem 0.1333rem 0rem;
    font-size: 0.3733rem;
    color: #666;
    .app-nav-top-item{
         text-align:center;
        img{
            width:1.4rem;
        }
        p {
            width:1.3333rem;
           
             color: #333;
        }
    }
 }
.app-nav-bottom{
    padding: 0.5333rem 0.3333rem;
    display: flex;
    justify-content: space-between;
    .app-nav-bottom-item{
        position:relative;
            color: #fff;
            img{
                border-radius: 0.21333rem;
                vertical-align: middle;
                width: 2.1733rem;
            }
            p{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                text-align: center;
                line-height: 1.3333rem;
                font-size: 0.3733rem;
                color: #fff;
                z-index: 99;
            }
    }
}






</style>




