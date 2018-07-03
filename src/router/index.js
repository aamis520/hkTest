import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import Login from '@/pages/user/Login'
import Regist from '@/pages/user/Regist'
import Assets from '@/pages/assets/index'
import AssetsDeatil from '@/pages/assets/detail'
import AssetsTransfer from '@/pages/assets/transfer'
import AssetsRollout from '@/pages/assets/rollOut'
import AssetsTransferAccount from '@/pages/assets/transferAccount'
import AssetsRecord from '@/pages/assets/record'
import AssetsAddAddress from '@/pages/assets/addAssets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Index,
    },
    {
      path: '/assets', // 资产首页
      name: 'assets',
      component: Assets,
    },
    {
      path: '/assets/detail', // 总资产
      component: AssetsDeatil
    },
    {
      path: '/assets/transfer', // 划转1
      component: AssetsTransfer
    },
    {
      path: '/assets/rollOut', // 转账出
      component: AssetsRollout
    },
    {
      path: '/assets/transferAccount', // 转账到卡
      component: AssetsTransferAccount
    },
    {
      path: '/assets/record', // 划转记录
      component: AssetsRecord
    },
    {
      path: '/assets/addAddr', // 划转记录
      component: AssetsAddAddress
    },
    {
      path: '/regist',
      component: Regist
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
