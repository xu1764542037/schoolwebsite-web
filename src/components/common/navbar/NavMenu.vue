<template>
  <div id="NavMenu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style scoped>
#NavMenu {
  position: absolute;
  height: 40%;
  width: 60%;
  margin-left: 35%;
  margin-top: 1.5%;
}
</style>