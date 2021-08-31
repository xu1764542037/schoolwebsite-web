import Vue from "vue";
import VueRouter from 'vue-router'


//首页
const Index =() => import("@/components/common/index/Index.vue")

//404页面
const Error =() => import("@/components/common/404/error")

//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/index'
  },
  // {
  //   path: '/login',
  //   component: Login
  // },
  // {
  //   path: '/index',
  //   redirect: "/index",
  //   component: Index
  // },
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




