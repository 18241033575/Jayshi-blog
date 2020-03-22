<template>
  <div id="login" class="com_style">
    <h3>登录</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account" type="text" minlength="6" maxlength="16" placeholder="请输入账号，长度6-16个字符"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" minlength="6" maxlength="16" placeholder="请输入密码，长度6-16个字符"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
      <el-form-item>
        <p class="to_other">还没有账号？<router-link to="register">立即注册</router-link></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Login",
      data() {
        return{
          form: {
            account: '',
            password: '',
          },
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        }
      }
    }
</script>

<style scoped>
  #login{
    padding: 20px;
    width: 30%;
    min-width: 300px;
    border: 1px solid #EEE;
    background-color: #fff;
    color: #666666;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  #login h3{
    margin-bottom: 30px;
    text-align: center;
  }
</style>
