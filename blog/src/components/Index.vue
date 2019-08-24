<template>
  <!-- 首页 -->
  <div id="main">
    <!--<aside-content></aside-content>-->
    <div class="left">
      <div class="article_part">
        <div class="part_title">
          <i class="el-icon-star-on"></i>
          <h3>热门文章</h3>
        </div>
        <div class="articles">
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
          <div class="cell">
            <div class="cell_img">
              <img src="/static/images/logo.png" alt="">
            </div>
            <div class="cell_msg">
              <h4 class="ellipsis">设计模式-单例模式</h4>
              <p class="desc">单例模式的深入了解</p>
              <p class="tips"><span>前端</span><span>前端</span><span>前端</span><span>前端</span><span>前端</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="top_avatar border_ra5">
        <img src="/static/images/avatar.jpg" alt="">
        <p class="name">Jayshi</p>
        <el-row>
          <el-button type="primary" size="small" round>关注</el-button>
          <el-button type="success" size="small" round>了解</el-button>
        </el-row>
      </div>
      <div class="calender border_ra5">
        <el-calendar>

        </el-calendar>
        <p>开始写博客的第1天，共完成1篇文章</p>
      </div>
    </div>
  </div>
</template>

<script>
  import asideContent from './Aside/Aside';

  export default {
    components: {
      asideContent
    },
    name: "Index"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #main {
    display: flex;
    flex-wrap: wrap;
    margin: 80px auto 120px;
    width: 100%;
    max-width: 1180px;
  }
  .left {
    margin: 0 auto;
    width: 60%;
    min-width: 320px;
  }
  .part_title h3 {
    display: inline-block;
    padding: 0 0 10px 5px;
  }
  .articles{
    box-shadow: 2px 2px 5px #999;
    border-radius: 5px;
    overflow: hidden;
  }
  .cell {
    display: flex;
    align-items: center;
    padding: 10px 6px;
    border-bottom: 1px solid #EAEAEA;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #ffffff;
    cursor: pointer;
  }
  .cell:hover {
    background-color: #f9f9f9;
  }
  .cell .cell_img {
    margin: 0 20px;
    width: 100px;
    min-width: 100px;
    height: 100px;
    overflow: hidden;
  }
  .cell .cell_img img {
    width: 100%;
    height: 100%;
    transition: .5s;
  }
  .cell .cell_img img:hover {
    transform: scale(1.2);
  }
  .cell_msg {
     flex-grow: 1;
  }
  .cell_msg h4 {
    margin: 9px 0;
  }
  .cell_msg p {
    margin: 5px 0;
  }
  .cell_msg .desc {
    max-height: 40px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
  }
  .tips span{
    display: inline-block;
    margin: 10px 10px 0 0;
    padding: 5px 9px;
    border: 1px solid #EAEAEA;
    text-align: center;
    font-size: 12px;
    border-radius: 10px;
  }
  .tips span:hover{
    border: 1px solid rgb(87, 157, 221);
  }
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
  }
  .top_avatar img:hover{
    box-shadow: 0 3px 15px #ccc;
    transform: translateY(-5px);
    transition: .5ms;
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
</style>
