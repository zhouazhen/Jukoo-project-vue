<template>
    <div class="ticket">
        <nav-bar></nav-bar>
        <spot-select v-for="item in type" :key = 'item.id' :info = 'item'>
            <div class="title">{{item.title}}</div>
        </spot-select>
        <sele-footer></sele-footer>
    </div>
</template>
<script>
import NavBar from './navBar.vue'
import SpotSelect from './spotSelect.vue'
import SeleFooter from './seleFooter.vue'


export default {
    data() {
        return {
            type: [
                {id: 1, title: '选择场次'},
                {id: 2, title: '选择票价'},
            ]
        }
    },
    components: {
        NavBar,
        SpotSelect,
        SeleFooter
    },
    created() {

    }
}
</script>
<style lang="scss">
.app-footer{
    // display: none;
}
html{
    background: #f6f6f6;
    color: #666;
}
.ticket{
    margin-top: 1.5rem;
.row{
    width: 100%;
    padding: .466667rem .266667rem .4rem;
    margin-bottom: .266667rem;
    background: #fff;
    .title{
        font-size: .373333rem;
        color: #666;
        margin-bottom:.4rem;
    }
    .item{
        background: #ccc;
        width: 2.933333rem;
        margin-bottom: .133333rem;
        .item{
            color: #fff;
            display:inline-block;
            height: 1.333333rem;
            border-radius: .133333rem;
        }
        .item.active{
            background: #ff7919;
        }
    }
  }
}


</style>


