<template>
  <div id="BSSFITop">
    <img id="BSSFITop-Img" src="@/assets/img/bs-student/findInfo/local.svg">
    <span id="BSSFITop-City">位置：{{city}}</span>
    <span id="BSSFITop-Time">注册时间：{{$store.state.CreateTime}}</span>
  </div>
</template>

<script>
export default {
  name: "BSSFITop",
  data() {
    return {
      city: "南昌"
    }
  }
}
</script>

<style scoped>
#BSSFITop {
  position: absolute;
  height: 60px;
  width: 100%;
  background: #03243E;
  color: white;

}

#BSSFITop-Img {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: 19px;
  margin-left: 53px;
}

#BSSFITop-City {
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  margin-top: 15px;
  margin-left: 80px;
}

#BSSFITop-Time {
  position: absolute;
  font-size: 18px;
  font-weight: 700;
  top: 15px;
  right: 50px;

}
</style>