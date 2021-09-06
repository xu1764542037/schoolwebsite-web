<template>
  <div class="MousePassing2">
    <div class="MousePassing2-Box1">
      <slot name="MousePassing2-Box1"></slot>
    </div>
    <div class="MousePassing2-Box2">
      <slot name="MousePassing2-Box2"></slot>
    </div>
  </div>
</template>

<script>
export default {
name: "MousePassing2"
}
</script>

<style scoped>
  .MousePassing2 {
    position: relative;
    overflow: hidden;
    width: 350px;
    height: 280px;
  }
  .MousePassing2-Box1 {
    width: 350px;
    height: 280px;
  }
  .MousePassing2-Box2 {
    position: absolute;
    top: 230px;
    width: 350px;
    height: 280px;
    background-color: rgba(121,5,6, 0.3);
  }
  .MousePassing2:hover .MousePassing2-Box2 {
    transform: translateY(-230px) ;
    transition: all 0.5s ease-in-out;
  }
</style>