<template>
  <div class="login">
    <hkheader :title="title" :showBack="showBack"></hkheader>
    <div class="login-form">
      <mt-field placeholder="邮箱或手机号" v-model="form.phone"></mt-field>
      <mt-field placeholder="密码" type="password" v-model="form.password"></mt-field>
      <mt-button type="primary" @click="login" class="loginBtn">登录</mt-button>
      <p class="noAccount">没有HKDT账号？
        <router-link to="/regist">注册</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import hkheader from '@/components/header'
export default {
  components: {
    hkheader
  },
  data () {
    return {
      title: '登录',
      showBack: false,
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    login : function () {
      console.log(this.form)
      this.$router.push({
        path: '/',
        query: {}
      })
    }
  }
}
</script>

<style scoped>

</style>
