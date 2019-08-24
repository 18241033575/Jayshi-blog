<template>
  <!-- 底部 -->
  <div id="foot">
    <div class="foot_box">
      <p class="cp">Copyright © 2019 - Jayshi Blog. All Rights Reserved</p>
      <p>
        <router-link to="">
          条款和免责
        </router-link>
        |
        <router-link to="">
          关于本站
        </router-link>
      </p>
      <p>浙ICP备18049156号-2(浙公网安备 33038102331168号)</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  #foot{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
  }
  .foot_box{
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
    max-width: 1180px;
    text-align: center;
    font-size: 14px;
    color: #999;
    line-height: 18px;
  }
  .cp{
    color: #333333;
    font-size: 18px;
    line-height: 24px;
  }
</style>
