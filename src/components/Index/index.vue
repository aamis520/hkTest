<template lang="html">
  <div class="index-page">


    <mt-tabbar>
      <mt-tab-item>资产</mt-tab-item>
      <mt-tab-item>OTC</mt-tab-item>
      <mt-tab-item>资产</mt-tab-item>
      <mt-tab-item>资产</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import indexHot from './Index_hot'
import indexPhone from './Index_phone'
import indexGoods from './Index_accessories'
import indexFamily from './Index_family'
import footBar from '../public/footer'
export default {
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        initialSlide: 1,
        loop: true,
        paginationClickable :true,
        pagination: '.swiper-pagination',
      },
      modalShow: false
    }
  },
  computed　: {
    count () {
      return this.$store.state.cart.cartInfos.total_nums
    },
    homeUrl() {
      if(!this.$store.state.cart.login){
        return '/login'
      } else {
        return '/user'
      }
    }
  },
  methods : {
    showModal: function() {
      if(this.modalShow) {
        this.modalShow = false
      } else {
        this.modalShow = true
      }

    },
    searchhandle: function(e) {
      let keywords = document.querySelector('.keywords').value.trim()
      if(keywords === '') {
        this.$toast({
          message: '未输入查找关键词',
          position: 'top'
        })
        e.preventDefault()
      } else {
        localStorage.setItem('keywords',keywords)
        this.$router.push({path:'/search'})
      }

    }
  },
  components: {
    indexHot,
    indexPhone,
    indexGoods,
    indexFamily,
    footBar
  }
}
</script>

<style lang="css">
.header {
  width: 100%;
  height: 4.4rem;
  background-color: #fff;
}
.header img {
  width: 11rem;
  height: 2rem;
  margin: 1rem 0 0 1.2rem;
  float: left;
}
.header .iconButton {
  float: right;
  width: 4.4rem;
  height: 4.4rem;
  padding: 1.3rem;
  box-sizing: border-box;
}
.header:after{
  content:'';
  clear: both;
}
.iconButton .icon {
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  background-size: cover;
  vertical-align: middle;
}
.search {
  background: url(../../assets/images/iconSearch.png) center center no-repeat;
}
.home {
  background: url(../../assets/images/iconHome.png) center center no-repeat;
}
.car {
    background: url(../../assets/images/iconCar.png) center center no-repeat;
}
.number {
  position: absolute;
  background: #f74554;
  min-width: 1rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 12px;
  color: #fff;
  top: .3rem;
  right: .3rem;
  text-align: center;
  padding: 0 .3rem;
  border-radius: 1rem;
  box-sizing: border-box;
  font-style: normal;
}

.swiper-slide img{
  width: 100%;
}
.index-page .swiper-pagination-bullet {
  width: 0.8rem;
  height: 0.8rem;
  background-color: #fff;
}

.view {
  width: 100%;
  height: 10rem;
}
.view a {
  text-decoration: none;
}
.view{
  width: 100%;
  height: 10rem;
  background-color: #fff;
}
.view .list{
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  display: -webkit-flex;
}
 .list .item{
  width: 25%;
  height: 10rem;
  padding-top: 1.5rem;
  box-sizing: border-box;
}
.item .text {
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  font-size: 1.4rem;
  display: block;
  color: #5c5c5c;
  overflow: hidden;
  margin-top: .5rem;
  text-decoration: none;
}
.view .item .icon {
  display: block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0 auto;
}
.phone {
  background:#46c0ff url(../../assets/images/view_icon_03.png)center center no-repeat;
  background-size: 1.8rem;
}
.good {
  background:#94d00b url(../../assets/images/view_icon_06.png)center center no-repeat;
  background-size: 2.2rem;
}
.service {
  background:#ff9c7d url(../../assets/images/view_icon_09.png)center center no-repeat;
  background-size: 2rem;
}
.club {
  background:#ff71aa url(../../assets/images/view_icon_12.png)center center no-repeat;
  background-size: 4rem;
}
.mask {
  height: 245rem;
  position: absolute;
  left: 0;
  top: 4.4rem;
  right: 0;
  background: #000;
  opacity: .6;
  z-index: 999;
}
.search-modal {
  position: absolute;
  top: 4.4rem;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  border-top: 1px solid #ddd;
  box-shadow: 0 1px 4px rgba(0,0,0,.2)!important;
}
.search-modal .search-box{
  width: 100%;
  transition: top .2s linear,opacity .2s linear;
}
.search-box .input-box{
  margin-top: 1rem;
  height: 3.2rem;
  width: 26rem;
  margin-left: 1.5rem;
  border: 1px solid #efefef;
  border-radius: 3px;
  float: left;
  display: flex;
  align-items: center;
}
.input-box input {
  border: none;
  outline: none;
  flex:1;
}
.input-box .searchIcon {
  display: block;
  width: 2rem;
  height: 2rem;
  background: url(../../assets/images/iconSearch.png) no-repeat;
  background-size: cover;
  /*margin-top: 2rem;
  margin-right: 1rem;*/
}
.search-box .cancel {
  float: right;
  width: 3rem;
  margin-top: 10px;
  line-height: 3.2rem;
  color: #5c5c5c;
  font-size: 1.4rem;
}
.search-category {
  padding-top: 2rem;
  margin-left: 2rem;
  clear: both;
}
.subcate dt{
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 2rem;
}
.dd a{
  margin-right: 2rem;
  font-size: 1.4rem;
  color: #5c5c5c
}
</style>
