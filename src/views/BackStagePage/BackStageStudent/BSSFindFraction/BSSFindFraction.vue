<template>
 <div id="BSSFindFraction">
  <b-b-s-f-f-table></b-b-s-f-f-table>
 </div>
</template>

<script>
import BBSFFTable from "./child/BBSFFTable/BBSFFTable";

export default {
  name: "BSSFindFraction",
  components: {
    BBSFFTable
  }
}
</script>

<style scoped>
#BSSFindFraction {
  position: fixed;
  width: 1620px;
  height: 837px;
  margin-top: 100px;
  margin-left: 300px;
  background: #011B30;
}
</style>