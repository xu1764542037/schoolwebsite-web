<template>
  <div class="HomeSpecial">
    <div class="HomeSpecial-Title">专题 · 网站</div>
    <div class="HomeSpecial-img">
      <img src="@/assets/img/home/HomeNews/2.png" width="1950px" height="500px">
    </div>
    <div class="HomeSpecial-Content">
      <div class="HomeSpecial-Content-Box">
        <div class="HomeSpecial-Content-Box-Title">
          <h1><a href="#">学党史 悟思想 办实事 开新局</a> </h1>
        </div>
        <div class="HomeSpecial-Content-Box-img">
          <MousePassing class="MousePassing">
            <a href="#"><img src="@/assets/img/home/HomeSpecial/1.png" width="180px" height="400px"></a>
          </MousePassing>
        </div>

      </div>
      <div class="HomeSpecial-Content-Box">
        <div class="HomeSpecial-Content-Box-Title">
          <h1><a href="#">新型肺炎防控</a> </h1>
        </div>
        <div class="HomeSpecial-Content-Box-img">
          <MousePassing class="MousePassing">
            <a href="#"><img src="@/assets/img/home/HomeSpecial/2.png"  height="400px"></a>
          </MousePassing>
        </div>

      </div>
      <div class="HomeSpecial-Content-Box">
        <div class="HomeSpecial-Content-Box-Title">
          <h1><a href="#">不忘初心 牢记使命</a> </h1>
        </div>
        <div class="HomeSpecial-Content-Box-img">
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/3.png"  height="400px"></a>
        </MousePassing>
        </div>
      </div>
      <div class="HomeSpecial-Content-Box">
        <div class="HomeSpecial-Content-Box-Title">
          <h1><a href="#">学院双高建设</a> </h1>
        </div>
        <div class="HomeSpecial-Content-Box-img">
        <MousePassing class="MousePassing">
          <a href="#"><img src="@/assets/img/home/HomeSpecial/4.png" height="400px"></a>
        </MousePassing>
        </div>
      </div>
    </div>
    <div class="HomeSpecial-End">
      <div>
        <a href="#">
          <span class="el-icon-coin"></span>
          查看更多
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import MousePassing from "../../../components/common/Animation/MousePassing";
export default {
name: "HomeSpecial",
  data(){
    return Over=false

  },
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
    left: 500px;
    width: 1000px;
    height: 500px;
    z-index: 99;
  }
  .MousePassing a {
    display: block;
    width: 180px;
    position: absolute;
    top: 40px;
  }
  .MousePassing {
    position: absolute;
    z-index: 99;
  }
  .HomeSpecial-Content-Box {
    position: relative;
    top: 50px;
    width: 180px;
    height: 400px;
    overflow: hidden;
  }
  .HomeSpecial-Content-Box-Title {
    position: relative;
    top: 20px;
    left: 40%;
    z-index: 99;
    writing-mode: vertical-lr;
    font-size: 12px;
    line-height: 1.3;
    text-align: center;
  }
  .HomeSpecial-Content-Box-img {
    position: absolute;
    top: -30px;
    z-index: 1;
  }
  .HomeSpecial-Content-Box-Title a {
    -webkit-transition: .5s all;
  }
  .HomeSpecial-End {
    position: absolute;
    z-index: 99;
    background-color: #EE9640;
    width: 1920px;
    top: 470px;
    left: -100px;
    font-size: 34px;
    text-align: center;
  }
  .HomeSpecial-End a{
    -webkit-transition: .5s all;
  }
</style>