<template>
  <div id="BBSFIBTeacher">
    <el-table
        :data="tableData"
        :page-size = "8"
        style="width: 60%; margin-left: 20%; margin-top: 30px;font-weight: 700;color: #B8D2FA;">
      <el-table-column
          align="center"
          prop="teacher.id"
          label="教师编号"
          width="250">
      </el-table-column>
      <el-table-column
          align="center"
          prop="teacher.teacherName"
          label="姓名"
          width="220">
      </el-table-column>
      <el-table-column
          align="center"
          prop="course.courseName"
          label="课程">
      </el-table-column>
      <el-table-column
          align="center"
          prop="teacher.branch.branchName"
          label="所属分院">
      </el-table-column>
    </el-table>
    <el-pagination
        style="position: fixed; bottom:20px;margin-left: 38%;"
        background
        :page-size="8"
        :current-page.sync= "currentPage"
        layout="prev, pager, next"
        :total="totalDataNum">
    </el-pagination>
  </div>
</template>

<script>
import {selectTeacher_Class_CourseById} from "@/network/BackStage/BackStageStudent/BSSFindInfo/BSSFindInfo";

export default {
  name: "BBSFIBTeacher",
  data() {
    return {
      tableData: [],
      currentPage: 1,
      totalDataNum: 0,
      CreateTime: ''
    }
  },
  beforeCreate() {
    // console.log(this.$store.state.StudentClassId);
    selectTeacher_Class_CourseById(null,null,this.$store.state.StudentClassId).then( res => {
      // console.log(res);
      this.tableData = res.obj
      this.totalDataNum = res.obj.length
    })
  }
}
</script>

<style scoped>
#BBSFIBTeacher {
  text-align: center;
}

/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell{
  background-color: transparent;

}
/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background: rgba(255,255,255,.05);
}

</style>