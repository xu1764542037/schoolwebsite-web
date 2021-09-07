<template>
    <el-col :span="12" class="leftNav">
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
            <i class="el-icon-user"></i>
            <span>管理员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">成绩管理</el-menu-item>
            <el-submenu index="1-2">
              <template slot="title">课程管理</template>
              <el-menu-item index="1-2-1">课程分配管理</el-menu-item>
              <el-menu-item index="1-2-2">课程对应老师</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">班级管理</template>
              <el-menu-item index="1-3-1">班级对应老师</el-menu-item>
              <el-menu-item index="1-3-2">班级对应学生</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">人员管理</template>
              <el-menu-item index="1-4-1">管理员管理</el-menu-item>
              <el-menu-item index="1-4-2">教师管理</el-menu-item>
              <el-menu-item index="1-4-3">学生管理</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-hot-water"></i>
            <span>教师管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">成绩管理</el-menu-item>
            <el-menu-item index="2-2">学生管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-bicycle"></i>
            <span>学生管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">信息查询</el-menu-item>
            <el-menu-item index="3-2">成绩查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>

      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "navMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style scoped>
.leftNav {
  position: absolute;
  margin-top: 100px;
  width: 301px;
}
</style>