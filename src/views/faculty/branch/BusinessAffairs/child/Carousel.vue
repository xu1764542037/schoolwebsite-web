<template>
  <div>
    <el-carousel height="940px" direction="vertical" :autoplay="false"  ref="nop" >
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
      i: 0
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
     var e = e || window.event;
     if(e.wheelDelta<0){
       this.$refs.nop.next()
     }else{
       this.$refs.nop.prev()

     }
   },
 }
}
</script>

<style scoped>

</style>