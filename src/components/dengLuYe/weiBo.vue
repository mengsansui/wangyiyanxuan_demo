<template>
    <div class="weiBo">
      <div class="Wei_top">
         <img src="../../../Appimg/a_03.png" alt="背景">
         <div class="Wei_logo">
             <img src="../../../Appimg/weibologo.png" alt="weilogo">
             <button>注册</button>
         </div>
         <div class='bo_Q'>
             <p>权限 网易严选 访问你的微博账号</p>
             <input type="text" placeholder="请用微博账户登录">
             <input type="text" placeholder="请输入密码">
             <router-link to='/ChengGong'>
                <button>登录</button>
             </router-link>
         </div>
      </div>
      <router-view></router-view>
    </div>
</template>
    
<script>
export default {
    name: "WEIBO",
    data () {
        return {
             
        };
    }
}
</script>
    
<style lang="css" scoped>
    .weiBo{
        height: 17.6923rem;
        background-color: #ececec;
    }
    .Wei_top{
        margin-top: -0.2918rem;
       
    }
    .Wei_logo {
        display: block;
        height: 1.6711rem;
        max-width: 7.9576rem;
        margin: 0 auto;
        text-align: left;
        position: relative;
    }
    .Wei_logo img{
        width: 3.103448rem;
        height: .928382rem;
        margin: 0.3979rem 0 0 0.2653rem;
    }
    .Wei_logo button{
        min-width: 1.8037rem;
        height: .795756rem;
        box-shadow: inset 0 1px 0 #fff;
        color: #333;
        font-style: normal;
        text-shadow: 0 0.0265rem 0 #fff;
        margin-left: 2.6525rem;
        margin-top: 0.4775rem;
    }
    .bo_Q{
        width: 9.416446rem;
        height: 5.543767rem;
        background: #fff;
        border-radius: 0.2122rem;
        margin: 0 auto;
        box-shadow: 0 0 0.0796rem rgba(0,0,0,0.2);
        -webkit-box-shadow: 0 0 0.0796rem rgba(0,0,0,0.2);
        max-width: 7.9576rem;
        text-align: left;
    }
    .bo_Q p{
        font-size: 0.3714rem;
        padding: 0.5305rem 0.5305rem 0.2653rem;
    }
    .bo_Q input {
        border: 0.0265rem solid #bebebe;
        border-radius: 0.0796rem;
        /* width: 100%; */
        line-height: 0.8753rem;
        height: 0.8753rem;
        margin: 0 0 0.2653rem 0.5305rem;
        padding: 0 0.2653rem;
        box-shadow: inset 0.0265rem 0.0265rem 0.0531rem 0 rgba(0,0,0,0.1);
        font-size: 0.4775rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 0.504rem;
    }
    .bo_Q button{
        width: 6.366rem;
        height: 0.9284rem;
        border: 1px solid #eb192d;
        border-bottom-color: #be1e32;
        margin-left:  0.5305rem;
        border-radius: 0.1061rem;
        background-color: #eb192d;
        color: #fff;
    }
</style>