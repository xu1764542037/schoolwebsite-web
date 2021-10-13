<template>
  <div id="BSSFIMid">
    <img id="BSSFIMid-Img" src="@/assets/img/bs-student/findInfo/testP.jpg">
    <div style="text-align: center">
      <span id="BSSFIMid-Name">{{$store.state.Name}}</span>
    </div>
    <span id="BSSFIMid-StuNum">{{$store.state.StudentId}}</span>
    <span id="BSSFIMid-Vertical">|</span>
    <span id="BSSFIMid-Sex">{{$store.state.Sex}}</span>
  </div>
</template>

<script>
export default {
  name: "BSSFIMid"
}
</script>

<style scoped>
#BSSFIMid {
  position: absolute;
  margin-top: 60px;
  width: 100%;
  height: 190px;
  background: #043052;
  color: white;

}

#BSSFIMid-Img {
  position: absolute;
  height: 150px;
  width: 150px;
  margin-left: 45%;
  margin-top: -50px;
  border-radius: 50%;
  border: 10px solid rgba(255,255,255,.6);
}

#BSSFIMid-Name {
  position: absolute;
  font-size: 40px;
  margin-top: 100px;
  left: 0;
  right: 10px;
  top: 0;
  bottom: 0;
}

#BSSFIMid-StuNum {
  position: absolute;
  font-size: 18px;
  margin-left: 735px;
  margin-top: 160px;
}

#BSSFIMid-Vertical {
  position: absolute;
  font-size: 18px;
  margin-left: 840px;
  margin-top: 158px;

}

#BSSFIMid-Sex {
  position: absolute;
  font-size: 18px;
  margin-left: 855px;
  margin-top: 160px;

 }
</style>