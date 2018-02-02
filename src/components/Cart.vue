<template>
    <div class="cart">
        <div class='gouwu_ye'>
            购物车
        </div>
        <div class='gouwu_cen'>
            <ul>
                <li>
                    <img src="../../Appimg/quanquan.png" alt="图片">
                    <span>30天无忧退货</span>
                </li>
                <li>
                    <img src="../../Appimg/quanquan.png" alt="图片">
                    <span>48小时快速退款</span>
                </li><li>
                    <img src="../../Appimg/quanquan.png" alt="图片">
                    <span>满88免邮费</span>
                </li>
            </ul>
            <div class="gouwu_img">
                <img src="../../Appimg/gouwuche.png" alt="图片">
                <p>去添加点什么吧</p>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "cart",
    data () {
        return {
           
        };
    }
}
</script>
    
<style lang="css" scoped>
   .gouwu_ye{
       width: 100%;
       height: 1.1936rem;
       background-color:#fff;
       line-height:1.1936rem;
       text-align: center;
   }
   .gouwu_cen {
       width: 100%;
       height: 15.9151rem;
       background-color: #f5f5f5;
   }
    .gouwu_cen  ul{
        margin-left: 0.3979rem;
    }
   .gouwu_cen li{
       float: left;
       margin-left: 0.5836rem;
   }
    .gouwu_cen li img{
        width:.132626rem;
        height: .132626rem;
    }
    .gouwu_cen li span{
        font-size: 0.3183rem;
    }
    .gouwu_img {
        padding-top: 5.305rem;
        margin-left: 3.183rem;
    }
    .gouwu_img p{
        margin-left: .66313rem;
    }
    .gouwu_img img{
        width: 3.9788rem;
        height: 3.9788rem;
    }
</style>