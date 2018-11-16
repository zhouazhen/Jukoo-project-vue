<template>
<div>
    <header class="search-header">
        <div class="left">
            
            <router-link tag="span" to="/home" class="back"><i class="fa fa-chevron-left"></i></router-link>
        </div>
        <div class="right1">
        <router-link tag="div" to="/search" class="right">
           <a class="search" href="#"><i class="fa fa-search s"></i>演出/艺人/场馆</a>
               <span class="title">搜索</span>
          
        </router-link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        </div>
    </header>
    <div class = "key"> 
        <p>大家都在找</p>
    <div class="key-list">
          <router-link 
          
            
           tag="span"
           :to="{path:'/show', query: {keyword: item.key}  }"
            v-for= "item in data"
             :key="item.id"
            @click.native='test2(item)'
             >{{item.title}}
             </router-link>
        </div>
    </div>
    <div class="history">
        <h6>最近搜索</h6>
        <div><span>猫</span><i class="fa fa-times"></i></div>
    </div>
 </div>
</template>
<script>
import axios from "axios";
export default {
    data:function(){
        return{
            data:[
                {id:1,title:"贝隆夫人",key:"贝隆夫人"},
                {id:2,title:"《猫》",key:"《猫》"},
                {id:3,title:"魔戒",key:"魔戒"},
                {id:4,title:"小野丽莎",key:"小野丽莎"},
                {id:5,title:"V.K克",key:"V.K克"},
                {id:6,title:"三体",key:"三体"},
                {id:7,title:"周慧敏",key:"周慧敏"},
                {id:8,title:"王力宏",key:"王力宏"},
                {id:9,title:"陈慧娴",key:"陈慧娴"},

            ],
            list:[]
        }
    },

//   created:function(){
          
//             console.log(localStorage.getItem("keyword"),3333333333333333)
//         },

    methods:{
       
       
      
        test2:function(item){//存储搜索的关键字
           this.list.push({
                        id: item.id ,
                        key: item.key,
                    })
          console.log(this.list)
        },
    },
          watch: {
                list: {
                    deep: true,
                    handler () {
                        // 应该将新的todos存放到localstorage
                       // localStorage.todoid = this.todoid
                     alert(333333)
                        localStorage.todos = JSON.stringify(this.list)
                        
                    }
                }
            },
          
                // removeTodoItem (id) {
                //     this.todos = this.todos.filter(item => item.id !== id)
                // }
            

      
         
      
      
    
};
</script>
<style lang="scss" >
    .search-header{
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
            color:rgb(153, 153, 153);
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

    .key{
        position:relative;
        top:1.3333rem;
        p{
            padding: 0.5333rem 0.4rem 0;
            font-size:0.32rem;
            line-height: 0.32rem;
            color: #999999;
        }
    
    .key-list{
        display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.4rem 0.2667rem 0;
    font-size: 0;
        color: #666;
        span{
            height: 0.8rem;
            line-height: 0.8rem;
            margin: 0 0.1333rem 0.2667rem;
            padding-left: 0.5067rem;
            padding-right: 0.5067rem;
            background-color: #f7f7f7;
            border-radius: 0.0667rem;
            font-size: 0.3467rem;
            color: #212121;
        }

    }
    }
    .history{
        position:relative;
        top:1rem;


        h6{
            padding: 0.5333rem 0.4rem 0;
            font-size: 0.32rem;
            line-height: 0.32rem;
            color: #999999;

        }   
    div{
            display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.3333rem;
    line-height: 1.3333rem;
    padding-left: 0.5rem;
    border-bottom: 1px solid #e0e0e0;
    font-size: 0.3467rem;
    color: #333333;
    span{
       color: rgb(51, 51, 51);
       font-size:0.3467rem;
       line-height:1.3333rem;

    }
    i{
           
    line-height: 1.3333rem;
    font-size: 0.5rem;
    font-weight: normal;
    color: #c2c2c2;
    text-align: center;
    position:absolute;
    right:0.1333rem
    }
    }
    }
     
</style>


 <router-link tag="div" :to="{path:'/show', query: {category: item.category} }" class = "app-nav-top-item"  v-for = "item in data" :key  = "item.id ">