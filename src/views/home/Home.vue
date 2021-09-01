<template>
  <div id="Home">
    <div id="Home-HomeCarousel">
      <HomeCarousel/>
    </div>
    <div id="Home-HomeNews">
      <HomeNews/>
    </div>
    <div id="HomeSpecial">
      <HomeSpecial/>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "./child/HomeCarousel";
import HomeNews from "./child/HomeNews";
import BackToTop from "../../components/common/backtotop/BackToTop";
import HomeSpecial from "./child/HomeSpecial";
export default {
  name: "Home",
  components:{
    HomeCarousel,
    HomeNews,
    BackToTop,
    HomeSpecial
  }
}
</script>

<style scoped>
#Home {
  position: absolute;
  width: 100%;
}

#Home-HomeCarousel {
  position: absolute;
}

#Home-HomeNews {
  margin-top: 50%;
  position: relative;
}
#HomeSpecial {
  position: absolute;
  left: 5%;
}
</style>