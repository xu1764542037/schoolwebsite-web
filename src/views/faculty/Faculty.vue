<template>
 <div>
   <router-view></router-view>
 </div>

</template>

<script>
import BusinessAffairs from "./branch/BusinessAffairs/BusinessAffairs";
import InformationEngineering from "./branch/InformationEngineering/InformationEngineering";
export default {
  name: "Faculty",
  components:{
    BusinessAffairs,
    InformationEngineering
  }
}
</script>

<style scoped>

</style>