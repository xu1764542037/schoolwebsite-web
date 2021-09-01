<template>
  <div class="MousePassing">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MousePassing"
}
</script>

<style scoped>
img {
  width: 100%; max-width: 100%;
}
div {
  width: 180px;
  transition: all 0.5s ease-in-out;/*这里表示动画的时间为1s*/
}
div:hover {/*hover表示鼠标移动到上面时，触发这个事件*/
transform: scale(1.1,1.1);/*transform表示变换，scale表示范围、大小，这是长宽都变为2倍的实现代码。*/
}
</style>