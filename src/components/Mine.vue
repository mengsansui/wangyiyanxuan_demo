<template>
    <div class="mine">
        <div class="mine_top">  
            <router-link to='/home'>
                <img src="../../Appimg/top_06.png" alt="回到主页" style="margin-left:   .265252rem">
            </router-link>
             <h2><img src="../../Appimg/top_02.png" alt=""></h2>
            <div class="sou_li">
                <ul>
                    <router-link to='/home'>
                        <li><img src="../../Appimg/top_13.png" alt="搜索"></li>
                    </router-link>
                    <router-link to='/home'>
                        <li><img src="../../Appimg/top_03.png" alt="购物车"></li> 
                    </router-link> 
                </ul>
            </div>
        </div>
        <div class="Yi_img">
            <img src="../../Appimg/gelogo.png" alt="logo">
        </div>
        <div class="btn">
            <router-link to='/youXiang'>
                <button>网易邮箱账号登录</button>
            </router-link>
        </div>
        <div class="denglu">
            <div class="denglu_FS">
                <ul>
                    <router-link to='/home'>
                        <li><img src="../../Appimg/VX.png" alt="微信"> <span>微信</span></li>
                    </router-link>
                    <router-link to='/QQ'>
                        <li><img src="../../Appimg/QQ.png" alt="QQ"> <span>QQ</span></li>
                    </router-link>
                    <router-link to='/home'>
                        <li style="border-right: none;"><img src="../../Appimg/weiBo.png" alt="微博"> <span>微博</span></li>  
                    </router-link>              
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "mine",
    mounted(){
        document.documentElement.style.fontSize = innerWidth / 10 + "px";
        window.onresize = function() {
            document.documentElement.style.fontSize = innerWidth / 10 + "px";
        }
    }
}
</script>
    
<style lang="css" scoped>
    .mine {
        font-family: "Microsoft YaHei";
        font-size: 0.3183rem;
    }
    .mine_top{
        background-color: #fafafa;
        z-index: 1;
        width: 10rem;
        margin: auto;
        overflow: hidden;
        padding: 0 .21333rem 0 .32rem;
        height: 1.17333rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        -moz-justify-content: space-between;
        justify-content: space-between;
        position: relative;
    }
    .mine_top img{
        width: 0.6366rem;
        height: 0.5836rem;
    }
     .mine_top h2 img{
        width: 2.3873rem;
        height: 0.557rem;
        margin-left: .530504rem;
     }
    .sou_li li{
        float: left;
        margin-right: 0.4775rem;
    }
    .Yi_img{
         text-align: center;
         margin-top: 3.44rem;
         margin-bottom: 1.64rem;
    }
    .Yi_img img{
        width: 3.5538rem;
        height: 1.1936rem;
    }
    .btn{
        width: 100%;
         text-align: center;
    }
    .btn button{
        width: 8.885942rem;
        height: 1.30667rem;
        line-height: 1.30667rem;
        background: #B4282D;
        color: #fff;
        border-radius: .05333rem;
        font-size: .37333rem;
        border:1px solid #B4282D;   
    }
    .denglu{
        width: 100%;
    }
    .denglu_FS{
        padding: 0 .4rem;
        height: .53333rem
    }
    .denglu_FS ul li img{
        width: 0.5305rem;
        height: 0.5305rem;
    }    
     .denglu_FS ul li {
         float: left;
         width: 3.050398rem;
         height: 0.5305rem;
         text-align: center;
         margin-top: 2.122rem;
         color: #7F7F7F;
         border-right: 1px solid #7F7F7F;
        
     }
</style>