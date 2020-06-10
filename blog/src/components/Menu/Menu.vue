<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item,index) in menuData" :index="JSON.stringify(index+1)" :key="index">
        <router-link :to="(item.sign?item.url+'?part='+item.sign:item.url)">{{ item.name }}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        activeIndex: '1',
        menuData: [
          {
            name: '首页',
            url: '/',
            sign: ''
          }
        ]
      }
    },
    methods: {
     /* handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        console.log(res);

      }*/
    },
    created() {
      this.$axios.get('/api/category')
        .then(res => {
          if (res.data.code === 200) {
            let data = res.data.data
            for (let item of data) {
              let midData = {};
              midData.name = item.value;
              midData.url = '/articles';
              midData.sign = item.value;
              this.menuData.push(midData)
            }
            this.menuData.push({
              name: '关于我的',
              url: '/about_me',
              sign: ''
            })
          }
        })
    }
  }
</script>

<style scoped>
  #menu {
    margin-bottom: 20px;
  }

  .el-menu-item {
    padding: 0;
  }

  .el-menu-item a {
    display: inline-block;
    padding: 0 20px;
    width: 100%;
    height: 100%;
  }
</style>
