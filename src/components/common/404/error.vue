<template>
  <div id="error">
    <h1 @click="goIndex">404，页面丢失，点此返回官网主页</h1>
  </div>
</template>

<script>
export default {
  name: "error",
  methods: {
    //网页地址错误，返回首页
    goIndex() {
      this.$router.replace({path: "/index"})
    }
  }
}
</script>

<style scoped>
#error {
  position: absolute;
  background-image: linear-gradient( -135deg, #000000, #434343);
  width: 100%;
  height: 100%;
}

h1 {
  margin-top: 20%;
  margin-left: 20%;
  cursor: pointer;
  font-weight: 700;
  font-size: 58px;
  z-index: 9999;
}
</style>