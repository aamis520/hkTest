<template>
  <div>
    <assets-header :title="title"></assets-header>
    <div class="box">
        <div class="list" v-for="n in 4" :key="n">
        <div class="list-item">
          <p class="img">

          </p>
          <div>
            <p class="coin">HKDT</p>
            <p class="price">行情价格:38948.900HKD</p>
          </div>
          <p class="switch">
            <mt-switch v-model="value"></mt-switch>
          </p>
        </div>
      </div>
    </div>
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
      title: '资产种类',
      value: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.list{
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding-bottom: 20px;
  .list-item{
    width: 90%;
    margin: 0 auto;
    display: flex;
    -webkit-align-items:center;
    align-items:center;
    -webkit-justify-content:center;
    justify-content:center;
    div {
      flex: 1;
      .coin{
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0.29px;
      }
      .price{
        opacity: 0.5;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0.25px;
      }
    }
    .img{
      width: 40px;
      height: 40px;
      background: #ccc;
      margin:  auto 20px;
    }
    .switch{
      width: 52px;
      transform: scale(0.8);
      text-align: right;
    }
  }
}
.box{
  margin-top: 30px;
}
</style>


