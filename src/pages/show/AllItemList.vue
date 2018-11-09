<template>
    <div class="all_items">
        <div class="items_wrap">
            <show-items v-for= '(item,i) in shows' :key="i" :info = 'item'></show-items>
          
        </div>
    </div>
</template>
<script>

// import ajax from '../../util/axios'
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
    async created(){   //先执行一次 可以封装一下
         let result = await this.$http({
                url: '/ju/Show/getShowList',
                method:'post',
                headers: {
                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: {
                    city_id: -1,
                    category: JSON.parse(this.category),
                    keywords: "",
                    activity_id: 0,
                    sort_type: 0,
                    page: 1
                },
                transformRequest: function(obj) {  
                    var str = [];  
                    for (var p in obj) {  
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
                    }  
                    // console.log(obj)  data
                    return str.join("&");  
                }

                
            })
        
            this.shows = this.shows.concat(result.list)
            
    },

    watch: {
        immediate: true,
		//进入立即执行一次

        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route' (to, from) {
            
            this.shows = [] // 清空当前的数据
            // this.hasMore = true // 重新更多
            this.page = 1 // 重置页数
            this.getShows()
           
        }
     
    },
    methods: {
        async getShows () {
            // 取到路由带过来的参数 
        let routerQruerys = this.$route.query.category
        // 将数据放在当前组件的数据内
        this.category = routerQruerys
      
        // if ( !this.hasMore ) return false;
            let result = await this.$http({
                url: '/ju/Show/getShowList',
                method:'post',
                headers: {
                     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: {
                    city_id: -1,
                    category: JSON.parse(this.category),
                    keywords: "",
                    activity_id: 0,
                    sort_type: 0,
                    page: 1
                },
                transformRequest: function(obj) {  
                    var str = [];  
                    for (var p in obj) {  
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
                    }  
                    // console.log(obj)  data
                    return str.join("&");  
                }  
            })
        
            this.shows = this.shows.concat(result.list)
            
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
