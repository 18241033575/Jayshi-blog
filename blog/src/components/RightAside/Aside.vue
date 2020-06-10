<template>
  <div class="right">
    <div class="top_avatar border_ra5">
      <img src="/static/images/avatar.jpg" alt="">
      <p class="name">Jayshi</p>
      <el-row>
        <el-button :type="loginInfo.focus === 0 ? 'primary' : 'warning'" size="small" round @click="focus">关注</el-button>
        <el-button type="success" size="small" round @click="toMe">了解</el-button>
      </el-row>
    </div>
    <div class="notice border_ra5">
      <span>博客公告:</span>
      <p><i class="el-icon-chat-dot-square"></i>{{ notice }}</p>
    </div>
    <div class="calender border_ra5">
      <el-calendar>

      </el-calendar>
      <p>开始写博客的第1天，共完成1篇文章</p>
    </div>
  </div>
</template>

<script>
  import { message } from "../../../static/js/common";
  export default {
        name: "Aside",
      data() {
          return {
            notice: '',
            loginInfo: {},
            btnFlag: true
          }
      },
      methods:{
        toMe() {
          this.$router.push({name: 'AboutMe'})
        },
        focus() {
          if (this.btnFlag) {
            this.btnFlag = false;
            this.loginInfo.focus = this.loginInfo.focus === 0 ? 1 : 0;
            this.$axios.post('/api/blog_focus', { account: this.loginInfo.account, focus: this.loginInfo.focus })
              .then(res => {
                console.log(res);
                if (res.data.code === 200) {
                  message({_this: this, message: this.loginInfo.focus === 0 ? '取消关注成功' : '关注成功', type: 'success'})
                }else {
                  message({_this: this, message: res.data.msg, type: 'error'})
                }
              });
            let timer = setTimeout(() => {
              this.btnFlag = true;
              clearTimeout(timer)
            }, 2000)
          }

        }
      },
      created() {
        this.$axios.get('/api/netSetting')
          .then(res => {
            if (res.data.code === 200) {
              res.data.data.forEach((item) => {
                if (item.keyName === 'notice') {
                  this.notice = item.value
                }
              });
              localStorage.setItem('NETSETTING', JSON.stringify(res.data.data))
            }
          });

        let login = localStorage.getItem('USER');
        if (login) {
          this.loginInfo = JSON.parse(login)
        }
      }
    }
</script>

<style scoped>

  .right{
    margin: 10px auto 0;
    width: 30%;
    min-width: 320px;
  }
  .right .notice{
    margin-top: 20px;
    padding: 20px 15px;
    background-color: #ffffff;
    font-size: 12px;
    color: #999999;
    line-height: 18px;
  }
  .notice span{
    font-size: 14px;
    color: #666666;
  }
  .notice span:before{
    content: "";
    position: absolute;
    width: 5px;
    height: 18px;
    margin-left: -10px;
    border-radius: 0 5px 5px 0;
    background-color: #83e1f7;
  }
  .notice p{
    letter-spacing: 1px;
  }
  .notice i{
    margin-right: 5px;
  }
  .right .top_avatar{
    width: 100%;
    height: 250px;
    text-align: center;
    background-color: #ffffff;
  }
  .top_avatar img{
    margin-top: 30px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 10px solid #95dff0;
    transition: .5s;
  }
  .top_avatar img:hover{
    box-shadow: 0 3px 15px #ccc;
    transform: translateY(-5px);
  }
  .top_avatar .name{
    margin-top: 5px;
    font-size: 24px;
    color: #666666;
  }
  .el-row{
    margin-top: 15px;
  }
  .el-row button{
    min-width: 80px;
  }
  .calender{
    margin-top: 20px;
    background-color: #ffffff;
  }
  .calender p{
    padding: 5px 20px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
  }
  .el-calendar .el-calendar-table .el-calendar-day{
    height: auto;
    font-size: 14px;
    text-align: center;
  }
</style>
