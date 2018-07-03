<template>
  <div>
    <assets-header :title="title" :showSao="true"></assets-header>
    <div class="assets-info">
      <p class="img"></p>
      <p class="number">6489.54738 BTC</p>
      <div class="assets-add">
        <div class="address" @click="popupVisible= true">
          <p class="th-title">行情价(HKDT)</p>
          <p class="price">36.55</p>
        </div>
        <div class="addAssets">
          <p class="th-title">合计(HKD)</p>
          <p class="price">2674.11</p>
        </div>
      </div>
    </div>
    <div class="assets-list">
      <p class="title"></p>
      <div class="list-Record">
          <table>
          <thead>
            <tr>
              <th>类别</th>
              <th>数量</th>
              <th>时间</th>
              <th style="width:30%;">地址</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for= "n in 5" :key="n">
              <td>转账</td>
              <td>0.01</td>
              <td>07/01 12:31</td>
              <td>ajsdfuhasbdufajfbasdbhcjncu</td>
            </tr>
            <tr v-if="false">
              <td colspan="4" style="text-align:center;">暂无数据</td>
            </tr>
          </tbody>
        </table>
        <p class="out">
          <mt-button @click="gotoTransfer">划转</mt-button>
        </p>
        <div class="pay">
          <div>
            <mt-button @click="sheetVisible = true">转账</mt-button>
          </div>
          <p class="zone"></p>
          <div>
            <mt-button>收款</mt-button>
          </div>
        </div>
      </div>
    </div>
    <mt-actionsheet
      class="chooseCard"
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
import assetsHeader from './header'
export default {
  components: {
    assetsHeader
  },
  data () {
    return {
      title: '总资产',
      sheetVisible: false,
      actions: [{
        name: '转出到自己的Mastercard',
        method: this.gotoTransfer
      },{
        name: '转出',
        method: this.gotToRollout
      }]
    }
  },
  methods: {
    gotoTransfer(){
      this.$router.push('/assets/transfer')
    },
    gotToRollout(){
      this.$router.push('/assets/rollOut')
    }
  }
}
</script>
<style lang="scss" scoped>
.assets-info{
  position: relative;
  width: 100%;
  padding-top: 40px;
  p{
    text-align: center;
    color: #fff;
  }
  .img {
    width: 36px;
    height: 36px;
    background: #ccc;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 25px;
  }
  .number{
    font-size: 20px;
    line-height: 28px;
  }
  .assets-add{
    position: relative;
    display: flex;
    margin-top: 25px;
    margin-bottom: 15px;
    .th-title{
      opacity: 0.6;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
    }
    .price{
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
    }
  }
  .assets-add p{
    margin-bottom: 10px;
  }
  .assets-add div{
    flex: 1;
    text-align: center;
    color: #fff;
  }
}
.assets-list {
  .list-Record{
    width: 90%;
    margin: 0 auto;
    padding: 10px 10px;
    background: #393948;
    box-shadow: 0 0 34px 0 rgba(34,34,44,0.25);
    border-radius: 6px;
    .mint-button--normal{
      background: #57576B;
      border-radius: 6px;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.29px;
      text-align: center;
    }
    .out{
      margin: 10px 0;
      .mint-button--normal{
        display: block;
        background: #4CA1F9;
        width: 100%;
      }
    }
    .pay{
      display: flex;
      margin-bottom: 18px;
      div{
        flex: 1;
        .mint-button--normal{
          display: block;
          width: 100%;
        }
      }
      .zone{
        width: 20px;
      }
    }
  }
  table {
    color: #fff;
    border-spacing: 0px;
    tr{
      height: 60px;
      margin-bottom: 2px;
    }
    thead{
      tr {
        th{
          border-bottom: 1px solid rgba(255,255,255,0.4);
          font-weight: normal;
          text-align: left;
          font-size: 12px;
          letter-spacing: 0.4px;
        }
      }
    }
    tbody{
      tr{
        td{
          opacity: 0.5;
          font-size: 12px;
          color: #FFFFFF;
          letter-spacing: 0.25px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.4);
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
.mint-actionsheet-listitem, .mint-actionsheet-button{
  border-radius: 6px;
}

</style>


