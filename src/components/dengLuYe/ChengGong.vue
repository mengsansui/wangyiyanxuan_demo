<template>
    <div class="chenggong">
        <div class="cheng_top">
            <img src="../../../Appimg/cheng.jpg" alt="背景">
            <div class="Cheng_logo">
                <img src="../../../Appimg/chneg2.png" alt="头像">
                <span>^_^捧场王</span></br>
                <span>普通用户</span>
            </div>
            <div class="Cheng_list">
                <ul>
                    <li v-for="product in productList" :key="product.id">
                        <img :src="product.productImg" alt="图片">
                        <span>{{ product.productName }}</span>
                    </li>
                </ul>
            </div>

            <div class="kong">
                <button>退出登录</button>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "chenggong",
    data () {
        return {
             productList: [
                { productImg: './../../../static/cheng1_19.png', productName: '我的订单'},
                { productImg: './../../../static/cheng1_24.png', productName: '周六一起拼'},
                { productImg: './../../../static/cheng1_03.png', productName: '售后服务'},
                { productImg: './../../../static/cheng1_06.png', productName: '优惠券'},
                { productImg: './../../../static/cheng1_33.png', productName: '我的红包'},
                { productImg: './../../../static/cheng1_29.png', productName: '优先购'},
                { productImg: './../../../static/cheng1_10.png', productName: '礼品卡'},
                { productImg: './../../../static/cheng1_26.png', productName: '积分中心'},
                { productImg: './../../../static/cheng1_22.png', productName: '会员俱乐部'},
                { productImg: './../../../static/cheng1_01.png', productName: '地址管理'},
                { productImg: './../../../static/cheng1_35.png', productName: '账号安全'},
                { productImg: './../../../static/cheng1_14.png', productName: '联系客服'},
                { productImg: './../../../static/cheng1_12.png', productName: '帮助中心'},
                { productImg: './../../../static/cheng1_08.png', productName: '意见反馈'}
            ]
        };
    }
}
</script>
    
<style lang="css" scoped>
    .cheng_top{
        width: 100%;
        position: relative;
        background-color: #ececec;
    } 
    .cheng_top img{
        width: 100%;
        height: 3.9788rem;
    }
    .Cheng_logo{
        width: 2.6525rem;
        height: 2.6525rem;
        position: absolute;
        top: .66313rem;
        left: .530504rem;
    }
    .Cheng_logo img{
        width: 2.6525rem;
        height: 2.6525rem;
        border-radius: 50%;
    }
     .Cheng_logo span:nth-of-type(1){
        color: #fff;
        display: block;
        width: 5.30504rem;
        height: 1.246684rem;
        position: absolute;
        top: 0.7958rem;
        left: 2.9178rem;
    }
    .Cheng_logo span:nth-of-type(2){
        color: #5e5e5e;
        display: block;
        width: 5.30504rem;
        height: 1.246684rem;
        position: absolute;
        top: 1.5915rem;
        left: 3.183024rem;
    }
    .Cheng_list {
        width: 100%;
        
    }
    .Cheng_list li{
        width: 3.3422rem;
        height: 2.6525rem;
        float: left;
        border:  .026525rem solid #ececec;
        margin-top:-1px;
        margin-right:-1px;
        background: #fff;
    }
    .Cheng_list li img{
        width: 0.7427rem;
        height: .795756rem;
        margin-top: 0.5305rem;
        margin-left: 1.32626rem;
        
    }
     .Cheng_list li span {
         display: block;
         width: 2.2546rem;
         height: 0.6897rem;
         line-height: 0.6897rem;
         text-align: center;
         margin-top: 0.2653rem;
         margin-left: 0.504rem;
     }
     .kong{
         clear: both;
         width: 100%;
         height: 3.183rem;
         
     }
     .kong button{
         display: block;
         width: 100%;
         height: 1.5915rem;
         line-height: 1.28rem;
         border: 0.999px solid #fff;
         background-color:#fff;
         color: #333;
         text-align: center;
         margin-top: 13.7932rem;
     }
</style>