<template>
    <div class="item spot-select js-session-list">
        <div class="item" @click="changeActive" :class = "{active: flag == true }">
            <span class="s-date">{{data.display_show_time}}</span>
            <span class="s-time">周二 20:00</span>
        </div>
    </div>
</template>
<script>
import { mapMutations,mapGetters } from 'vuex'
export default {
    data(){
        return {
            data: JSON.parse(localStorage.getItem("item"))
        }
    },
    computed: {
        flag: function() {
            return this.$store.state.car.slot     //获取选中状态
        },
       ...mapGetters({
            getFlag: 'car/getFlag',
        })
    },
    methods: {
        ...mapMutations({
            slotSelect: 'car/slotSelect',
            updateGoods: 'car/updateGoods',
        }),

        changeActive() {
            this.slotSelect()      //改变选中状态
            setTimeout(() => {
                this.updateGoods({     //把带有选中信息的price存入goods
                    data: this.getFlag
                })
            },0)
        }
    },
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

