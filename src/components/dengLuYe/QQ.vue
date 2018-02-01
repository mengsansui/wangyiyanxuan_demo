<template>
    <div class="QQ">
        <div class="QQ_logo">
            <img src='../../../Appimg/QQ_logo.png' alt='logo' />
            <span>登录</span>
            <p>亿万用户已选择QQ账户登录应用</p>
            <div class="QQ_D">
                <input type="text" placeholder="支持QQ号/邮箱/手机号登录">
                <i></i>
                <input type="text" placeholder="密码">
                <i></i>
                <button>登录</button>
            </div>
            <div class="QQ_quan">
                <ul>
                    <p>网易严选将获得以下权限:</p>
                    <li>
                        <img src="../../../Appimg/necessary.png" alt="小箭头">
                        <span>访问你的详细资料 （必选）</span>
                    </li>
                    <li>
                        <img src="../../../Appimg/necessary.png" alt="小箭头">
                        <span>访问你的基础资料 （必选）</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "QQ",
    data () {
        return {
            
        };
    }
}
</script>
    
<style lang="css" scoped>
   .QQ_logo{
       padding: 0.4775rem 0 0.5305rem 0.5305rem;
   }
   .QQ_logo img{
       width: 2.6525rem;
       height: 1.140584rem;
       float: left;
   }
   .QQ_logo span{
       font-size: 0.8488rem;
       display: block;
       margin-top: -0.0796rem;
       margin-left:  2.9178rem;
   }
    .QQ_logo p{
        margin-top: 0.2653rem;
    }
    .QQ_D {
        width: 100%;
    }
    .QQ_D input{
        width: 8.488064rem;
        height: 1.458886rem;
        margin-top: .397878rem;
        border: none;
    }
    .QQ_D i{
        display: block;
        width: 8.488064rem;
        height: .026525rem;
        border-bottom: 1px solid #e5e5e5;
    }
    .QQ_D button{
        width: 8.488064rem;
        margin: .530504rem 0;
        border-radius: 0.1061rem;
        line-height: 1.061rem;
        font-size: 0.4775rem;
        text-align: center;
        background-color: #0e98cb;
        border: .026525rem solid #0e98cb;
        color: #fff;
    }
    .QQ_quan img{
        width: 0.2785rem;
        height: 0.1989rem;
        position: absolute;
        top: 0.3979rem;
        left: .397878rem;
    }
    .QQ_quan span{
        font-size: 0.3183rem;
        display: inline-block;
        margin-left: 1.061rem;
    }
    .QQ_quan li {
        width: 8.435013rem;
        height: .928382rem;
        line-height: .928382rem;
        border: .026525rem solid #e5e5e5;
        border-radius: 0.1061rem; 
        color: #8b8b8b;
        position: relative;
    }
    .QQ_quan li:nth-of-type(2){
        border-top: none;
    }
    .QQ_quan p{
        margin-bottom: 0.2653rem; 
    }
</style>