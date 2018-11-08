<template>
    <div class="search-bar">
        <router-link class="left" tag = "li" to = "/home">
            <span class="city">全国</span>
            <i class="fa fa-angle-down"></i>
        </router-link>    
        <router-link class="center" tag = 'li' to = '/home'>
            <i class="fa fa-search"></i>
            <span>搜索演出，艺人或场馆</span>
        </router-link>    
        <router-link class="right" tag = 'li' to = '/home'>
            <i class="fa fa-sort-amount-desc"></i>
        </router-link>    
    </div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss">
.search-bar {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.173333rem;
    li{
        float: left;
        height: 1.173333rem;
        line-height: 1.173333rem;
        &.left{
            min-width: 1.6rem;
            .city{
                    flex: 1;
                    font-size: .373333rem;
                    color: #212121;
                    padding-left: .093333rem;
                    padding-right: .093333rem;
            }
            i{
                width: .32rem;
                font-size: .32rem;
                color: #999999;
            }
        }
        &.center{
            flex: 1;
            height: .746667rem;
            line-height: .746667rem;
            background-color: #f5f5f5;
            border: 1px solid #ebebeb;
            border-radius: .666667rem;
            font-size: .32rem;
            color: #999999;
            text-align: center;
            i{
                width: .32rem;
                height: .32rem;
                font-size: .32rem;
                color:#b2b2b2;
                margin-right: .106667rem;
            }

        }
        &.right{
            width: .88rem;
            text-align: right;
            color: #666666;
            i{
                color: #808080;
            }
        }
    }
}
</style>

