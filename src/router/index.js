// 配置路由的js
import Vue from 'vue'
// 导入路由模块
import VueRouter from 'vue-router'
// 全局安装一下路由模块
Vue.use(VueRouter)

// 分别导入四个组件
import Home from '../components/Home'
import Market from '../components/Market'
import Cart from '../components/Cart'
import Mine from '../components/Mine'
// 登录页
import YouXiang from '../components/dengLuYe/youXiang'
import QQ from '../components/dengLuYe/QQ'
import WeiBo from '../components/dengLuYe/weiBo'
import ChengGong from '../components/dengLuYe/ChengGong'


// 创建路由实例，并且配置路由规则
export default new VueRouter({
  mode: 'history',
  // 这里写路由规则
  routes: [
    // 这个path就是router-link里的to跳转的地址
    // component就是根据路由地址，找到对应的组件，显示到router-view中
    // { path: '', component: Home},
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/market', component: Market },
    { path: '/cart', component: Cart },
    { path: '/mine', component: Mine },
    { path: '/youXiang', component: YouXiang },
    { path: '/QQ', component: QQ },
    { path: '/weiBo', component: WeiBo },
    { path: '/ChengGong', component: ChengGong },
  ]
})
