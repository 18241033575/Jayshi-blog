<template>
    <div id="header">
       <div class="head_box">
          <div class="avatar">
            <router-link to="/">
              <img src="/static/images/logo.png" alt=""><h3>Jayshi</h3>
            </router-link>
          </div>
         <div class="login_group">
           <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
             <el-button slot="append" icon="el-icon-search"></el-button>
           </el-input>
           <router-link v-show="login_sign" to="login">
             登录
           </router-link>
           <router-link v-show="login_sign" class="reg" to="login">
             注册
           </router-link>
         </div>
       </div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        login_sign: true,
        search: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  #header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 60px;
    height: 60px;
    background-color: #ffffff;
    z-index: 2;
  }
  .head_box{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1180px;
    width: 100%;
  }
  .avatar a{
    display: inline-block;
    height: 60px;
    min-width: 68px;
    overflow: hidden;
  }
  .avatar a img{
    margin-left: 20px;
    width: 48px;
    height: 48px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
  }
  .avatar a h3{
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
  }
  .login_group{
    display: flex;
    justify-content: flex-end;
  }
  .login_group .el-input-group--append{
    margin-top: 10px;
    width: 100%;
  }
  .login_group input{
    width: 220px;
  }
  .login_group a{
    display: inline-block;
    min-width: 90px;
    width: 90px;
    height: 60px;
    text-align: center;
    color: #666666;
    text-decoration: none;
  }
  .login_group .reg{
    background-color: #95dff0;
    color: #ffffff;
  }
</style>
