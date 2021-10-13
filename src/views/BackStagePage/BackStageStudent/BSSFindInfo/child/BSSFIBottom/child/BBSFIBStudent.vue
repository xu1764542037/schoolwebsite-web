<template>
  <div id="BBSFIBStudent">
    <el-table
        :data="tableData"
        v-loading="loading"
        :page-size = "8"
        style="width: 60%; margin-left: 20%; margin-top: 30px;font-weight: 700;color: #B8D2FA;">
      <el-table-column
          align="center"
          prop="id"
          label="学号"
          width="250">
      </el-table-column>
      <el-table-column
          align="center"
          prop="studentName"
          label="姓名"
          width="220">
      </el-table-column>
      <el-table-column
          align="center"
          prop="tel"
          label="手机号">
      </el-table-column>
      <el-table-column
          align="center"
          prop="qq"
          label="QQ">
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
import {selectClassmate} from "@/network/BackStage/BackStageStudent/BSSFindInfo/BSSFindInfo";

export default {
  name: "BBSFIBStudent",
  data() {
    return {
      tableData: [],
      stuNum: '',
      name: '',
      tel: '',
      QQ: '',
      currentPage: 1,
      totalDataNum: 0,
      loading: true
    }
  },
  beforeCreate() {
    const ClassId = this.$store.state.StudentClassId
    selectClassmate(ClassId).then( res => {
      // console.log(res);
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
#BBSFIBStudent {
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