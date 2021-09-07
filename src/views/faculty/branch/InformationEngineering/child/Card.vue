<template>
<div id="Card">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <h1><slot name="Title"></slot></h1>
      <el-button style="float: right; padding: 0 10px" type="text">查看更多</el-button>
    </div>
<!--    <div v-for="o in 4" :key="o" class="text item">-->
<!--      {{'列表内容 ' + o }}-->
<!--    </div>-->
    <div class="text item">
      <slot></slot>
    </div>

  </el-card>
</div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.text {
  font-size: 24px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 580px;
}
</style>