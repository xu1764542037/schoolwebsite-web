<template>
  <div id="BackStage-Index">
    <div id="BackStage-Index-TopBar">
      <top-bar>
        <div slot="img">
          <img src="@/assets/img/BackStage/user-man.svg">
        </div>
        <div slot="name">
          {{$store.state.Name}}
        </div>
      </top-bar>
    </div>
    <img id="BackStage-Index-NavLogo-Img" src="@/assets/img/index/collegeLogo.png"/>
    <div id="BackStage-Index-NavLogo-font">江西现代学院管理系统</div>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
import NavMenu from "./navmenu/NavMenu";
import TopBar from "./topbar/TopBar";

import BackStageHome from "../../../views/BackStagePage/BackStageHome/BackStageHome";

export default {
  name: "BackStageIndex",
  components: {
    NavMenu,
    TopBar,
    BackStageHome
  },
  data() {
    return {
      CurrentLocal: "首页",
    }
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
  background: #043052;
}

#BackStage-Index-NavLogo-Img {
  position: absolute;
  height: 80px;
  width: 80px;
  margin: 10px;
}

#BackStage-Index-NavLogo-font {
  position: absolute;
  font-weight: 500;
  font-size: 36px;
  color: #D3D4D5;
  width: 500px;
  margin-left: 100px;
  margin-top: 22px;
}
</style>