<template>
  <div id="Home">
    <HomeCarousel>

    </HomeCarousel>
  </div>
</template>

<script>
import HomeCarousel from "./child/HomeCarousel";


export default {
  name: "Home",
  components:{
    HomeCarousel
  }
}
</script>

<style scoped>
#Home {
  position: fixed;
}

</style>