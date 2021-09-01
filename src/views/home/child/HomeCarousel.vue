<template>
  <div id="HomeCarousel">
    <el-carousel indicator-position="outside" height="1000px">
      <el-carousel-item>
        <img src="@/assets/img/home/1.png" width="1920px" height="1000px">
      </el-carousel-item>
      <el-carousel-item >
        <img src="@/assets/img/home/2.png" width="1920px" height="1000px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/3.png" width="1920px" height="1000px">
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/img/home/4.png" width="1920px" height="1000px">
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
name: "Carousel",

}
</script>

<style scoped>
#HomeCarousel {
  position: relative;
  width: 1920px;
  height: 1000px;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>