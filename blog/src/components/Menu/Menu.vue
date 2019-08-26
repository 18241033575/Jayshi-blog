<template>
  <div id="menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
          },
          {
            name: 'Html/Css',
            url: '/article',
            sign: 'html-css'
          },
          {
            name: 'JavaScript',
            url: '/test',
            sign: 'javascript'
          },
          {
            name: 'Node',
            url: '/article',
            sign: 'node'
          },
          {
            name: '关于我的',
            url: '/about_me',
            sign: 'about'
          },
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
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
