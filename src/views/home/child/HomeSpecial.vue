<template>
  <div class="HomeSpecial">
    <div class="HomeSpecial-Title">专题 · 网站</div>
    <div class="HomeSpecial-img">
      <img src="@/assets/img/home/HomeNews/2.png" width="1950px" height="500px">
    </div>
    <div class="HomeSpecial-Content">
      <div>
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/1.png" width="180px" height="400px"></a>
        </MousePassing>
      </div>
      <div>
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/1.png" width="180px" height="400px"></a>
        </MousePassing>
      </div>
      <div>
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/1.png" width="180px" height="400px"></a>
        </MousePassing>
      </div>
      <div>
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/1.png" width="180px" height="400px"></a>
        </MousePassing>
      </div>
    </div>
  </div>
</template>

<script>
import MousePassing from "../../../components/common/Animation/MousePassing";
export default {
name: "HomeSpecial",
  components: {
    MousePassing
  }
}
</script>

<style scoped>
  .HomeSpecial {

  }
  .HomeSpecial-Title {
    position: relative;
    top: 30px;
    left: 100px;
    z-index: 999;
    writing-mode: vertical-lr;
    font-size: 64px;
    line-height: 1.3;
    text-align: left;
  }
  .HomeSpecial-img {
    position: absolute;
    left: -99px;
    top: -30px;
    z-index: 1;
  }
  .HomeSpecial-Content {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: -30px;
    left: 300px;
    width: 1000px;
    height: 500px;
    z-index: 99;
  }
  .HomeSpecial-Content a {
    position: absolute;
    top: 40px;
  }
  .MousePassing {
    position: absolute;
    z-index: 99;
  }
</style>