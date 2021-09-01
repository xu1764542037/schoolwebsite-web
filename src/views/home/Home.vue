<template>
  <div id="Home">
    <div id="Home-HomeCarousel">
      <HomeCarousel/>
    </div>
    <div id="Home-HomeNews">
      <HomeNews/>
    </div>


  </div>
</template>

<script>
import HomeCarousel from "./child/HomeCarousel";
import HomeNews from "./child/HomeNews";

export default {
  name: "Home",
  components:{
    HomeCarousel,
    HomeNews
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
  margin-top: 70%;
  position: relative;
}
</style>