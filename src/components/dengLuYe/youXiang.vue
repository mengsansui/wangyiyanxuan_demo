<template>
    <div class="email">
        <div class="mine_top">  
            <router-link to='/home'>
                <img src="../../../Appimg/top_06.png" alt="回到主页" style="margin-left:   .265252rem">
            </router-link>
             <h2><img src="../../../Appimg/top_02.png" alt=""></h2>
            <div class="sou_li">
                <ul>
                    <router-link to='/home'>
                        <li><img src="../../../Appimg/top_13.png" alt="搜索"></li>
                    </router-link>
                    <router-link to='/home'>
                        <li><img src="../../../Appimg/top_03.png" alt="购物车"></li> 
                    </router-link> 
                </ul>
            </div>  
        </div>
        <div class='FS'>
          <input type="text" placeholder="邮箱账号">
          <i></i>
          <input type="text" placeholder="密码">
          <i></i>
          <button>登录</button>
          <p><span  style=' float: left;'>注册账号</span> <span style=' float: right;'>忘记密码</span></p>
          <button style='background: white;  margin-top: 2.6525rem; '>其他登录方式</button>
        </div>
        <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "email",
    data () {
        return {
           
        };
    }
}
</script>
    
<style lang="css" scoped>
     .email {
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
    .FS{
        width: 100%;
        text-align: center;
        margin-top: 1.061rem; 
    }
    .FS input{
        width: 8.8419rem;
        height: 1.27321rem;
        font-size: 0.4rem;
        line-height: 0.6rem;
        margin: 0.39rem 0;
        padding-left: 0;
        -webkit-tap-highlight-color: transparent;
        letter-spacing: normal;
        border:none; 
    }
    .FS button{
        width: 8.8419rem;
        height: 1.28rem;
        font-size: 0.4rem;
        line-height: 1.28rem;
        border-radius: 3px;
        color: #cb7a7a;
        position: relative;
        background: #b4282d;
        text-indent: -9px;
        margin-top : 0.6631rem;
        border: 1px solid  #b4282d;
    }
    .FS i{
        display: block;
        width: 8.8419rem;
        height: 0.0265rem;
        margin: 0 auto;
        margin-top: -0.3979rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .FS p{
        width:  8.8419rem;
        height: 0.7958rem;
        line-height: 0.7958rem;
        margin: 0 auto;
        margin-top: 0.2653rem;
    }
    .FS p span{
        display: inline-block;
        width: 2.122rem;
        height: .424403rem;
        font-size: 0.4244rem;
        color: #7f7f7f;
    }
</style>