<template>
    <div class="search-nav">
        <ul>
             <li  @click = "type = item.type" v-for= '(item,i) in types' :key="i">{{item.title}}</li>
        </ul>
         <show-content ></show-content>
    </div>
</template>
<script>
import showContent from  './AllItemList.vue'

export default {
  
    components: {
        showContent
    },
    
    data() {
        return {
            types: [
                // {title: '全部'},
                // {title: '演唱会'},
                // {title: '音乐会'},
                // {title: '话剧歌剧'},
                // {title: '儿童亲子'},
                // {title: '音乐剧'},
                // {title: '舞蹈芭蕾'},
                // {title: '戏曲综艺'},
                // {title: '展览'},
                {id: 1, title: '全部',category: 0},
                {id: 2, title: '演唱会', category: 35},
                {id: 3, title: '音乐会', category: 36},
                {id: 4, title: '话剧歌剧', },
                {id: 5, title: '儿童亲子', }

            ],

        }
    }
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


