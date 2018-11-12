<template>
    <div ref="root" class="all_items">
        <div  class="items_wrap">
            <show-items v-for= '(item,i) in shows' :key="i" :info = 'item'></show-items>
          
        </div>
    </div>
</template>
<script>

// import ajax from '../../util/axios'
import ShowItems from '@c/common/app-show/show-items.vue'
import scroll from '@util/scroll'
export default {
    components: {
        ShowItems
    },
   
    data () {
        return {
            shows : [],
            page: 1,
            category: 0,
            hasMore: true
        }
    },
    async created(){   
         this.$router.push({
            path: '/show', query:{category : 0}
        });            
    },

    watch: {
        // immediate: true,
		//进入立即执行一次

        // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
        '$route' (to, from) {
            
            this.shows = [] // 清空当前的数据
            this.hasMore = true // 重新更多
            this.page = 1 // 重置页数
            this.getShows()
           
        }
     
    },
    methods: {
        backTop () {
            this.scroll.scrollTo(0,0,200)
        },
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
                    page: this.page
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
             if ( result.total - this.page*20 <= 0 ) {
                this.hasMore = false
            }else {
                this.page ++ // 有更多的话，页数增加
            } 
            
        }
    },
    mounted () {
        this.scroll = scroll({
            // el: this.$el
            el: this.$refs.root,
            handler: this.getShows.bind(this),
            onscroll: (y) => {
                this.$emit('update:isBackShow', !!(y < -200))
            }
        })
        
    }

}
</script>


<style lang="scss">
.all_items{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 200;
    left: 0;
    .items_wrap{
        margin-top: .266667rem;
        padding-left: .4rem;
        padding-right: .4rem;
        background-color: #ffffff;
    }
}
    
</style>
