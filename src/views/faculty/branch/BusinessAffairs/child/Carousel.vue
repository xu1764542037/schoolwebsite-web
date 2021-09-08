<template>
  <div>
    <el-carousel height="947px" direction="vertical" :autoplay="false"  ref="nop" >
      <el-carousel-item>
        <slot name="item1"></slot>
      </el-carousel-item>
      <el-carousel-item>
        <slot name="item2"></slot>
      </el-carousel-item>
      <el-carousel-item>
        <slot name="item3"></slot>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
import {Carousel} from "element-ui";

export default {
  name: "Carousel",
  data(){
    return{

    }
  },
  mounted(){
    //监听鼠标滚动事件
    window.addEventListener('mousewheel',this.handleScroll);
    window.scrollTo(0, 0)
  },
 methods: {
   handleScroll() {
     // 页面滚动距顶部距离
     a=1
     var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
         document.body.scrollTop

      if (scrollTop <= 0) {
        this.$refs.nop.prev()
      } else {
        this.$refs.nop.next()
      }
   },

 }
}
</script>

<style scoped>

</style>