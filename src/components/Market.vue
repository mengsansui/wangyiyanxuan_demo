<template>
    <div class="market" style="overflow:hidden">
        <div class="line">
            <div class="m-topSearchIpt ipt">
                <span class="icon"> <img src="../assets/2.png" alt=""></span>
                <span>搜索商品, 共10571款好物</span>
            </div>
        </div>
        <ul class="qufen">
            <li v-for="(fen, index) in fenList" 
                :key="fen.id" 
                :class="{'gai':styles === index}"
                @click="change(index)">{{ fen.fenName }}
            </li>  
        </ul>
        <div class="main">
            <div class="main1">
                <div class="tu">
                    <img src="../assets/f362dba7d85cccbaf4a8d52caf00c103.jpg" alt="">
                </div>
                <div class="tuijian">
                    <span></span>
                    <p>推荐区分类</p>
                    <span></span>
                </div>
                <div class="xun">
                    <div class="" v-for="p in ShopList.itemList" 
                            :key="p.Id">
                        <img :src="p.primaryPicUrl" alt="">
                        <p>{{ p.name }}</p>

                    </div>
                    <!-- <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>

                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>

                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div>
                    <div class="">
                        <img src="../assets/4f361e61751c0b5e5608847c9502e321.png" alt="">
                        <p>防寒保暖</p>
                    </div> -->

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "market",
    data () {
        return {
            fenList: [
                {fenName: '推荐区'},
                {fenName: '个性专区'},
                {fenName: '冬季专区'},
                {fenName: '居家'},
                {fenName: '餐厨'},
                {fenName: '配件'},
                {fenName: '服装'},
                {fenName: '电器'},
                {fenName: '洗护'},
                {fenName: '杂货'},
                {fenName: '婴童'},
                {fenName: '饮食'},
                {fenName: '志趣'}    
            ],
            ShopList:[],
           	isTrue:true,
         	styles:''
        }
        
    },
    methods:{
        change (index) {
            this.styles = index;

        }
    },
    created () {
        this.axios.get('http://localhost:8888/jujia')
            .then(res => {
                this.ShopList = res.data.categoryItemList
                console.log( res.data.categoryItemList);
        })
    }
}
</script>

<style lang="css" scoped>
.line{
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    padding: .21333rem .4rem;
    border-bottom: 1px solid #ededed;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    background: #fff;
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
    width: 100%;
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
.qufen{
    width: 2.5rem;
    padding-top: .5rem;
    border-right: 1px solid #ededed;
    float: left;
    top: 1.2rem;
    z-index: 8;
    background: #fff;
    position: fixed;
}
.qufen li{
    text-align: center;
    margin-top:.55rem;
}
.main{
    width: 7.5rem;
    float:left;
    background: #fff;
    overflow: hidden;
    overflow-y: scroll;
    height: 15.5rem;
    position: absolute;
    top: 1.27rem;
    left: 2.5rem;

}
.main1{
    width: 95%;
    margin: 0 auto;
    height: 22rem;
    overflow: hidden;
}
.tu{
    width: 100%;
}
.tu img{
    width: 100%;
}
.tuijian, .xun{
    overflow: hidden;
    width: 100%;
    margin-top: .5rem;
    text-align: center;
}
.tuijian p{
    width: 3rem;
    float:left;
}
.tuijian span{
    width: .6rem;
    background-color: #ededed;
    float: left;
    height: .1rem;
    margin-left: 1.2rem;
    margin-top: .25rem;
}
.tuijian span:nth-of-type(2){
    margin-left: .1rem;
}
.xun div{
    width: 30%;
    margin: 0 auto;
    float: left;
    margin-left: .2rem;
}
.xun div img{
    width: 100%;
}
.xun div p{
    font-size: .35rem;
}
.gai{
    color: red;
    border-left: .079576rem solid red;
    font-size: 0.4775rem;
}
</style>
