<template>
    <el-col :span="12" class="leftNav">
      <el-menu
          :router="true"
          :default-active="this.$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#043052"
          text-color="#fff"
          active-text-color="#6861D8">
        <el-menu-item index="/BSHome">
          <i class="el-icon-message"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>管理员管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/BSAdmin/ModifyFraction">成绩管理</el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">课程管理</template>
              <el-menu-item index="/BSAdmin/Course/CourseAllocation">课程分配管理</el-menu-item>
              <el-menu-item index="/BSAdmin/Course/CourseToTeacher">课程对应老师</el-menu-item>
            </el-submenu>
            <el-submenu index="2-3">
              <template slot="title">班级管理</template>
              <el-menu-item index="/BSAdmin/Class/ClassToTeacher">班级对应老师</el-menu-item>
              <el-menu-item index="/BSAdmin/Class/ClassToStudent">班级对应学生</el-menu-item>
            </el-submenu>
            <el-submenu index="2-4" :disabled="!test">
              <template slot="title">人员管理</template>
              <el-menu-item index="/BSAdmin/user/ModifyAdmin">管理员管理</el-menu-item>
              <el-menu-item index="/BSAdmin/user/ModifyTeacher">教师管理</el-menu-item>
              <el-menu-item index="/BSAdmin/user/ModifyStudent">学生管理</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-hot-water"></i>
            <span>教师管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/BSTeacher/ModifyFraction">成绩管理</el-menu-item>
            <el-menu-item index="/BSTeacher/ModifyStudent">学生管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-bicycle"></i>
            <span>学生管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/BSStudent/FindInfo">信息查询</el-menu-item>
            <el-menu-item index="/BSStudent/FindFraction">成绩查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/BSSetting">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      test: true,
      tesss: "/BSAdmin/Course/CourseAllocation"
    }
  },
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