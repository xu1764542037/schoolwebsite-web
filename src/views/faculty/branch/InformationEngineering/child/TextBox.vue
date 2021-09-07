<template>
  <div id="TextBox">
    <div class="el-icon-document-copy"></div>

    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TextBox"
}
</script>

<style scoped>
#TextBox {
  color: #434343;
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
}
</style>