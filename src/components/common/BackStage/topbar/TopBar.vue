<template>
  <div id="TopBar">
    <div id="TopBar-Img"><slot name="img"></slot></div>
    <div id="TopBar-Name"><slot name="name"></slot></div>
    <div id="TopBar-Exit" @click="exit">退出</div>

  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    exit() {
      this.$router.replace({path: "/login"})
    }
  }
}
</script>

<style scoped>
#TopBar {
  position: fixed;
  height: 100px;
  width: 100%;
  background: #043052;
  border-bottom: 3px solid #1989fa;
}

#TopBar-Img {
  position: absolute;
  margin-left: 1680px;
  margin-top: 30px;
}

#TopBar-Name {
  position: absolute;
  color: white;
  margin-left: 1730px;
  margin-top: 30px;
  font-size: 22px;
}

#TopBar-Exit {
  position: absolute;
  width: 50px;
  color: white;
  font-size: 22px;
  margin: 30px 1820px;
  cursor: pointer;

}

</style>