<template>
  <div id="BBSFFTable">
    <el-table
        :data="tableData"
        v-loading="loading"
        :page-size = "8"
        style="width: 40%; margin-left: 30%; margin-top: 100px;font-weight: 700;color: #B8D2FA;">
      <el-table-column
          align="center"
          prop="course.courseName"
          label="课程名称"
          width="327">
      </el-table-column>
      <el-table-column
          align="center"
          prop="grade"
          label="分数"
          width="320">
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
import {selectGradeByStudentId} from "@/network/BackStage/BackStageStudent/BSSFindFraction/BSSFindFraction";

export default {
  name: "BBSFFTable",
  data() {
    return {
      loading: true,
      tableData: [],
      currentPage: 1,
      totalDataNum: 0,
      CreateTime: ''
    }
  },
  beforeCreate() {
    selectGradeByStudentId().then( res => {
      console.log(res);
      this.tableData = res.obj
      this.totalDataNum = res.obj.length
      setTimeout( () => {
        this.loading = false
      },500)
    })
  }
}
</script>

<style scoped>
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