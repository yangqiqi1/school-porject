<template>
    <div class="navLeft">
      <el-row class="tac">
        <el-col :span="24">
          <div><img style="height:50px;margin:15px" src="../assets/LOGO.png"></div>
          <el-menu
            default-active="1"
            :router="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            text-color="#424E67"
            active-text-color="#3B8CFF"
            active-background-color="#E3E8EB"
            >
            <el-menu-item index="/index">
              <i class="el-icon-star-on"></i>
              <span>首    页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-time"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item index="/class">班级列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>教师管理</span>
              </template>
              <el-menu-item index="/teacher">教师列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>学生管理</span>
              </template>
              <el-menu-item index="/student">学生列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>课程管理</span>
              </template>
              <el-menu-item index="/course">课程列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>基础管理</span>
              </template>
              <el-menu-item index="/users">用户列表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu{
    background-color: rgba(255, 255, 255, 0);
    border: none;
    margin: auto;
    width: 100%;
  }
</style>
