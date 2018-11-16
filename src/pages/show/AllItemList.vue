<template>
    <div ref="root" class="all_items">
        <div  class="items_wrap">
            <show-items v-for= '(item,i) in shows' :key="i" :info = 'item'></show-items>
          
        </div>
    </div>
</template>
<script>
// import ajax from '../../util/axios'
import ShowItems from "@c/common/app-show/show-items.vue";
import axios from  "axios"
import qs from 'qs';
export default {
  components: {
    ShowItems
  },

  data() {
    return {
      shows: []
    };
  },
 
  watch: {
    '$route.query': {
        immediate: true, 
        handler () {
          this.shows = []; // 清空当前的数据
          // this.hasMore = true // 重新更多
          this.page = 1; // 重置页数
          this.getShows();
        }
    }

  },
beforeCreate(){
   axios({  //将关键字传入到列表中
      method: "post",
      url: "/ju/Show/setKeywordsList",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: qs.stringify({
         
         key:this.$route.query.keyword 
      }),
    }).then(function(res) {
      // that.imgs=res.data.data
      // that.hasnum=true
     console.log(res)
    //   that.data = res.data.data.secKillInfo;
     
    })
  
},
  methods: {
    async getShows() {
      // 取到路由带过来的参数

      let { category, keyword } = this.$route.query
      // if ( !this.hasMore ) return false;
      let result = await this.$http({
        url: "/ju/Show/getShowList",
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        data: {
          city_id: -1,
          category: category || 0,
          keywords: keyword || '',
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
      });

      this.shows = this.shows.concat(result.list);
    }
    
  }
};
</script>


<style lang="scss">
.items_wrap {
  margin-top: 0.266667rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  background-color: #ffffff;
}
</style>
