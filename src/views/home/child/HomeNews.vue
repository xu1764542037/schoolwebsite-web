<template>
  <div id="HomeNews">
    <div class="HomeNews-Title">
      <h1>现代·要闻</h1>
    </div>
    <div class="HomeNews-Content">
      <div class="HomeNews-Content-img">
        <a href="#"><img src="@/assets/img/home/HomeNews/jiandang100.png" width="1400px" height="400px"></a>
      </div>
    </div>
    <div>
      <BigTextBox class="BigTextBox"/>
    </div>
    <div class="HomeNews-Content-img2">

    </div>
  </div>
</template>

<script>
import BigTextBox from "./HomeNews/HomeBigTextBox";
export default {
  name: "HomeNews",
  components: {
    BigTextBox
  }
}
</script>

<style scoped>
  #HomeNews {
    height: 1100px;
    background-color: rgb(239,235,234);
  }
  .HomeNews-Title h1{
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .HomeNews-Content-img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .BigTextBox {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
  }
  .HomeNews-Content-img2 {
    position: absolute;
    top: 72%;
  }
</style>