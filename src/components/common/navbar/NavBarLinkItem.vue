<template>
  <div id="NavBarLink-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBarLinkItem"
}
</script>

<style scoped>
#NavBarLink-item {
  color: grey;
  font-size: 12px;
  margin-left: 20px;
  float: left;
  -webkit-transition: .5s all;
}

#NavBarLink-item:hover {
  color: chartreuse;
}
</style>