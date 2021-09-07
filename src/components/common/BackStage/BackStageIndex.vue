<template>
  <div id="BackStage-Index">
    <div id="BackStage-Index-TopBar">
      <top-bar></top-bar>
    </div>
    <img id="BackStage-Index-NavLogo-Img" src="@/assets/img/index/collegeLogo.png"/>
    <img id="BackStage-Index-NavLogo-Img-Font" src="@/assets/img/index/collegeFont.png"/>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
import NavMenu from "../index/navmenu/NavMenu";
import TopBar from "../index/topbar/TopBar";


export default {
  name: "BackStageIndex",
  components: {
    NavMenu,
    TopBar
  },
  beforeCreate() {
    this.$parent.navShow = false
  },
}
</script>

<style scoped>
#BackStage-Index {
  position: fixed;
  height: 100%;
  width: 300px;
  background: #545C64;
}

#BackStage-Index-NavLogo-Img {
  position: absolute;
  height: 80px;
  width: 80px;
  margin: 10px;
}

#BackStage-Index-NavLogo-Img-Font {
  position: absolute;
  height: 50px;
  width: 200px;
  margin: 27px 90px;
}
</style>