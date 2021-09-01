<template>
  <div id="app">
    <index></index>
    <router-view></router-view>
    <BackToTop/>
  </div>
</template>

<script>
import index from "@/components/common/index/Index"
export default {
  name: 'App',
  components: {
    index,
  }
}
</script>

<style>
@import "./assets/css/base.css";
*{
  margin: 0;
  padding: 0;
  outline: none;

}
body{
  /*font-family: PingFang-SC-Regular,Helvetica,"Microsoft Yahei","微软雅黑";*/
  font-family: PingFangSC-Regular!important;
  /*overflow: hidden;*/
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*滚动条样式*/
body::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
}

</style>
