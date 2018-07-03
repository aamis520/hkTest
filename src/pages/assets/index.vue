<template>
  <div>
    <div class="assets-info">
      <p class="name">JsonLi</p>
      <p class="assets-title">总资产HKD</p>
      <p class="assets-number">$0.00</p>
      <div class="assets-add">
        <div class="address" @click="popupVisible= true">
          <p><img src="~@/assets/images/二维码.png" alt=""></p>
          <p>资产地址</p>
        </div>
        <div class="addAssets" @click="addAddr">
          <p><img src="~@/assets/images/添加资产.png" alt=""></p>
          <p>添加资产</p>
        </div>
      </div>
      <div class="sao">
        <img src="~@/assets/images/扫描.png" alt="">
      </div>
    </div>
    <div class="assets-list">
      <div class="list-box" v-for="n in 15" :key="n" @click="goDetail">
        <div class="coinAddr"></div>
        <div class="list-item fl">
          <p>HKDT</p>
          <p>≈66666</p>
        </div>
        <div class="list-item fr">
          <p>6484</p>
          <p>6484HKD</p>
        </div>
        <div class="arrow">
          <img src="~@/assets/images/Shape.png" alt="">
        </div>
      </div>
    </div>

    <mt-popup
      v-model="popupVisible"
      class="codePop"
      position="bottom">
      <div class="codePopContent">
        <p class="title">我的地址</p>
        <p class="address">GDJCJDSJJJDJ3IJAJJSJJJDJDQW73J</p>
        <!-- TODO -->
        <p class="copyBtn"><mt-button type="primary">复制</mt-button></p>
        <p class="tip">* 本字符串地址是您的专属接收地址，转账/收款造成的损失，后果自负</p>
        <p class="codeImg"></p>
        <p class="codeInfo">钱包地址二维码</p>
        <div class="closePop" @click="popupVisible=false">
          <img src="~@/assets/images/x.png" alt="">
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      popupVisible: false,

    }
  },
  methods: {
    goDetail(){
      this.$router.push('/assets/detail')
    },
    addAddr(){
      this.$router.push('/assets/addAddr')
    }
  }
}
</script>
<style scoped lang="scss">
.assets-info{
  position: relative;
  width: 100%;
  padding-top: 40px;
  .sao{
    position: absolute;
    width: 16px;
    height: 16px;
    right: 20px;
    top: 20px;
  }
}
p{
  text-align: center;
  color: #fff;
}
.name {
  font-size: 18px;
  line-height: 25px;
}
.assets-title{
  font-size: 12px;
  line-height: 17px;
}
.assets-number{
  font-size: 36px;
  line-height: 50px;
}
.assets-add{
  position: relative;
  display: flex;
  margin-top: 25px;
  margin-bottom: 15px;
}
.assets-add p{
  margin-bottom: 10px;
}
.assets-add div{
  flex: 1;
  text-align: center;
  color: #fff;
}
.mint-cell-wrapper{
  border: none !important;
}
.assets-list{
  width: 90%;
  margin: 20px auto;
}
.list-box{
  display: flex;
  height: 56px;
  background: #393948;
  box-shadow: 0 0 33px 0 rgba(34,34,44,0.25);
  border-radius: 6px;
  -webkit-align-items:center;
  align-items:center;
  -webkit-justify-content:center;
  justify-content:center;
  margin-bottom: 10px;
}

.list-item{
  flex: 1;
  text-align: left;
}
.list-item.fl p{
  text-align: left;
}
.list-item.fr p{
  text-align: right;
}
.coinAddr{
  width: 24px;
  height: 24px;
  background: #ccc;
  margin: 0 20px;
}
.arrow{
  width: 40px;
  text-align: center
}
.codePop{
  width: 101%;
  padding: 1%;
}
.codePop .codePopContent{
  position: relative;
  p{
    color: #1e1e39;
  }
  .title {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.3px;
    margin-top: 40px;
  }
  .address {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #57576B;
    letter-spacing: 0.29px;
    text-align: center;
    margin: 10px auto;
  }
  .copyBtn {
    margin: 20px auto;
    .mint-button {
      padding: auto 20px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.29px;
      text-align: center;
      background-image: linear-gradient(131deg, #4CE6F9 0%, #4C54F9 100%);
      border-radius: 6px;
    }
    .mint-button--normal{
      padding:  0 30px;
    }
  }
  .tip {
    opacity: 0.4;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #1E1E39;
    letter-spacing: 0.21px;
    text-align: center;
  }
  .codeImg {
    background: #D8D8D8;
    border: 1px solid #979797;
    width: 140px;
    height: 140px;
    margin: 80px auto 13px auto;
  }
  .codeInfo {
    opacity: 0.5;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    line-height: 20px;
    color: #1E1E39;
    letter-spacing: 0.29px;
    text-align: center;
    margin-bottom: 54px;
  }
  .closePop{
    position: absolute;
    width: 12px;
    height: 12px;
    right: 20px;
    top: -20px;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>


