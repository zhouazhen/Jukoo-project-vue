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
    // props: ['type'],

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
        // type: {
        //     immediate: true,
        //     handler () {
        //         this.shows = [] // 清空当前的数据
        //         // this.hasMore = true // 重新更多
        //         this.page = 1 // 重置页数
        //         this.getShows()
        //     }
        // }
 
    },
   
    methods: {
        async getShows () {
            
            let result = await ajax({
                url: '/ju/Show/getShowList',
                data: {
                    city_id: -1,
                    category: 0,
                    keywords: "",
                    activity_id: 0,
                    sort_type: 0,
                    page: 1
                }
            })
        
            this.shows = this.shows.concat(result.data.data.list)
            
        }
    }


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
