<template>
  <div id="NavBarLink">
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBarLink"
}
</script>

<style scoped>
#NavBarLink {
  position: relative;
  /*background: black;*/
  height: 10%;
  width: 28%;
  margin-top: 1.2%;
  margin-left: 68%;
  cursor: pointer;
}


</style>