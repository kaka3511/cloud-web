import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import GoodsOne from '@/components/content/goods/GoodsOne'
import GoodsTwo from '@/components/content/goods/GoodsTwo'
import GoodsThree from '@/components/content/goods/GoodsThree'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:{name:'Home'}},
    {name: 'Home',path: '/home',component: Home},
    {name: 'GoodsOne',path: '/goods/goodsOne',component: GoodsOne},
    {name: 'GoodsTwo',path: '/goods/GoodsTwo',component: GoodsTwo},
    {name: 'GoodsThree',path: '/goods/GoodsThree',component: GoodsThree}
  ]
})
