import Vue from "vue";
import VueRouter from 'vue-router'
import * as path from "path";


//首页
const Index =() => import("@/components/common/index/Index")



//Home页面
const Home= () =>import("@/views/home/Home.vue")

//404页面
const Error =() => import("@/components/common/404/error")

//Login页面
const Login =() => import("@/components/common/login/Login")

//院系页面
const Faculty =() => import("@/views/faculty/Faculty")

//信息工程学院页面
const InformationEngineering =() => import("@/views/faculty/branch/InformationEngineering/InformationEngineering")

//商务学院页面
const BusinessAffairs =() => import("@/views/faculty/branch/BusinessAffairs/BusinessAffairs")

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







//后台系统页面
//后台index页面
const BackStageIndex =() => import("@/components/common/BackStage/BackStageIndex")
//后台首页页面
const BackStageHome =() => import("@/views/BackStagePage/BackStageHome/BackStageHome")
//后台 管理员-成绩管理页面
const BSAModifyFraction =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyFraction/BSAModifyFraction")
//后台 管理员-课程管理-课程分配管理页面
const BSAMCCourseAllocation =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyCourse/BSAMCCourseAllocation/BSAMCCourseAllocation.vue")
//后台 管理员-课程管理-课程对应老师页面
const BSAMCCourseToTeacher =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyCourse/BSAMCCourseToTeacher/BSAMCCourseToTeacher.vue")
//后台 管理员-班级管理-班级对应老师页面
const BSAMCClassToTeacher =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyClass/BSAMCClassToTeacher/BSAMCClassToTeacher.vue")
//后台 管理员-班级管理-班级对应学生页面
const BSAMCClassToStudent =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyClass/BSAMCClassToStudent/BSAMCClassToStudent.vue")
//后台 管理员-人员管理-管理员管理页面
const BSAMUModifyAdmin =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyUser/BSAMUModifyAdmin/BSAMUModifyAdmin.vue")
//后台 管理员-人员管理-教师管理页面
const BSAMUModifyTeacher =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyUser/BSAMUModifyTeacher/BSAMUModifyTeacher.vue")
//后台 管理员-人员管理-学生管理页面
const BSAMUModifyStudent =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyUser/BSAMUModifyStudent/BSAMUModifyStudent.vue")
//后台 教师管理-成绩管理页面
const BSTModifyFraction =() => import("@/views/BackStagePage/BackStageTeacher/BSTModifyFraction/BSTModifyFraction.vue")
//后台 教师管理-学生管理页面
const BSTModifyStudent =() => import("@/views/BackStagePage/BackStageTeacher/BSTModifyStudent/BSTModifyStudent.vue")
//后台 学生管理-信息查询页面
const BSSFindInfo =() => import("@/views/BackStagePage/BackStageStudent/BSSFindInfo/BSSFindInfo.vue")
//后台 学生管理-成绩查询页面
const BSSFindFraction =() => import("@/views/BackStagePage/BackStageStudent/BSSFindFraction/BSSFindFraction.vue")
//后台 设置页面
const BackStageSetting =() => import("@/views/BackStagePage/BackStageSetting/BackStageSetting.vue")


//一级菜单跳二级菜单文件
const Admin =() => import("@/views/BackStagePage/BckStageAdmin/BckStageAdmin")
const Teacher =() => import("@/views/BackStagePage/BackStageTeacher/BackStageTeacher")
const Student =() => import("@/views/BackStagePage/BackStageStudent/BackStageStudent")

//二级菜单跳三级菜单文件
const BSAModifyCourse =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyCourse/BSAModifyCourse")
const BSAModifyClass =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyClass/BSAModifyClass")
const BSAModifyUser =() => import("@/views/BackStagePage/BckStageAdmin/BSAModifyUser/BSAModifyUser")







//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/BSHome'
  },
  {
    path: '/home',
    component: Home
  },
  // {
  //   path: '/index',
  //   redirect: "/home",
  //   component: Index
  // },
  {
    path: '/index',
    redirect: "/BSHome",
    component: BackStageIndex
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
    path: '/login',
    component: Login
  },
  {
    path: '/BSIndex',
    component: BackStageHome
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
  },
  ,
  //后台地址
  {
    path: "/BSHome",
    component: BackStageHome
  },
  {
    path: '/BSAdmin',
    component: Admin,
    children: [
      {
        path: '/BSAdmin/Class',
        component: BSAModifyClass,
        children: [
          {
            path: '/BSAdmin/Class/ClassToStudent',
            component: BSAMCClassToStudent
          },
          {
            path: '/BSAdmin/Class/ClassToTeacher',
            component: BSAMCClassToTeacher
          },
        ]
      },
      {
        path: '/BSAdmin/Course',
        component: BSAModifyCourse,
        children: [
          {
            path: '/BSAdmin/Course/CourseAllocation',
            component: BSAMCCourseAllocation
          },
          {
            path: '/BSAdmin/Course/CourseToTeacher',
            component: BSAMCCourseToTeacher
          }
        ]
      },
      {
        path: '/BSAdmin/user',
        component: BSAModifyUser,
        children: [
          {
            path: '/BSAdmin/user/ModifyAdmin',
            component: BSAMUModifyAdmin
          },
          {
            path: '/BSAdmin/user/ModifyStudent',
            component: BSAMUModifyStudent
          },
          {
            path: '/BSAdmin/user/ModifyTeacher',
            component: BSAMUModifyTeacher
          },
        ]
      },
      {
        path: 'ModifyFraction',
        component: BSAModifyFraction
      }
    ]
  },
  {
    path: '/BSTeacher',
    component: Teacher,
    children: [
      {
        path: 'ModifyFraction',
        component: BSTModifyFraction
      },
      {
        path: 'ModifyStudent',
        component: BSTModifyStudent
      }
    ]
  },
  {
    path: '/BSStudent',
    component: Student,
    children: [
      {
        path: 'FindFraction',
        component: BSSFindFraction
      },
      {
        path: 'FindInfo',
        component: BSSFindInfo
      }
    ]
  },
  {
    path: '/BSSetting',
    component: BackStageSetting
  }

]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history',

})


export default router


// {
//   path: '/enterprise/statisticManage',
//       name: 'statisticManage',
//     component: parentView,
//     redirect: 'ComStatisticManage',
//     meta: { title: '统计分析' },
//   children: [
//     {
//       path: '/enterprise/statisticManage/ComStatisticManage',
//       name: 'ComStatisticManage',
//       component: () => import('@/views/enterprise/statisticManage/statisticManage'),
//       meta: { title: '企业信息统计' }
//     },
//     {
//       path: 'statisticEquipmentManage',
//       name: 'statisticEquipmentManage',
//       component: () => import('@/views/enterprise/statisticManage/comStatisticManage'),
//       meta: { title: '特种设备统计' }
//     }
//   ]
// },

