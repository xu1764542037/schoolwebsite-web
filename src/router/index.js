import Vue from "vue";
import VueRouter from 'vue-router'

//404页面
const Error =() => import("@/components/common/404/error")

//1.安装插件
Vue.use(VueRouter)


const routes = [
  // {
  //   path: '*',
  //   redirect: "/404"
  // },
  // {
  //   path: '/404',
  //   component: Error
  // }
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history',

})


export default router




