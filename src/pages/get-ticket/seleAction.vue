<template>
    <div class="sele-action a-footer">
        <div class="action-left">
            <span class="sele-num js-sele-num">
                <i class="fa fa-chevron-circle-up"></i>
                <span class="num">2</span>张
            </span>
            <span class="line"></span>
            <span class="sele-price js-sele-price">
                <i class="fa fa-yen"></i>
                <span>190</span>
            </span>
        </div>
        <span class="sele-confirm js-buy-confirm " id="sureBuyIt">确定</span>            
    </div>
</template>
<style lang="scss">
.sele-action {
    font-size: .453333rem;
    .action-left{
        width: 4.666667rem;
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        span{
            margin-left: .266667rem;
        }
    }
    .sele-confirm{
        width: 4rem;
        text-align: center;
        background: #ff7919;
        color: #fefefe;
    }
}
</style>

