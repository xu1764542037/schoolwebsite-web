<template>
  <div id="BSSFindInfo">
    <div id="BSSFindInfo-Top">
      <b-s-s-f-i-top></b-s-s-f-i-top>
    </div>
    <div id="BSSFindInfo-Mid">
      <b-s-s-f-i-mid></b-s-s-f-i-mid>
    </div>
    <div id="BSSFindInfo-Bottom">
      <b-s-s-f-i-bottom></b-s-s-f-i-bottom>
    </div>
  </div>
</template>

<script>
import BSSFITop from "./child/BSSFITop";
import BSSFIMid from "./child/BSSFIMid";
import BSSFIBottom from "./child/BSSFIBottom/BSSFIBottom";

export default {
  name: "BSSFindInfo",
  components: {
    BSSFITop,
    BSSFIMid,
    BSSFIBottom
  }
}
</script>

<style scoped>
#BSSFindInfo {
  position: fixed;
  width: 1620px;
  height: 837px;
  margin-top: 100px;
  margin-left: 300px;
  background: #011B30;
}
</style>