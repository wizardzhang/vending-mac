<template>
  <div class="container">
    <el-container class="home-container">
      <el-header>
        <div>
          <img src="">
          <span class="header-span">自动售货机</span>
        </div>
        <el-button type="info" @click="logout">退出</el-button></el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item index="1-4">
                <template slot="title">选项4</template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/*  import HeadBar from "./HeadBar/HeadBar"
  import NavBar from "./NavBar/NavBar"
  import MainContent from "./MainContent/MainContent"*/

  export default {
    components:{

    },

    methods:{
      async logout() {
        await this.$store.dispatch('user/logout')
        this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      }
    }
  };
</script>

<style scoped lang="scss">
  .home-container {
    height: 100%;
  }

  .el-header {
    background-color: #36a3f7;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    font-size: 20px;
    /*.header-span{
      display: flex;
      align-items: center;
    }*/
  }

  .el-aside {
    background-color: #34bfa3;
  }

  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    // background: rgba(224, 234, 235, 0.1);
  }
</style>
