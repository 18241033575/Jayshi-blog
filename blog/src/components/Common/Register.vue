<template>
  <div id="reg" class="com_style">
    <h3>注册</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" maxlength="10" placeholder="请输入昵称 最长10个字符"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :before-upload="beforeAvatarUpload"
          :on-success="handleAvatarSuccess">
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
          <el-button size="small" type="primary">点击上传</el-button>
          <el-button size="small" type="default" @click.stop="delete_avatar">删除</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M，如果没有上传，将使用系统默认头像。</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.account" type="text" minlength="6" maxlength="16" placeholder="请输入账号，长度6-16个字符"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" minlength="6" maxlength="16" placeholder="请输入密码，长度6-16个字符"></el-input>
      </el-form-item>
      <el-form-item label="重复密码">
        <el-input v-model="form.confirm_password" minlength="6" maxlength="16" type="password" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
      <el-form-item>
        <p class="to_other">已有账号？<router-link to="login">立即登录</router-link></p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Register",
      data() {
          return{
            form: {
              nickname: '',
              account: '',
              password: '',
              confirm_password: '',
              imageUrl: ''
            },
          }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        beforeAvatarUpload(file) {
          const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png');
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG、PNG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        handleAvatarSuccess(res, file) {
          this.form.imageUrl = URL.createObjectURL(file.raw);
        },
        delete_avatar(){
          this.form.imageUrl = ''
        }
      }
    }
</script>

<style scoped>
  #reg{
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
  #reg h3{
    margin-bottom: 30px;
    text-align: center;
  }
  .avatar{
    margin-right: 20px;
    width: 100px;
    height: 100px;
  }
</style>
