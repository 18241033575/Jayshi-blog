<template>
  <!-- 底部 -->
  <div id="foot">
    <div class="foot_box">
      <p class="cp">{{ copyright }}</p>
      <p style="margin: 5px 0">
        <router-link to="">
          条款和免责
        </router-link>
        |
        <router-link to="">
          关于本站
        </router-link>
      </p>
      <p>{{ beiAn }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        copyright: '',
        beiAn: ''
      }
    },
    created() {
      let data = JSON.parse(localStorage.getItem('NETSETTING'));
      data.forEach((item) => {
        if (item.keyName === 'copyright') {
          this.copyright = item.value
        }
        if (item.keyName === 'beiAn') {
          this.beiAn = item.value;
        }
      })
    }
  }
</script>

<style scoped>
  #foot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #ffffff;
  }

  .foot_box {
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
    max-width: 1180px;
    text-align: center;
    font-size: 14px;
    color: #999;
    line-height: 18px;
  }

  .cp {
    color: #333333;
    font-size: 18px;
    line-height: 24px;
  }
</style>
