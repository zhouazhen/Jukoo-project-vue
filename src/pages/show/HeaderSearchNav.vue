<template>
    <div class="search-nav">
        <ul>
            <router-link :to = "{path:'/show', query: {category: item.category} }" tag = 'li' v-for= '(item,i) in types' :key="i" >{{item.title}}</router-link>
             <!-- <li  @click = "sendQuerys" v-for= '(item,i) in types' :key="i" :category='item.category'>{{item.title}}</li> -->
        </ul>
         
    </div>
</template>
<script>


export default {

    data() {
        return {  
            types: [
            
                {id: 1, title: '全部',category: 0},
                {id: 2, title: '演唱会', category: 35},
                {id: 3, title: '音乐会', category: 36},
                {id: 4, title: '话剧歌剧', category: 37},
                {id: 5, title: '儿童亲子', category: 38},
                {id: 6, title: '音乐剧', category: 79},
                {id: 7, title: '舞蹈芭蕾', category: 86},
                {id: 8, title: '戏曲综艺', category: 91},
                {id: 9, title: '展览', category: 99}

            ],
        }

    },
//     methods: {
//       sendQuerys () {
//         // console.log(this.types)
//         this.$router.push({
//             path: '/show/showsLibrary',
          
//             query: {
//                 num: 1,
//                 category: category  //怎么获得
//             }
//         })
//       }
//    }
}
</script>
<style lang="scss">
.search-nav{
    height: .92rem;
    font-size: 0;
    overflow: hidden;
    margin-left: -0.4rem;
    margin-right: -0.4rem;
    ul{
        height: 1rem;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        li{
            display: inline-block;
            height: .92rem;
            line-height: .826667rem;
            padding-left: .373333rem;
            padding-right: .373333rem;
            font-size: .32rem;
            color: #666666;
            text-align: center;
            border-bottom: .04rem solid transparent;
            white-space: nowrap;
            &.active{
                    font-weight: bold;
                    color: #ff7919;
                    border-bottom: .04rem solid #ff7919;
                }
            }
        }
        li:first-child{
            margin-left: .4rem;
        }
    
}
</style>


