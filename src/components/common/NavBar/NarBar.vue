<template>
  <div class="NarBar-Box">
    <div class="NarBar-Box-Children">
      <a href="#">学生</a>
      <a href="#">教职工</a>
      <a href="#">校友</a>
      <a href="#">访客</a>
    </div>
    <div class="NarBar-Box-Children">
      <a href="#">门户</a>
      <a href="#">图书馆</a>
      <a href="#">邮箱</a>
      <a href="#">领导信箱</a>
    </div>
  </div>
</template>

<script>
export default {
name: "NarBar"
}
</script>

<style scoped>
  .NarBar-Box {
    display: flex;
    justify-content: space-between;
    background-color: brown;
  }
  .NarBar-Box a {
    color: aliceblue;
    font-size: 14px;
  }
  .NarBar-Box-Children {
    height: 40px;
    width: 550px;
    display: flex;
    justify-content: space-evenly;
    line-height: 40px;
  }
</style>