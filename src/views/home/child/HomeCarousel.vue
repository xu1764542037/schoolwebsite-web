<template>
  <div id="HomeCarousel">
    <el-carousel indicator-position="outside" height="950px">
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
}

</style>