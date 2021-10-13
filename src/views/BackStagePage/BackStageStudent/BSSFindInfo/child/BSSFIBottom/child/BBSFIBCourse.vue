<template>
  <div id="BBSFIBCourse">
    <el-table
        :data="tableData"
        :page-size = "8"
        style="width: 60%; margin-left: 20%; margin-top: 30px;font-weight: 700;color: #B8D2FA;">
      <el-table-column
          align="center"
          type="index"
          width="82">
      </el-table-column>
      <el-table-column
          align="center"
          prop="course.courseName"
          label="课程名称"
          width="890">
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
  name: "BBSFIBCourse",
  data() {
    return {
      tableData: [],
      stuNum: '',
      name: '',
      tel: '',
      QQ: '',
      currentPage: 1,
      totalDataNum: 0,
      CreateTime: '',
      index: 0
    }
  },
  beforeCreate() {
    console.log(this.$store.state.StudentClassId);
    selectTeacher_Class_CourseById(null,null,this.$store.state.StudentClassId).then( res => {
      // console.log(res);
      this.tableData = res.obj
      this.totalDataNum = res.obj.length
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