import Vue from "vue";
import VueRouter from 'vue-router'


//首页
const Index =() => import("@/components/common/index/Index.vue")

//Home页面
const Home= () =>import("@/views/home/Home.vue")

//404页面
const Error =() => import("@/components/common/404/error")

//院系页面
const Faculty =() => import("@/views/faculty/Faculty")

//信息工程学院页面
const InformationEngineering =() => import("@/views/faculty/branch/InformationEngineering/InformationEngineering")

//商务学院页面
const BusinessAffairs =() => import("@/views/faculty/branch/BusinessAffairs")

//智能制造学院页面
const Intelligence =() => import("@/views/faculty/branch/Intelligence")

//建筑工程学院页面
const Architectural =() => import("@/views/faculty/branch/Architectural")

//设计学院页面
const Design =() => import("@/views/faculty/branch/Design")

//旅游与航空学院
const Travel =() => import("@/views/faculty/branch/Travel")

//环境与能源学院
const Environment =() => import("@/views/faculty/branch/Environment")

//军事体育教学部
const Military =() => import("@/views/faculty/branch/Military")

//马克思教育学院
const Marx =() => import("@/views/faculty/branch/Marx")

//继续教育学院
const Continue =() => import("@/views/faculty/branch/Continue")

//本科教育学院
const Undergraduate =() => import("@/views/faculty/branch/Undergraduate")
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
  },
  {
    path: '/faculty',
    component: Faculty,
    children:[
        {
            path: 'InformationEngineering',
            component: InformationEngineering,
            beforeEach(to,from){
              to.InformationEngineeringProfileTitle()
          }
        },
      {
        path: 'BusinessAffairs',
        component:BusinessAffairs
      },
      {
        path: 'Intelligence',
        component:Intelligence
      },
      {
        path: 'Architectural',
        component:Architectural
      },
      {
        path: 'Design',
        component:Design
      },
      {
        path: 'Travel',
        component:Travel
      },
      {
        path: 'Environment',
        component:Environment
      },
      {
        path: 'Military',
        component:Military
      },
      {
        path: 'Marx',
        component:Marx
      },
      {
        path: 'Continue',
        component:Continue
      },
      {
        path: 'Undergraduate',
        component:Undergraduate
      }
        ]
  }

]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history',

})


export default router




