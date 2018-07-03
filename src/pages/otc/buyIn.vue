<template>
  <div>
    <assets-header :title="title"></assets-header>
    <div class="header">
      <div style="height:100%;display:flex;margin-top:20px;">
        <!-- <p>李**</p>
        <p>李**</p> -->
        <!-- <img src="" alt=""> -->
        <span class="headContent">
          <div class="headPic">

          </div>
          <div>
            <div class="headName">李**</div>
            <div class="headDate">30日成交:7388</div>
          </div>
        </span>
        <span class="headContent">
          <div class="headName"></div>
          <div class="headDate">申诉:7388</div>
        </span>
      </div>
      <div class="container">
        <span>
          <p style="font-size: 14px;opacity: 0.5;">交易金额</p>
          <p style="font-size: 18px;color: #FFFFFF;">2412.00HKDT</p>
          <p style="font-size: 10px;color: #FFFFFF;opacity: 0.5;">价格：35.00</p>
          <p style="font-size: 10px;color: #FFFFFF;opacity: 0.5;">数量：66.0822</p>
        </span>
        <span>
          <p></p>
          <p style="font-size: 10px;color: #FFFFFF;opacity: 0.5;">#1231231231232323</p>
          <p class="savePay" style="color: #4CA1F9;font-size:18px;line-height:20px;">待付款</p>
          <p style="font-size: 10px;color: #4ca1f9;opacity: 0.5;">(14分钟59秒)</p>
        </span>
      </div>
      <!-- 支付信息 -->
      <div class="payInfo">
        <p class="title">支付信息</p>
        <div style="margin:10px 0 0 25px;">
          <img style="width:22px;height:22px;" src="~@/assets/images/银行卡.png" alt="pay">
          <span class="bankName">中国农业银行</span>
        </div>
        <!-- 银行用户信息 -->
        <div class="bankUserInfo">
          <p class="bankUserInfoTop">
            <span style="margin-left:20px;">李笑来</span>
            <span style="margin-left:50px;">728884995958596</span>
          </p>
          <p class="bankUserInfoSchool">
            <span style="margin-left:20px;">北京海淀学院</span>
          </p>
        </div>
      </div>
      <!-- 支付宝用户信息 -->
      <div style="height:180px;" class="payInfo">
        <p class="title">支付信息</p>
        <div style="margin:10px 0 0 25px;">
          <img style="width:22px;height:22px;" src="~@/assets/images/支付宝.png" alt="支付宝">
          <span class="bankName">支付宝</span>
        </div>
        <div style="margin-top:10px;" class="bankUserZhifubao">
          <p class="bankUserInfoTop">
            <span style="margin-left:20px;">李笑来</span>
          </p>
        </div>
        <div style="margin-top:10px;" class="bankUserZhifubao">
          <p class="bankUserInfoTop">
            <!-- <input class="inputRemark" type="text" style="height:;"> -->
            <span class="remark" style="margin-left:20px;">请备注付款参考码</span>
            <span class="remarkRight" style="margin-right:20px;float:right;">84495</span>
          </p>
        </div>
      </div>

      <div class="footer">
        <span class="footerContent">
          <img style="margin-top:8px;" src="~@/assets/images/银行卡.png" alt="">
          <br>
          <span class="contactOther">联系对方</span>
        </span>
        <span class="footerContent" style="margin-top:12px;">
          <mt-button @click="cancelPay" style="color:white;opacity:.5;background:#3E3E4E;height:32px;width:100px;font-size:14px;">取消交易</mt-button>
          <!-- <mt-button size="small">取消交易</mt-button> -->
        </span>
        <span class="footerContent" style="margin-top:12px;">
          <mt-button @click="alreadyPay" class="saveBtn" style="height:32px;width:100px" type="primary">我已付款</mt-button>
          <!-- <mt-button size="small">我已付款</mt-button> -->
        </span>
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
      title: '购买HKDT',
    }
  },
  watch: {
  },
  methods: {
    // 取消付款事件
    cancelPay(){
      this.$router.push('/cancelBuy')
    },
    // 点击我已付款事件
    alreadyPay(){
      this.$router.push('/saveBuy')
    }
  }
}
</script>
<style lang="scss" scoped>
  .header{
    border-bottom: 1px solid #393948;
    height:100px;
    width: 100%;
    .headContent{
      height:100%;
      text-align: center;
      flex: 1;
      .headPic{
        background: #D8D8D8;
        margin:5px 0  0 25px;
        float: left;
        height: 44px;
        width: 44px;
        border-radius: 50%;
        // border: 1px solid red;

      }
      .headName{
        margin-bottom: 20px;
        line-height: 20px;
        position: relative;
        left: -25px;
        height:18px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
      }
      .headDate{
        opacity: 0.5;
        font-family: PingFangSC-Regular;
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
      }
    }
  }
  .payInfo{
    background: #393948;
    border-radius: 6px;
    margin-left:10px;
    width: calc(100% - 20px);
    height: 150px;
    .bankUserZhifubao{
      margin:0 20px 0 50px;
      height: 30px;
      background: #31313F;
      .bankUserInfoTop{
        line-height: 30px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0.25px;
        .remark{
          float: left;
          opacity: 0.5;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: 0.25px;
        }
      }
    }
    .bankUserInfo{
      margin:0 20px 0 50px;
      height: 60px;
      background: #31313F;
      .bankUserInfoTop{
        line-height: 30px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0.25px;
      }
      .bankUserInfoSchool{
        line-height: 30px;
        opacity: 0.5;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0.25px;
      }
    }
    .title{
      margin-left: 25px;
      padding-top:20px;
      opacity: 0.5;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.29px;
    }
    .bankName{
      margin-left: 10px;
      position: relative;
      top: -5px;
      line-height: 25px;
      opacity: 0.5;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #FFFFFF;
      letter-spacing: 0.25px;
    }
  }
  .container{
    margin-left:10px;
    margin-top:20px;
    border-radius: 5px;
    width: calc(100% - 20px);
    background-color: #424254;
    display: flex;
    p{
      height: 20px;
      // line-height: 20px;
      margin:10px 0 10px 30px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.29px;
      // .savePay{
      //   color: #4CA1F9;
      //   font-family: PingFangSC-Regular;
      //   font-size: 18px;
      //   color: #4CA1F9;
      //   letter-spacing: 0.38px;
      //   text-align: right;
      // }
    }
    span{
      flex: 1;
    }
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 50px;
    background: #31313F;
    display: flex;
    .footerContent{
      text-align: center;
      flex: 1;
      .saveBtn{
        width:80%;margin: 0 auto;
        font-family: PingFangSC-Regular;
        color: #FFFFFF;
        text-align: center;
        font-size: 14px;
        letter-spacing: 0.29px;
        background-image: linear-gradient(131deg, #4CE6F9 0%, #4C54F9 100%);
      }
      .contactOther{
        opacity: 0.5;
        font-family: PingFangSC-Regular;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: 0.19px;
        text-align: center;
      }
    }
  }
</style>


