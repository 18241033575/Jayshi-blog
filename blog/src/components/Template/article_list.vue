<template>
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
      </div>
    </div>
</template>

<script>
    export default {
        name: "article_list"
    }
</script>

<style scoped>
  .part_title{
    margin-top: 10px;
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
</style>
