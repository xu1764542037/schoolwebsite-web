import Vue from "vue";
import VueRouter from 'vue-router'


//首页
const Index =() => import("@/components/common/index/Index.vue")

//Home页面
const Home= () =>import("@/views/home/Home.vue")

//404页面
const Error =() => import("@/components/common/404/error")

//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/index'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/index',
    redirect: "/home",
    component: Index
  },
  {
    path: '*',
    redirect: "/404"
  },
  {
    path: '/404',
    component: Error
  }
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history',

})


export default router




