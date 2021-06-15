<template>
  <div id="app">
    <div class="left-nav">
       <el-menu
        router
        :collapse-transition="false"
        :default-active="$route.path"
        unique-opened
        :collapse="isCollapse"
         background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
        <el-submenu
          :index="String(index)"
          :key="String(index)"
          v-for="(item, index) in menuList"
        >
          <template slot="title">
            <span>{{ item.menu }}</span>
          </template>
          <template v-for="(subMenu, subIndex) in item.children">
            <el-menu-item
               class="sub-item"
              :key="index + '' + subIndex"
              :index="subMenu.path"
            >
              <span>{{ subMenu.menu }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </el-menu>
    </div>
    <div class="content"><router-view /></div>
  </div>
</template>
<script>
import menuList from '@/config/nav'

export default {
  data () {
    return {
      menuList,
      isCollapse: false
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 10px;
  height: 100%;
}
::v-deep .el-submenu .el-menu-item {
    min-width: 167px !important;
}
.left-nav {
  position: fixed;
  top:0;
  bottom: 0;
    width: 168px;
   left: 0;
   z-index: 10;
   > ul {
     height: 100%;
   }
}
.content {
  margin-left: 168px;
  height: 100%;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
