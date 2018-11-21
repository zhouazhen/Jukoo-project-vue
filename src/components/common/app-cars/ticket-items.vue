<template>
    <div id="ticket_items" > 
        <div class="detail-content">
            <div class="img_box">
                <img :src="data.pic" alt="" >
            </div>
            <div class="detail_box">
                <p class="title"> {{data.show_name}}</p>
                <p class="time"><span>时间：</span>{{data.display_show_time}}</p>
                <p class="place">
                    <span>地点：</span> "["<span>{{data.city_name}}</span>"]" {{data.venue_name}}
                </p>
            </div> 
        </div>
        
        <div class="detail-footer">
            <div>
                <span>合计&nbsp;(&nbsp;{{info.allNumber}}&nbsp;张)&nbsp;：</span>
            </div>
            <div>
                <span class="fs0">￥</span>
                <span class="fs0">{{info.allPrice}}</span>
                <span ><i class="fa fa-chevron-circle-down"></i></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['info'],
    data() {
        return {
            data: JSON.parse(localStorage.getItem("item")) 
        }
    },
  
}
</script>
<style scoped lang="scss">
#ticket_items{
    .detail-content{
        display: flex;
        padding-top: .2rem;
        padding-bottom: .2rem;
        border-bottom: 1px solid #e6e6e6;
        .img_box{
            position: relative;
            width: 2rem;
            border: 1px solid #ebebeb;
            img{
                width: 100%;
                height: 100%;
                border: 1px solid transparent;
            }
        }
        .detail_box{
            flex: 1;
            padding-left: .4rem;
            padding-top: .066667rem;
            p{
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .title{
                    min-height: .56rem;
                    max-height: .96rem;
                    line-height: .506667rem;
                    font-size: .44rem;
                    color: #262626;
                    margin-bottom: .4rem;
            }
                
            .time,.place{
                    
                    height: .466667rem;
                    line-height: .466667rem;
                    font-size: .35rem;
                    color: #999999;
            }
            .price{
                color: #ff7919;
                margin-top: .333333rem;
                .fs0{
                    margin-right: .106667rem;
                    font-size: .38rem;
                    line-height: .426667rem;
                }
                .fs{
                    font-size: .426667rem;
                    line-height: .426667rem;
                }
                .fs1{
                    margin-right: .053333rem;
                    margin-left: .053333rem;
                }

            }

        }
        
    }
    .detail-footer{
        display: flex;
        height: 1.333333rem;
        flex-direction:row;
        justify-content: space-between;
        line-height: 1.333333rem;
        span{
            margin-right: .4rem;
            font-size:  0.46rem;
            &.fs0{
                color: #ff7919;
            }     
        }
    }
}
</style>


