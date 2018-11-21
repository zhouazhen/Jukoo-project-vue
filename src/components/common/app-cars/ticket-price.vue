<template>
    <div id="grid">
        <div class="grid-inner">
            <ul class="list-block form-list f-28">
                <li class="list-item">
                    <div class="flex-space-between">
                        <span>商品合计：</span>
                        <div class="right">
                            <span class="c-333">￥&nbsp;{{info.allPrice}}</span>
                        </div>
                    </div>
                </li>

                <li class="list-item">
                    <div class="flex-space-between">
                        <span>运费合计：</span>
                        <div class="right">
                            <span class="c-333">￥<span id="js-shipping-free">0.00</span></span>
                        </div>
                    </div>
                </li>
                <li class="list-item">
                    <div class="flex-space-between">
                        <span>优惠：</span>
                        <div class="right">
                            <span class="c-333">-￥<span id="js-activity-sale-text">0.00</span>
                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-item js-last-list-tiem">
                    <div class="flex-space-between">
                        <span>电子票立减：</span>
                        <div class="right">
                            <span class="c-333" id="js-shippingid-money">￥0.00</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: ['info']
}
</script>

<style lang="scss">
#grid{
    font-size: .373333rem;
    margin-top: .293333rem;
    width: 100%;
    background-color: #fff;
    .grid-inner {
        color: #333;
        margin-left: .426667rem;
        margin-right: .4rem;
        .list-block {

            font-size: .373333rem;
            .list-item {
                height: 1.333333rem;
                line-height: 1.333333rem;
                border-bottom: 1px solid #f2f2f2;
                .flex-space-between {
                    display: flex;
                    flex-direction:row;
                    justify-content: space-between;
                    .right{
                        display: flex;
                        flex-shrink: 0;
                        flex-wrap: nowrap;
                        align-items: center;
                       .c-333 {
                            color: #333;
                        }
                    }
                }   
            }

        }
    }   
}
</style>

