<template>
  <div id="BSHome">
    <div id="BSHome-InAndOut">
      <in-and-out></in-and-out>
    </div>
    <div id="BSHome-InSchool">
      <in-school></in-school>
    </div>
    <div id="BSHome-HistoricalAttendance">
      <historical-attendance></historical-attendance>
    </div>
    <div id="BSHome-NowInSchool">
      <h2>实时考勤数据</h2>
      <now-in-school></now-in-school>
      <div id="BSHome-NowInSchool-NameBox">
        <p class="NowInSchool-Name">应到人数</p>
        <p class="NowInSchool-Name">目前在校人数</p>
        <p class="NowInSchool-Name">正常到校人数</p>
        <p class="NowInSchool-Name">全天请假人数</p>
        <p class="NowInSchool-Name">迟到人数</p>
        <p class="NowInSchool-Name">早退人数</p>
        <p class="NowInSchool-Name">正常离校人数</p>
      </div>
      <div id="BSHome-NowInSchool-DataBox">
        <p class="NowInSchool-Data">9212</p>
        <p class="NowInSchool-Data">7923</p>
        <p class="NowInSchool-Data">7632</p>
        <p class="NowInSchool-Data">1289</p>
        <p class="NowInSchool-Data">120</p>
        <p class="NowInSchool-Data">101</p>
        <p class="NowInSchool-Data">341</p>
      </div>
    </div>
  </div>
</template>

<script>
import InAndOut from "@/components/common/Echats/InAndOut";
import InSchool from "@/components/common/Echats/InSchool";
import HistoricalAttendance from "@/components/common/Echats/HistoricalAttendance";
import NowInSchool from "@/components/common/Echats/NowInSchool";


export default {
  name: "BackStageHome",
  components: {
    InAndOut,
    InSchool,
    HistoricalAttendance,
    NowInSchool
  },
  created() {

  }
}
</script>

<style scoped>
#BSHome {
  position: fixed;
  width: 1620px;
  height: 837px;
  margin-top: 100px;
  margin-left: 300px;
  background: #011B30;
}

#BSHome-InAndOut {
  position: absolute;
}

#BSHome-InSchool {
  position: absolute;
  margin-left: 600px;
}

#BSHome-HistoricalAttendance {
  position: absolute;

  margin-top: 350px;
}

#BSHome-NowInSchool {
  position: absolute;
  margin-left: 1295px;
  margin-top: 20px;
  width: 300px;
  height: 800px;
  background: #043052;
}

#BSHome-NowInSchool h2 {
  color: white;
  position: absolute;
  font-size: 24px;
  margin-left: 73px;
  margin-top: 5px;
}

#BSHome-NowInSchool-NameBox {
  position: absolute;
  height: 400px;
  width: 100px;
  margin-left: 30px;
}

#BSHome-NowInSchool-DataBox {
  position: absolute;
  height: 400px;
  width: 50px;
  right: 0;
  margin-right: 30px;
}


.NowInSchool-Name {
  position: relative;
  float: left;
  margin-top: 30px;
  font-size: 16px;
  color: white;
}

.NowInSchool-Data {
  position: relative;
  float: right;
  margin-top: 30px;
  font-size: 16px;
  color: #1C92EA;
}
</style>