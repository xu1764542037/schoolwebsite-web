<template>
  <div class="TextBox">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TextBox"
}
</script>

<style scoped>
  .TextBox {
    width: 300px;
    height: 175px;
    background-color: white;
    box-shadow: 0 0 10px white;
    font-size: 16px;
    -webkit-transition: .5s all;
  }
  .TextBox:hover {
    box-shadow: 0 0 20px white;
    color: rgb(196,158,95);
  }
</style>