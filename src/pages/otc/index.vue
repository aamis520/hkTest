<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <p class="title">HKD/HKDT</p>
      <div id="add">
        <img src="~@/assets/images/添加资产.png" alt="add">
      </div>
    </div>
    <!-- container -->
    <div class="list">
      <!-- 下边是导航菜单 -->
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">我要买</mt-tab-item>
        <mt-tab-item id="2">我要卖</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <table>
            <tbody>
              <tr v-for="(item, index) in userArr" :key="index">
                <td width="30%">
                  <p class="title">{{item.name}}</p>
                   <img style="width:22px;height:22px;" src="~@/assets/images/支付宝.png" alt="pay">
                   <img style="width:22px;height:22px;" src="~@/assets/images/资产.png" alt="zichan">
                </td>
                <td>
                  <p class="title">{{item.HKD}}</p>
                  <p class="limit">限额：{{item.limitUp}}</p>
                  <p class="limit">限额：{{item.limitDown}}</p>
                </td>
                <td>
                  <mt-button @click="buyBtn" style="color:white;background:#4DC379;height:25px;width:60px;font-size:10px;">买入</mt-button>
                </td>
              </tr>
            </tbody>
          </table>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <table>
            <tbody>
              <tr v-for="(item, index) in userArr" :key="index">
                <td width="30%">
                  <p class="title">{{item.name}}</p>
                   <img style="width:22px;height:22px;" src="~@/assets/images/支付宝.png" alt="pay">
                   <img style="width:22px;height:22px;" src="~@/assets/images/资产.png" alt="zichan">
                </td>
                <td>
                  <p class="title">{{item.HKD}}</p>
                  <p class="limit">限额：{{item.limitUp}}</p>
                  <p class="limit">限额：{{item.limitDown}}</p>
                </td>
                <td>
                  <mt-button @click="buyBtn" style="color:white;background:#E05C5C;height:25px;width:60px;font-size:10px;">买入</mt-button>
                </td>
              </tr>
            </tbody>
          </table>
        </mt-tab-container-item>
      </mt-tab-container>


    </div>
    <mt-popup
      v-model="popupVisible"
      class="codePop"
      position="bottom">
      <div class="codePopContent">
        <p class="title">买入HKDT</p>
        <p class="limit">66.0822</p>
        <p class="tip">限额：1526-467456</p>
        <input class="inputMax" placeholder="最大可买入0.575989">
        <input class="inputMax" placeholder="最大可买入500000.00">
        <!-- <mt-button type="info">(15s)后自动消失</mt-button>
        <mt-button type="primary">确认</mt-button> -->
        <div style="display:flex;margin-top:50px;">
          <span style="flex:1;text-align:center;">
            <mt-button class="appearCancel">(15s)后自动消失</mt-button>
          </span>
          <span style="flex:1;text-align:center;">
            <mt-button @click="saveBuyIn" class="saveBtn" type="primary">
              确认
            </mt-button>
          </span>
        </div>
        <!-- <p class="codeImg"></p> -->
        <!-- <p class="appearCancel">
          <mt-button type="info">(15s)后自动消失</mt-button>
          <mt-button type="primary">确认</mt-button>
        </p> -->
        <div class="closePop" @click="popupVisible=false">
          <img src="~@/assets/images/x.png" alt="">
        </div>
      </div>
    </mt-popup>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: '1',
      popupVisible: false,
      sheetVisible: false,
      title: 'gate.io',
      upOrDown: false,
      userArr: [
        {name: '张**', HKD: '66.0822HKD', limitUp: '42120-42120',limitDown: '34.000000'},
        {name: '张**', HKD: '66.0822HKD', limitUp: '42120-42120',limitDown: '34.000000'},
        {name: '张**', HKD: '66.0822HKD', limitUp: '42120-42120',limitDown: '34.000000'},
        {name: '张**', HKD: '66.0822HKD', limitUp: '42120-42120',limitDown: '34.000000'}
      ],
      actions: [
        {
          name: 'gate.io',
          method: this.gateIo
        },
        {
          name: '火币',
          method: this.coin
        },
        {
          name: 'Fcoin',
          method: this.fcoin
        },
      ]
    }
  },
  watch: {
    sheetVisible(value){
      if(value == false){
        this.upOrDown = false
      }
    }
  },
  methods: {
    // 点击确认买入事件
    saveBuyIn() {
      // console.log('确认买入')
      this.$router.push('/buyIn')
    },
    // 点击买入事件
    buyBtn() {
      this.popupVisible = true
      console.log('jgdl')
    },
    openSheet(){
      this.upOrDown = true
      this.sheetVisible = true
    },
    gateIo(){
      this.upOrDown = false
      this.title = 'gate.io'
    },
    coin(){
      this.upOrDown = false
      this.title = '火币'
    },
    fcoin(){
      this.upOrDown = false
      this.title = 'Fcoin'
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
  position: relative;
  height: 60px;
  .title{
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 60px;
  }
  #add{
    position: absolute;
    top: 0;
    bottom: 0;
    margin:  auto;
    right: 21.8px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    // width: 90px;
    height: 25px;

  }
}
.list{
  width: 90%;
  margin: 0 auto;
  .mint-navbar{
    background: #24242F;
    font-size: 14px;
    .mint-tab-item.is-selected{
      color: white;
      font-size: 14px;
    }
  }
  table {
    color: #fff;
    width: 100%;
    border-spacing: 0px;
    tr{
      height: 60px;
      margin-bottom: 2px;
    }
    tbody{
      tr{
        td{
          // opacity: 0.5;
          padding: 10px;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: 0.25px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          .title{
            font-size: 14px;
            color: #FFFFFF;
            line-height: 25px;
          }
          .limit{
            opacity: 0.5;
            font-size: 12px;
            color: #FFFFFF;
          }
          .desc{
            font-size: 12px;
            line-height: 17px;
            color: rgba(255,255,255,.5);
          }
          .rise{
            color: #4DC379;
          }
          .fall{
            color: #E05C5C;
          }
        }
        td:last-child{
          text-align: right;
        }
      }
      tr:last-child{
        td{
          border-bottom: none;
        }
      }
    }
  }
}
.codePop{
  height: 70%;
  width: 99%;
  padding: 1%;
}
.codePop .codePopContent{
  position: relative;
  p{
    color: #1e1e39;
  }
  .title {
    font-size: 18px;
    color: #1E1E39;
    letter-spacing: 0.38px;
    text-align: center;
    font-family: PingFangSC-Regular;
    margin-top: 40px;
  }
  .limit {
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #57576B;
    letter-spacing: 0.75px;
    text-align: center;
    margin: 10px auto;
  }
  .tip {
    margin-top:50px;
    opacity: 0.5;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #1E1E39;
    margin-left: 5%;
    letter-spacing: 0.21px;
  }
  .inputMax {
    box-sizing: border-box;
    padding: 10px;
    background: #F5F5F5;
    border: 1px solid #DFDFDF;
    border-radius: 6px;
    width: 90%;
    height: 40px;
    margin: 5px 5%;
  }
  .appearCancel{
    width:80%;margin: 0 auto;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.29px;
    text-align: center;
    background: #CBCBCB;
  }
  .saveBtn{
    width:80%;margin: 0 auto;
    font-family: PingFangSC-Regular;
    color: #FFFFFF;
    text-align: center;
    font-size: 14px;
    letter-spacing: 0.29px;
    background-image: linear-gradient(131deg, #4CE6F9 0%, #4C54F9 100%);
  }
  // .appearCancel {
  //   margin: 20px auto;
  //   .mint-button {
  //     padding: auto 20px;
  //     font-family: PingFangSC-Regular;
  //     font-size: 14px;
  //     color: #FFFFFF;
  //     letter-spacing: 0.29px;
  //     text-align: center;
  //     background-image: linear-gradient(131deg, #4CE6F9 0%, #4C54F9 100%);
  //     border-radius: 6px;
  //   }
  //   .mint-button--normal{
  //     padding:  0 30px;
  //   }
  // }
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
.sanjiao{
  display: inline-block;
  position: relative;
  border-width:0 16px 16px;
  border-style:solid;
  border-color:transparent transparent transparent;
  i{
    display:block;
    width:0;
    height:0;
    border-style:solid;
    position:absolute;
    top:6px;
    left:-10px;
  }
  i.down{
    border-width: 8px 8px 0;
    border-color: #fff transparent transparent;
  }
  i.up{
    border-width: 0 8px 8px;
    border-color: transparent transparent #fff;
  }
}
</style>


