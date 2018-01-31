<template>
  <div id="app">
    <div class="tabbar">
        <router-link to="/home">
            <a href="">
               <img src="../Appimg/footer1-1.jpg">
               <div>首页</div>
            </a>
        </router-link>
        <router-link to="/market">
           <a href="">
               <img src="../Appimg/footer2-1.jpg">
               <div>分类</div>
           </a>
        </router-link>
        <router-link to="/cart">
            <a href="">
               <img src="../Appimg/footer3-1.jpg">
               <div>购物车</div>
            </a>
        </router-link>
        <router-link to="/mine">
            <a href="">
                <img src="../Appimg/footer4-1.jpg">
               <div style="margin-left:-0.0185rem;">个人</div>
            </a>
        </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
			document.documentElement.style.fontSize = innerWidth / 10 + "px";
			window.onresize = function() {
				document.documentElement.style.fontSize = innerWidth / 10 + "px";
			}
    }
}
</script>

<style>
*{box-sizing:border-box;}
body,nav,dl,dt,dd,p,h1,h2,h3,h4,ul,ol,li,input,button,textarea,footer{margin:0;padding:0}
body{font:16px/1.5 'Microsoft Yahei','Simsun';  color:#333;background:#fff;-webkit-text-size-adjust: none; min-width:320px;}
h1,h2,h3,h4,h5,h6{font-size:100%}
ul,ol{list-style:none}
a{text-decoration:none;color:#1a1a1a}
a:hover, a:active, a:focus{color:#1c5aa2;text-decoration: none;}
a:active{color:#aaa;}
img{vertical-align:middle;border:0;-ms-interpolation-mode:bicubic;}
button,input,select,textarea{font-size:100%; vertical-align:middle;outline:none;}
textarea{resize:none}
button,input[type="button"],input[type="reset"],input[type="submit"] {cursor:pointer;-webkit-appearance:button;-moz-appearance:button}
input:focus:-moz-placeholder,input:focus::-webkit-input-placeholder {color:transparent}
button::-moz-focus-inner,input::-moz-focus-inner { padding:0; border:0}
table { border-collapse:collapse; border-spacing:0}
/*.fl{float:left;}.fr{float:right;}.hide{display:none;}.show{display: block;}*/
.ellipsis { white-space:nowrap; text-overflow:ellipsis; overflow:hidden}
.break { word-break:break-all; word-wrap:break-word}
header, footer, article, section, nav, menu, hgroup {display: block;clear:all;}
/*清浮动*/
.clear:after {
    content: '';
    display: block;
    clear: both;
}

#app .tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.30667rem;
  background-color: #fafafa;
  font-size: .32rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.tabbar a div:hover {
  color: #b4282d;
}
.tabbar{
    margin-top: .2rem;
    z-index: 9;
}
</style>
