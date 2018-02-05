<template>
    <div class="home">
        <div class="m-indexHd">
            <div class="line">
                <a href="##">
                    <img src="../assets/1.png" alt="">
                </a>
                <div class="m-topSearchIpt ipt">
                    <span class="icon"> <img src="../assets/2.png" alt=""></span>
                    <span>搜索商品, 共10571款好物</span>
                </div>
            </div>
            <div class="list">
                <div class="litt">
                    <div class="" v-for="(h,index) in HomeList" :key="h.Id"
                            :class="{'littGai':styles === index}" 
                            @click="changes(index)">
                        {{ h.HomeName }}
                    </div>
                    <!-- <div class="">
                        居家
                    </div>
                    <div class="">
                        餐厨
                    </div>
                    <div class="">
                        配件
                    </div>
                    <div class="">
                        服装
                    </div>
                    <div class="">
                        推荐
                    </div>
                    <div class="">
                        推荐
                    </div>
                    <div class="">
                        推荐
                    </div> -->
                </div>
            </div>
        </div>
        <div class="main">
            <div class="m-indexFloor">
                <img src="../assets/88f5dcaf804927e74a22fcf75b99d2a3.jpg" alt="">
            </div>
            <div class="m-indexServicePolicy">
                <div class="">
                    <img src="../assets/cae45612b8aae577d8bd73338e2fc02c (1).png" alt="">
                    <p>网易自营品牌</p>
                </div>
                <div class="">
                    <img src="../assets/cae45612b8aae577d8bd73338e2fc02c (1).png" alt="">
                    <p>30天无忧退货</p>
                </div>
                <div class="">
                    <img src="../assets/cae45612b8aae577d8bd73338e2fc02c (1).png" alt="">
                    <p>48小时快速退款</p>
                </div>
            </div>
            <div class="bai"></div>
            <div class="m-indexManufacturersSupplying">
                <div class="mt">
                    <p>品牌制造商直供</p>
                    <img src="../assets/3.png" alt="">
                </div>
                <div class="mtzuo">
                    <p class="p1">Nine West制造商</p>
                    <p class="p2">199元起</p>

                    <img src="../assets/b6b1daf5922e2b0d9651149cb07e5266.png" alt="">
                </div>
                <div class="mtyou">
                    <p class="p1">新秀丽制造商</p>
                    <p class="p2">49元起</p>

                    <img src="../assets/f57d460dde6e737f2bacd9f67cb73a41.png" alt="">
                </div>
                <div class="mtzuo">
                    <p class="p1">CK制造商</p>
                    <p class="p2">25元起</p>

                    <img src="../assets/bcca932aeb9d818dcf6d3a4804f7311b.png" alt="">
                </div>
                <div class="mtyou">
                    <p class="p1">Palph Lauren制造商</p>
                    <p class="p2">19元起</p>
                    <img src="../assets/7e2967f5278d44ee3fdf859224485a8f.png" alt="">
                </div>
            </div>
            <div class="bai"></div>
            <div class="hd">
                <p class="xinpin">周一周四 · 新品首发</p>
                <p class="chakan">查看全部</p>
            </div>
         <div class="item">
            <div class="ittem">
                <router-link to="/shop">
                <div class="items">
                    <img src="../assets/9cdfe68cd1aad448df240c9899279824.png" alt="">
                    <span class="bao">爆品</span>
                    <span class="sanshi">三石福利价</span>
                    <p class="nvshi">女士超轻便携羽绒服</p>
                    <p class="qiudong">秋冬脱不掉的温暖随行</p>
                    <p class="jiage">￥249</p>
                </div>
            </router-link>
                <div class="items">
                    <img src="../assets/8319d7be7b6c4f1654535aa9c80931b5.png" alt="">
                    <span class="bao">爆品</span>
                    <span class="sanshi santu">满赠</span>
                    <p class="nvshi">多工鞥私享按摩椅</p>
                    <p class="qiudong">选款师力荐 专属私人按摩师</p>
                    <p class="jiage">￥1999</p>
                </div>
                <div class="items">
                    <img src="../assets/8319d7be7b6c4f1654535aa9c80931b5.png" alt="">
                    <span class="bao">爆品</span>
                    <span class="sanshi santu">满赠</span>
                    <p class="nvshi">多工鞥私享按摩椅</p>
                    <p class="qiudong">选款师力荐 专属私人按摩师</p>
                    <p class="jiage">￥1999</p>
                </div>
            </div>
        </div>
        <div class="bai">

        </div>
        <div class="hd ht">
            <p class="xinpin">人气推荐 · 好物精选</p>
            <p class="chakan">查看全部</p>
        </div>
        <div class="item">
            <div class="items">
                <img src="../assets/137e49b65a0a05f3840ceff37efe5929.jpg" alt="">
                <span class="sanshi">今日特供</span>

                <p class="nvshi">全棉色支模毛四件装</p>
                <p class="qiudong">温暖磨毛,秋冬必备</p>
                <p class="jiage">￥209</p>
            </div>
            <div class="items">
                <img src="../assets/2f5e870593c18043e80a21ad885b0616.png" alt="">
                <span class="sanshi">今日特供</span>
                <p class="nvshi">超柔弹力拷贝懒人</p>
                <p class="qiudong">回到家，指向瘫在沙发</p>
                <p class="jiage">￥419</p>
            </div>
        </div>
        <div class="bai">

        </div>
        <div class="mt mou">
            <p>专题精选</p>
            <img src="../assets/3.png" alt="">
        </div>
        <div class="gua">
            <div class="gua1">
                <img src="../assets/7f50fc6bbeffec16ec8cc72d5be503c6.jpg" alt="">
            </div>
            <div class="gua2">
                <p>提升春节幸福感的13件零食<span>6元起</span></p>
                <p>丁磊私家年货推荐</p>
            </div>
        </div>
        <div class="bai">

        </div>
        <div class="mt mou ju">
            <p>居家好物</p>
        </div>
        <div class="item zhong">
            <div class="items">
                <img src="../assets/480abaed735b79e1768fd9878ef76cc4.png" alt="">
                <div class="se">
                    双层子母被，四季皆可使用
                </div>

                <p class="nvshi">温暖磨毛,秋冬必备</p>
                <p class="jiage">￥209</p>
            </div>
            <div class="items">
                <img src="../assets/83779a04b7408f32f563c9f10f98e455.png" alt="">
                <div class="se">
                    定位高端,国际顶级品牌代工厂
                </div>
                <p class="nvshi">超柔弹力拷贝懒人</p>
                <p class="jiage">￥419</p>
            </div>
            <div class="items">
                <img src="../assets/480abaed735b79e1768fd9878ef76cc4.png" alt="">
                <div class="se">
                    双层子母被，四季皆可使用
                </div>

                <p class="nvshi">温暖磨毛,秋冬必备</p>
                <p class="jiage">￥209</p>
            </div>
            <div class="items">
                <img src="../assets/83779a04b7408f32f563c9f10f98e455.png" alt="">
                <div class="se">
                    定位高端,国际顶级品牌代工厂
                </div>
                <p class="nvshi">超柔弹力拷贝懒人</p>
                <p class="jiage">￥419</p>
            </div>
            <div class="items">
                <img src="../assets/480abaed735b79e1768fd9878ef76cc4.png" alt="">
                <div class="se">
                    双层子母被，四季皆可使用
                </div>

                <p class="nvshi">温暖磨毛,秋冬必备</p>
                <p class="jiage">￥209</p>
            </div>
            <div class="items">
                <img src="../assets/83779a04b7408f32f563c9f10f98e455.png" alt="">
                <div class="se">
                    定位高端,国际顶级品牌代工厂
                </div>
                <p class="nvshi">超柔弹力拷贝懒人</p>
                <p class="jiage">￥419</p>
            </div>
            <div class="items">
                <img src="../assets/480abaed735b79e1768fd9878ef76cc4.png" alt="">
                <div class="se">
                    双层子母被，四季皆可使用
                </div>

                <p class="nvshi">温暖磨毛,秋冬必备</p>
                <p class="jiage">￥209</p>
            </div>
            <div class="items hao">
                <p>更多居家好物</p>
                <img src="../assets/hxm%2Fyanxuan-wap%2Fp%2F20161201%2Fstyle%2Fimg%2Ficon-normal%2FgoodGridMore-233aaf669a.png" alt="" class="haoimg" style="width: 1rem; margin-left:1.6rem;margin-top:1rem;">
            </div>
        </div>





        <div class="gaos">

        </div>

    </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data () {
        return {
             HomeList: [
                { HomeName: '推荐'},
                { HomeName: '居家'},
                { HomeName: '餐厨'},
                { HomeName: '配件'},
                { HomeName: '服装'},
                { HomeName: '电器'},
                { HomeName: '洗护'},
                { HomeName: '杂货'},
                { HomeName: '饮食'},
                { HomeName: '婴童'},
                { HomeName: '志趣'}
            ],
            isTrue:true,
            styles:''
        };
    },
     methods:{
        changes(index) {
            this.styles = index;

        }
    },
}
</script>

<style lang="css" scoped>
.m-indexHd{
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
    line-height: 1.5;
    background-color: #fff;
    position: fixed;
    width: 100%;
    z-index: 10;
}
.line{
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    padding: .21333rem .4rem;
}
.line a{
    width: 2.2rem;
    height: .53333rem;

    display: inline-block;
    margin-right: .26667rem;
    background-size: cover;
    background-position: center;
}
.line a img{
    width: 100%;
}
.m-topSearchIpt{
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: .40333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    width: 7.0rem;
    height: .8rem;
}
.m-topSearchIpt span{
    color: #666;
    font-size: .35rem;
}
.icon{
    margin-right: .2rem;
}
.icon img{
    width: .4rem;
    line-height: 1.0rem;
    height: 0.4rem;
}
.list{
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    /* margin-top: .2rem;
    margin-bottom: .2rem; */
}
.litt{
    width: 190%;
    overflow: hidden;
}
.litt div{
    display: inline-block;
    padding: 0 .48cssrem;
    line-height: .8rem;
    font-size: .37333rem;
    color: #333;
    text-align: center;
    margin-left: .64rem;
    width: 1rem;
}
.litt div:hover{
    color: #b4282d;
}
.littGai{
    color: #b4282d;
    border-bottom:  0.0531rem solid #b4282d;
}
.main{
    position: absolute;
    top: 2.0rem;

}
.m-indexFloor{
    width: 100%;
    border-top: .03rem solid #bbbbbb;
    top: 2.0rem;
}
.m-indexFloor img{
    width: 100%;
}
.m-indexServicePolicy{
    width: 100%;
    overflow: hidden;
}
.m-indexServicePolicy div{
    width: 32%;
    float: left;
    color: #333;
    font-size: .35rem;
    margin-top: .3rem;
}
.m-indexServicePolicy div p{
    float: left;
    line-height: .6rem;
}
.m-indexServicePolicy div img{
    width: .5rem;
    margin-left: .1rem;
    float: left;
}
.bai{
    width: 100%;
    height: .3rem;
    background: #f4f4f4;
    margin-top: .2rem;
}
.m-indexManufacturersSupplying{
    width: 100%;
    overflow: hidden;
    color: #333;
    font-size: .5rem;
    position: relative;
}
.mt{
    width: 100%;
    overflow: hidden;
    height: 1.5rem;
}
.mt p{
    width: 3.5rem;
    float: left;
    margin-left: 2.6rem;
    line-height: 1.5rem;
}
.mt img{
    width: .5rem;;
    float: left;
    margin-top: .5rem;
    margin-left: .2rem;
}
.mtzuo,.mtyou{
    float: left;
    width: 4.85rem;
    background: #f4f4f4;
    margin-left: .1rem;
    margin-top: .1rem;
    position: relative;
    height: 2.7rem;
}
.mtzuo p,.mtyou p{
    font-size: .5rem;
    margin-left: .3rem;
    margin-top: .2rem;
}
.mtzuo .p1,.mtyou .p1{
        font-size: .5rem;
}
.mtzuo .p2,.mtyou .p2{
    font-size: .4rem;
}
.mtzuo img,.mtyou img{
    width: 3.5rem;
    float: right;
    height: 2.5rem;
    position: absolute;
    top: 0;
    left: 1rem;
}
.mtzuo span,.mtyou span{
    float: left;
    margin-left: .3rem;
    margin-top: .2rem;
}
.mtzuo span img,.mtyou span img{
    width: 1.3rem;
    height: 0.7rem;
}
.hd{
    width: 100%;
    background: url(../assets/4.png);
    color: black;
    height: 3.5rem;
}
.hd p{
    text-align: center;
    color: #8c9fb1;
}
.xinpin{
        padding-top: 0.8rem;
}
.chakan{
    margin-top: .3rem;
    display: inline-block;
    margin-left: 3.7rem;
    background: #D8E5F1;
    width: 2.7rem;
    font-size: 0.4rem;
}
.item{
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
}
.items{
    float: left;
    width: 3.5rem;
    margin-left: .35rem;
    margin-top: .3rem;
}
.items img{
    float: left;
    width: 3.5rem;
    background: #f4f4f4;
}
.items span{
    float: left;
}
.items p{
    float: left;
    text-align: left;
    margin-left: .2rem;
    margin-top: .2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 3.2rem;
}
.bao{
    margin-left: .2rem;
    margin-top: .3rem;
    background: #e5686d;
    color: white;
    width: 1rem;
    text-align: center;
    font-size: .2rem;
}
.sanshi{
    width: 2rem;
    margin-left: .15rem;
    margin-top: .3rem;
    background: #f48f18;
    color: white;
    text-align: center;
    font-size: .2rem;
}
.nvshi{
    font-size: .39rem;
    color: #333;
}
.qiudong{
    font-size: .3rem;
    color: #7f7f7f;
}
.jiage{
    color: #b4282d;
}
.santu{
    width: 1.5rem;
}
.ht{
    background: url(../assets/5.png)
}
.ht p{
    color: #B4A078;
}
.ht .chakan{
    background: #F4E9CB;
}
.ittem{
    width: 600%;
    overflow: hidden;
}
.gaos{
    width: 100%;
    height: 1.3263rem;
    background: #fff;
}
.mou p{
    float: left;
    margin-left: 3.5rem;
    text-align: center;
    width: 2rem;
}
.gua, .gua1, .gua2{
    width: 100%;
}
.gua1 img{
    width: 100%;
}
.gua2 p{
    margin-left: .5rem;
    margin-top: .1rem;
}
.gua2 p span{
    float: right;
    color: #b4282d;
    margin-right: .4rem;
}
.gua2 p:nth-of-type(2){
    color: #7F7F7F;
    font-size: .35rem;
}
.ju p{
    width: 100%;
    text-align: center;
    margin-left: 0
}
.zhong .items{
    width: 45%;
}
.zhong .items img{
    width: 100%;
}
.zhong .items .se{
    width: 100%;
    text-align: center;
    color: #9F8A60;
    background: #F1ECE2;
    font-size: .35rem;
    float: left;
    height: .8rem;
    line-height: .8rem;
}
.hao{
    background: #f4f4f4;
    height: 5.3rem;
}
.hao p{
    width: 100%;
    text-align: center;
    font-size: .45rem;
    margin-top: 1.2rem;

}

</style>
