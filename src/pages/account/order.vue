<template>
  <div>
    <assets-header :title="title"></assets-header>
    <div class="xc-tab flexCen">
      <div class="xc-tab-item" :class="active == '1' ? 'active' : ''" @click="active = '1'">
        <span>全部</span>
      </div>
      <div class="xc-tab-item" :class="active == '2' ? 'active' : ''" @click="active = '2'">
        <span>未付款</span>
      </div>

      <div class="xc-tab-item" :class="active == '3' ? 'active' : ''" @click="active = '3'">
        <span>已付款</span>
      </div>
      <div class="xc-tab-item" :class="active == '4' ? 'active' : ''" @click="active = '4'">
        <span>申诉中</span>
      </div>

      <div class="xc-tab-item" :class="active == '5' ? 'active' : ''" @click="active = '5'">
        <span>已取消</span>
      </div>
      <div class="xc-tab-item" :class="active == '6' ? 'active' : ''" @click="active = '6'">
        <span>已完成</span>
      </div>

    </div>
    <div class="listBox">
      <div class="flexCen send">
        <div>
          <p class="main">
            <span class="buy">买入</span>HKDT</p>
          <p class="desc">李笑来</p>
        </div>
        <div>
          <p class="main">&nbsp;</p>
          <p class="desc">金额:3000.00HKDT</p>
        </div>
        <div>
          <p class="main">
            <i class="apply"></i>
            已完成</p>
          <p class="desc">2018/06/30</p>
        </div>
      </div>
    </div>
    <div>
      <div class="flexCen send">
        <div>
          <p class="main">
            <span class="sell">卖出</span>HKDT</p>
          <p class="desc">李笑来</p>
        </div>
        <div>
          <p class="main">&nbsp;</p>
          <p class="desc">金额:3000.00HKDT</p>
        </div>
        <div>
          <p class="main">
            <i class="success"></i>
            申诉</p>
          <p class="desc">2018/06/30</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import assetsHeader from '../assets/header'
export default {
  components: {
    assetsHeader
  },
  data () {
    return {
      title: '我的订单',
      active: '1'
    }
  }
}
</script>
<style lang="scss" scoped>
.xc-tab{
  width: 100%;
  height: 40px;;
  background: rgba(0,0,0,.5);
  color: #fff;
  div{
    flex: 1;
    text-align: center;
  }
  div.active{
    span{
      color: #4CA1F9;
      padding-bottom: 10px;
      border-bottom:2px solid #4CA1F9;
    }
  }
}
.send{
  padding: 0 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  div{
    flex:1;
    color: #FFFFFF;
    .main{
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 14px;
      position: relative;
      .buy{
        color: #4DC379;
      }
      .sell {
        color: #E05C5C;
      }
      i{
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
      }
      .success{
        background: #4CA1F9;
      }
      .apply{
        background: #FFC68C;
      }
    }
    .desc{
      font-size: 10px;
      opacity: 0.5;
      line-height: 14px;
      margin-bottom: 20px;
    }
  }
  div:nth-child(1){
    text-align: left;
  }
  div:nth-child(2){
    text-align: center;
  }
  div:nth-child(3){
    text-align: right;
  }
}
.listBox{
  margin-top: 10px;
}
</style>


