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
    <div id="HomeSpecialNews">
      <HomeSpecialNews/>
    </div>
    <div id="HomeFooter">
      <HomeFooter/>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "./child/HomeCarousel";
import HomeNews from "./child/HomeNews";
import BackToTop from "../../components/common/backtotop/BackToTop";
import HomeSpecial from "./child/HomeSpecial";
import HomeSpecialNews from "./child/HomeSpecialNews";
import HomeFooter from "./child/HomeFooter";
export default {
  name: "Home",
  components:{
    HomeCarousel,
    HomeNews,
    BackToTop,
    HomeSpecial,
    HomeSpecialNews,
    HomeFooter
  },
  methods: {
  },
  created() {
    this.$parent.navShow = true
  },
  mounted() {
    this.test()

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
#HomeSpecialNews {
  position: absolute;
  margin-top: 560px;
  z-index: 99;
}
#HomeFooter {
  position: absolute;
  z-index: 99;
  margin-top: 1300px;
  width: 1920px;
}
</style>