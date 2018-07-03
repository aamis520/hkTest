<template>
  <div class="login">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="login-form">
      <mt-field placeholder="邮箱或手机号" v-model="form.phone"></mt-field>
      <mt-field placeholder="密码" type="password" v-model="form.password"></mt-field>
      <mt-button type="primary" @click="login">登录</mt-button>
      <router-link to="/">忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    login : function () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
.mint-header{
  background: #fff;
  color: #000;
  background-image: none;
}
.login-form{
  width: 80%;
  margin: 0 auto;
  margin-top: 80px;
}
.mint-button{
  display: block;
  width: 100%;
}
</style>
