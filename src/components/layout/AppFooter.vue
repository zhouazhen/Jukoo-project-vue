<template>
    <footer class="app-footer">
        <router-link  
            active-class="active"
            v-for="item in navs"
            :key="item.id"
            tag='div'
            :to = "item.path"
            
        >
         <div  class="app-footer_item"  >
           
            <i  :class="item.img"></i>
             <p >{{item.title}}</p>
         </div>
         </router-link>
    </footer>
    
</template>
<script>
export default {
    data(){
        return {
             navs: [
                { id: 1, title: '首页', img:'fa fa-home ', path: '/home' },
                { id: 2, title: '演出库',img:'fa fa-modx ', path: '/show'},
                { id: 3, title: '我的', img:'fa fa-heart',path: '/mine'}
            ]
        }
    }
};
</script>
<style lang="scss" >
    .app-footer{
        background-color: #fff;
        height:1.3514rem;
        width:100%;
        display:flex;
        justify-content: space-around;
        .app-footer_item{
            
            margin:0.2rem 0;
            .fa{
                font-size: 0.5811rem;
                
               
            }
            p{
                text-align: center;
                font-size: 0.2973rem;
                color:#333
            }
        }
         .active div { color:gold }
    }
</style>




                       
