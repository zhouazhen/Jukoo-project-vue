<template>
    <div class="all_items">
        <div class="items_wrap">
            <show-items v-for= '(item,i) in shows' :key="i" :info = 'item'></show-items>
        </div>
    </div>
</template>
<script>

import ajax from '../../util/axios'
import ShowItems from '@c/common/app-show/show-items.vue'
export default {
    components: {
        ShowItems
    },
   
    data () {
        return {
            shows : [],
            category: 0,
            // hasMore: true
        }
    },
    watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      
        '$route': { 
            immediate: true,
            handler () {
                this.shows = [] // 清空当前的数据
                // this.hasMore = true // 重新更多
                this.page = 1 // 重置页数
                this.getShows()
            }
        }
    },
   
    methods: {
        async getShows () {
            // 取到路由带过来的参数 
        let routerParams = this.$route.query.category
        // 将数据放在当前组件的数据内
        this.category = routerParams
        console.log(this.category)
            let result = await ajax({
                url: '/ju/Show/getShowList',
                method:'post',
                data: {
                    city_id: -1,
                    category: JSON.parse(this.category),
                    keywords: "",
                    activity_id: 0,
                    sort_type: 0,
                    page: 1
                }
                
            })
        
            this.shows = this.shows.concat(result.data.data.list)
            
        }
    },


}
</script>


<style lang="scss">
    .items_wrap{
        margin-top: .266667rem;
        padding-left: .4rem;
        padding-right: .4rem;
        background-color: #ffffff;
    }
</style>
