<template>
  <div id="login" class="com_style">
    <h3>登录</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.account" type="text" minlength="4" maxlength="16" placeholder="请输入账号，长度4-16个字符"></el-input>
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
  import { message } from '../../../static/js/common';
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
  import store from '../../../vuex/store'
    export default {
        name: "Login",
      data() {
        return{
          form: {
            account: '',
            password: '',
          },
          subFormData: {},
          btnFlag: true
        }
      },
      store,
      methods: {
        onSubmit() {
          if (this.btnFlag) {
            this.btnFlag = false;
            this.subForm();
            let timer = setTimeout(() => {
              this.btnFlag = true;
              clearTimeout(timer)
            }, 2000)
          }
        },
        // 表单提交
        subForm() {
          if (!this.form.account) {
            message({_this: this, message: '请输入账号', type: 'error'});
            return
          }
          if (this.form.account.length < 4) {
            message({_this: this, message: '账号不得少于4个字符', type: 'error'});
            return
          }
          if (!this.form.password) {
            message({_this: this, message: '请输入密码', type: 'error'});
            return
          }
          if (this.form.password.length < 6) {
            message({_this: this, message: '密码不得少于6个字符', type: 'error'});
            return
          }
          this.addAction();
          this.subFormData.account = this.form.account;
          console.log(this.form.password);
          this.subFormData.password = this.$md5(this.form.password);
          this.$axios.post('/api/blog_login', this.subFormData)
            .then(res => {
              if (res.data.code === 200) {
                message({_this: this, message: res.data.msg, type: 'success'});
                localStorage.setItem('USER', JSON.stringify(res.data.data));
                let timer = setTimeout(() => {
                  this.$router.push({name: 'Index'});
                  clearTimeout(timer)
                }, 2000)
              }else {
                message({_this: this, message: res.data.msg, type: 'error'});
              }
              this.reduceAction()
            })
        },
        ...mapActions(['addAction','reduceAction']),
        ...mapMutations(['add', 'reduce'])
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
