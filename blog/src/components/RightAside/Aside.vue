<template>
  <div class="right">
    <div class="top_avatar border_ra5">
      <img src="/static/images/avatar.jpg" alt="">
      <p class="name">Jayshi</p>
      <el-row>
        <el-button type="primary" size="small" round>关注</el-button>
        <el-button type="success" size="small" round @click="to_me">了解</el-button>
      </el-row>
    </div>
    <div class="calender border_ra5">
      <el-calendar>

      </el-calendar>
      <p>开始写博客的第1天，共完成1篇文章</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Aside",
      methods:{
        to_me() {
          this.$router.push({name: 'AboutMe'})
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
