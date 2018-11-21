<template>
    <div class="count-down-content">
        <p>剩余支付时间</p>
        <!-- 倒计时 -->
        <div class="count-down-wrap right js-countdown" time="7191000">
            <span class="count-rect count-hours js-h">{{hours}}</span> 
            <span class="vertical-middle">:</span> 
            <span class="count-rect count-minutes js-m">{{minutes}}</span> 
            <span class="vertical-middle">:</span> 
            <span class="count-rect count-second js-s">{{seconds}}</span>
        </div>
        <!-- 倒计时 END -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                 hours:2,
                minutes: '00',
                seconds: '00',
            }    
        },
        mounted () {
            this.countdowm();
        },
        methods: {
           countdowm(){
                var allTime = 7200000 
                var timer = setInterval(() => {
                    
                    allTime -- ;
                    if (allTime > 0) { 
                        console.log('time')
                    var h = Math.floor(allTime/1000/60/60%24);  
                    var m = Math.floor(allTime/1000/60%60);  
                    var s = Math.floor(allTime/1000%60);    
                    this.hours = h < 10 ? '0' + h : h;
                    this.minutes = m < 10 ? "0" + m : m;
                    this.seconds = s < 10 ? '0' + s : s; 
                    }else{
                        clearInterval(this.timer);
                        //这里写提交改变失效状态的mutation，还没写
                    } 
                },1000); 
            }
        }
    }
</script>
<style lang="scss">
.count-down-content {
    height: 1.866667rem;
    font-size: .426667rem;
    padding-top: .426667rem;
    text-align: center;
    background-color: #fff5ee;
    div{
        font-size: .426667rem;
        color: #ff7919;
    }
}
</style>

