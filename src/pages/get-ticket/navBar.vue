<template>
     <header class="navbar">
			<div class="navbar-inner navbar-on-center">
				<div class="left">
					<a href="javascript:history.go(-1);" class="link">
						<i class="fa fa-angle-left"></i>
					</a>
				</div>
				<div class="center">
					{{info}}
				</div>
				<div class="right">
				</div>
			</div>
		</header>
</template>
<script>

export default {
   props: ['info']    
}
</script>

<style lang="scss">
.navbar{
    margin: 0;
    border-bottom: 1px solid #e7e7e7;
    width: 100%;
    height: 1.173333rem;
    font-size: .453333rem;
    color: #212121;

    position: fixed;
    z-index: 500;
    left: 0;
    top: 0;
    background-color: #fdfdfd;
    .navbar-inner{
            display: flex;
            position: absolute;
            left: 0;
            top: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            
            justify-content: space-between;
           
            align-items: center;
            .left{
                    top: 0;
                    height: 1.173333rem;
                    line-height: 1.173333rem;
                    font-size: .266667rem;
                    a{
                            width: 1.6rem;
                            padding-left: .4rem;
                            height: 100%;
                            color: #333;
                            i{
                                font-size: .666667rem;
                            }
                    }
            }
    }
}
</style>

