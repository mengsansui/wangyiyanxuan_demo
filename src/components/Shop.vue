<template>
    <div class="shop">
        <div class="mine_top">
            <router-link to='/shop'>
                <img src="../../Appimg/top_06.png" alt="回到主页" style="margin-left:   .265252rem">
            </router-link>
             <h2><img src="../../Appimg/top_02.png" alt=""></h2>
            <div class="sou_li">
                <ul>
                    <router-link to='/shop'>
                        <li><img src="../../Appimg/top_13.png" alt="搜索"></li>
                    </router-link>
                    <router-link to='/shop'>
                        <li><img src="../../Appimg/top_03.png" alt="购物车"></li>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="lun">
            <img src="../assets/26b93061fef99038d7ca8f2fbb7b59b1.png" alt="">

        </div>
        <div class="itm">
            <div class="itsm">
                <img src="../assets/03e9ebc98168a6e284eb57b36c9067ff.jpg" alt="">
                <p>源于日本</p>
                <p>正源花珠</p>

            </div>
            <div class="itsm">
                <img src="../assets/03e9ebc98168a6e284eb57b36c9067ff.jpg" alt="">
                <p>源于日本</p>
                <p>正源花珠</p>
            </div>
            <div class="itsm">
                <img src="../assets/03e9ebc98168a6e284eb57b36c9067ff.jpg" alt="">
                <p>源于日本</p>
                <p>正源花珠</p>

            </div>

        </div>

        <div class="content">
            <div class="info">
                <p>日本AKOYA天然海水珍珠18K金项链</p>
                <p>GGC专业认证，日本顶级花珠</p>
                <p>¥999</p>
            </div>
            <div class="comment">
                <p>144</p>
                <p>用户评价</p>

            </div>

        </div>
        <div class="bai">

        </div>
        <div class="specSelects">
            <div class="specSelect">
                已选择:珍珠项链x1

            </div>
            <div class="specSelect">
                积分:购买最高得99积分
            </div>
            <div class="specSelect">

            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: "shop",
    mounted(){
        document.documentElement.style.fontSize = innerWidth / 10 + "px";
        window.onresize = function() {
            document.documentElement.style.fontSize = innerWidth / 10 + "px";
        }
    }
}
</script>

<style lang="css">
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
.lun{
    width: 100%;

}
.lun img{
    width: 100%;
}
.itm{
    width: 100%;
    background: #F9F9F9;
}
.itm .itsm{
    width: 30%;
    overflow: hidden;
    font-size: .37rem;
    float: left;
    margin-left: .2rem;
    color: #333;
}
.itm .itsm img{
    float: left;
    width: 37%;
    border-radius: 50%;
}
.itm .itsm p{
    float: left;
    margin-left: .25rem;

}
.content{
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    margin-top: 1.5rem;
    margin-bottom: .5rem;
}
.info{
    width: 75%;
    float: left;
    border-right: .1rem dashed gray;
}
.info p{
    margin-left: .4rem;
}
.info p:nth-of-type(1){
    color: #333;
    font-size: .45rem
}
.info p:nth-of-type(2){
    color: #7f7f7f;
    font-size: .35rem;
}
.info p:nth-of-type(3){
    color: #B4282D;
    font-weight: bold;
}
.comment{
    width: 25%;
    float: left;
    text-align: center;
    color: #B4282D;
}
.comment p:nth-of-type(1){
    margin-top: .7rem;
}
.bai{
    width: 100%;
    height: .3rem;
    background: #f4f4f4;
    margin-top: .2rem;
}
.specSelects{
    width: 100%;
}
.specSelect{
    width: 95%;
    margin-left: .5rem;
}
</style>
