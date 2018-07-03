<template>
  <div>
    <div class="header">
      <p class="title">行情</p>
      <div id="choose" @click="openSheet">
        <span>{{title}}</span>
        <span class="sanjiao">
          <i :class="upOrDown ? 'up' : 'down'"></i>
        </span>
      </div>
    </div>
    <div class="list">
      <table>
        <thead>
          <tr>
            <th>名称/24小时成交</th>
            <th>最新价</th>
            <th>24H涨幅</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n">
            <td>
              <p class="title">ETC/HKDT</p>
              <p class="desc">成交量2054873.31</p>
            </td>
            <td>
              <p class="title">449.98</p>
            </td>
            <td>
              <p class="title fall">-0.79%</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
      sheetVisible: false,
      title: 'gate.io',
      upOrDown: false,
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
  #choose{
    position: absolute;
    top: 0;
    bottom: 0;
    margin:  auto;
    left: 20px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    width: 90px;
    height: 25px;

  }
}
.list{
  width: 90%;
  margin: 0 auto;
  table {
    color: #fff;
    width: 100%;
    border-spacing: 0px;
    tr{
      height: 60px;
      margin-bottom: 2px;
    }
    thead{
      tr {
        background: rgba(36,36,47,.3);
        padding: 0 5px;
        th{
          font-weight: normal;
          text-align: left;
          font-size: 12px;
          letter-spacing: 0.4px;
          opacity: 0.5;
        }
        th:last-child{
          text-align: right;
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
          border-bottom: 1px solid rgba(255,255,255,0.05);
          .title{
            font-size: 14px;
            line-height: 20px;
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


