<template>
  <div id="app">
    <NarBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NarBar from "./components/common/NavBar/NarBar";

export default {
  name: 'App',
  components: {
    NarBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
