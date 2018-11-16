<template>
    <div class="item spot-select js-session-list">
        <div class="item" @click="changeActive" :class = "{active: flag == true }">
            <span class="s-date">2019.01.01</span>
            <span class="s-time">周二 20:00</span>
        </div>
    </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex'
export default {
    // data() {
    //      return {
    //          data: localStorage.getItem("item")
    //      }
    // },
    computed: {
        flag: function() {
            return this.$store.state.car.slot     //获取选中状态
        },
        // show: function() {
        //     return this.getFlag().getFlag    //两者选择状态的返回值  true false
        // }
    },
    // watch: {
    //     show(val){   
           
    //         if(val){
                
    //             this.updateGoods({     //两者同时选中,存入goods
    //                 data: this.data
    //             })
    //         }else{
    //             this.removeGoods({                    //否则删除
    //                 data:this.data.id
    //             })    
    //         }
    //     }
    // },
    methods: {
        ...mapMutations({
            slotSelect: 'car/slotSelect',
            
        }),
        ...mapGetters({
            getFlag: 'car/getFlag'
        }),
        changeActive() {
            this.slotSelect()      //改变选中状态
        }
    },
    created: function() {
        
    }
}
</script>

<style lang="scss">
.spot-select{
    .item{
        span{
            display: block;
            text-align: center;
            height: .533333rem;
            padding-top: .133333rem;
           
        }
    }
}
</style>

