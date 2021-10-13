import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";


Vue.config.productionTip = false

//引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入ECharts
import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;


Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
