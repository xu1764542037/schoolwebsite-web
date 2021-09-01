<template>
  <div id="NavBar">
    <div><slot name="navLogo"></slot></div>
    <div><slot name="navLink"></slot></div>
    <div><slot name="navMenu"></slot></div>
  </div>
</template>

<script>

export default {
  name: "NavBar",

}
</script>

<style scoped>
#NavBar {
  position: fixed;
  background-image: linear-gradient( 180deg,  rgba(0,0,0,1),  rgba(255,255,255,0));
  width: 100%;
  height: 17%;

}

</style>