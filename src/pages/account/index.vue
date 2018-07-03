<template>
  <div>
    <div class="account-header">账户</div>
    <div class="userInfo flexCen">
      <p class="img"></p>
      <div>
        <p class="userName">1514****@qq.com</p>
        <p class="uid">UID:6488495</p>
      </div>
    </div>
    <div class="exchange flexCen">
      <div class="name">HKDT交易区</div>
      <div class="btn">
        <mt-button>兑换</mt-button>
      </div>
    </div>
    <div class="account-list">
      <div class="list-box flexCen" @click="$router.push('/account/all')">
        <p class="img"></p>
        <div>Mastercard</div>
        <p class="img"></p>
      </div>
      <div class="list-box flexCen" @click="$router.push('/account/redbag')">
        <p class="img"></p>
        <div>红包</div>
        <p class="img"></p>
      </div>
      <div class="list-box flexCen" @click="$router.push('/account/order')">
        <p class="img"></p>
        <div>订单管理</div>
        <p class="img"></p>
      </div>
      <div class="list-box flexCen" @click="$router.push('/account/safe')">
        <p class="img"></p>
        <div>安全中心</div>
        <p class="img"></p>
      </div>
      <div class="quitBtn">
        <mt-button>退出</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account-header{
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.userInfo{
  margin-bottom: 24px;
  .img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #ccc;
    margin: auto 20px;
  }
  div{
    flex: 1;
    .userName{
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      line-height: 20px;
    }
    .uid{
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      opacity: 0.5;
      line-height: 14px;
    }
  }

}
.exchange{
  margin-bottom: 22px;

  div{
    flex: 1;
    font-size: 14px;
  }
  .name{
    color: #FFFFFF;
    letter-spacing: 0;
    padding-left: 20px;
  }
  .btn{
    text-align: right;
    padding-right: 20px;
    .mint-button--normal{
      height: 26px;
      line-height: 26px;
      background-image: linear-gradient(131deg, #4CE6F9 0%, #4C54F9 100%);
      border-radius: 6px;
      padding: 0 25px;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: right;
    }
  }
}
.account-list{
  background: #393948;
  padding-bottom: 15rem;
  .list-box{
    width: 90%;
    padding: 15px 0;
    margin: 0 auto;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 10px;
    div{
      flex: 1;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0;
    }
    .img{
      width: 17px;
      height: 14px;
      background: #ccc;
      margin: 0 20px;
    }
  }
  .list-box:last-child{
    border: none;
  }
  .quitBtn{
    width: 90%;
    margin: 0 auto;
    margin-top: 90px;
    .mint-button--normal{
      display: block;
      width: 100%;
      background: #57576B;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.29px;
      text-align: center;
    }
  }
}
</style>

