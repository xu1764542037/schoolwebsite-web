<template>
  <div id="NavMenuItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavMenuItem"
}
</script>

<style scoped>
#NavMenuItem {
  color: white;
  float: left;
  margin-left: 60px;
  font-size: 20px;
  font-weight: 700;
  line-height: 300%;
  -webkit-transition: .8s all;

}

#NavMenuItem:hover {
  color: #FFB9FF;
}
</style>