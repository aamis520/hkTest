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

// OTC
import saveBuy from '@/pages/otc/saveBuy' // 我已付款
import buyIn from '@/pages/otc/buyIn' // 确认买入-进入组件
import cancelBuy from '@/pages/otc/cancelBuy' // 取消付款


// 账户相关
import AccountAll from '@/pages/account/allCoin' // 总资产
import AccountRedBag from '@/pages/account/redbag' // 红包
import AccountRedRecord from '@/pages/account/redrecord' // 红包记录
import AccountOrder from '@/pages/account/order' // 订单
import AccountCancelExchange from '@/pages/account/cancelExchange' // 取消交易
import AccountChangeAli from '@/pages/account/changeAli' // 修改支付宝
import AccountChangeBank from '@/pages/account/changeBank' // 修改银行卡
import AccountSafe from '@/pages/account/safeCenter' // 安全中心
import AccountVertify from '@/pages/account/vertify' // 身份验证

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
      path: '/saveBuy', // 确认买入
      component: saveBuy,
    },
    {
      path: '/buyIn', // 确认买入
      component: buyIn,
    },
    {
      path: '/cancelBuy', // 确认买入
      component: cancelBuy,
    },
    {
      path: '/account/all',
      component: AccountAll
    },
    {
      path: '/account/cancelEx',
      component: AccountCancelExchange
    },
    {
      path: '/account/changeAli',
      component: AccountChangeAli
    },
    {
      path: '/account/changeBank',
      component: AccountChangeBank
    },
    {
      path: '/account/order',
      component: AccountOrder
    },
    {
      path: '/account/redbag',
      component: AccountRedBag
    },
    {
      path: '/account/redrecord',
      component: AccountRedRecord
    },
    {
      path: '/account/safe',
      component: AccountSafe
    },
    {
      path: '/account/vertify',
      component: AccountVertify
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
