<template>
  <div id="index" @mousedown="closeSel">
    <nav-bar>
      <div slot="navLogo">
        <img id="Index-NavLogo-Img" src="@/assets/img/index/collegeLogo.png"/>
        <img id="Index-NavLogo-Img-Font" src="@/assets/img/index/collegeFont.png"/>
        <img id="Index-NavLogo-Img-FontEnglish" src="@/assets/img/index/collegeFontEnglish.png"/>
      </div>
      <div slot="navLink">
        <nav-bar-link>
          <nav-bar-link-item>师生办事大厅</nav-bar-link-item>
          <nav-bar-link-item>领导信箱</nav-bar-link-item>
          <nav-bar-link-item>纪委信箱</nav-bar-link-item>
          <nav-bar-link-item>信息公开</nav-bar-link-item>
          <nav-bar-link-item>师德师风</nav-bar-link-item>
          <nav-bar-link-item>图书馆</nav-bar-link-item>
          <nav-bar-link-item>|</nav-bar-link-item>
          <nav-bar-link-item>登录</nav-bar-link-item>
          <nav-bar-link-item>
            <img class="Index-NavBarLinkItem-Img" @mouseover="changeSearchColor" v-show="!isShowSearch" src="@/assets/img/index/greySearch.svg" alt="站内搜索">
            <img class="Index-NavBarLinkItem-Img" @mouseleave="changeSearchColor" v-show="isShowSearch" src="@/assets/img/index/blackSearch.svg" alt="站内搜索">
          </nav-bar-link-item>
        </nav-bar-link>
      </div>
      <div slot="navMenu" id="navMenu">
        <nav-menu>
          <nav-menu-item><div  @mousedown="ItemClick12">首页</div></nav-menu-item>
          <nav-menu-item>
            <div @click="changeProfileBox">学院概况 ◆</div>
          </nav-menu-item>
          <el-collapse-transition>
            <div v-show="isProfileShow" id="Index-NavMenu-ProfileBox">
              <div class="Index-NavMenu-Profile">学院简介</div>
              <div class="Index-NavMenu-Profile">组织机构</div>
              <div class="Index-NavMenu-Profile">现任领导</div>
              <div class="Index-NavMenu-Profile">现代映像</div>
              <div class="Index-NavMenu-Profile">校园地图</div>
              <div class="Index-NavMenu-Profile">校史校情</div>
            </div>
          </el-collapse-transition>
          <nav-menu-item>
            <div @click="changeCollegeInfoBox">院系设置 ◆</div>
          </nav-menu-item>
          <el-collapse-transition>
            <div v-show="isCollegeInfoShow" id="Index-NavMenu-CollegeInfoBox">
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick1">信息工程学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick2">商务学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick3">智能制造学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick4">建筑工程学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick5">设计学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick6">旅游与航空学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick7">环境与能源学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick8">军事体育教学部</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick9">马克思主义学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick10">继续教育学院</div>
              <div class="Index-NavMenu-CollegeInfo" @mousedown="ItemClick11">本科教育学院</div>
            </div>
          </el-collapse-transition>
          <nav-menu-item>
            <div @click="changeStudyBox">教育教学 ◆</div>
          </nav-menu-item>
          <el-collapse-transition>
            <div v-show="isStudyShow" id="Index-NavMenu-StudyBox">
              <div class="Index-NavMenu-Study">高等职业教育</div>
              <div class="Index-NavMenu-Study">继续教育</div>
            </div>
          </el-collapse-transition>
          <nav-menu-item>科学研究</nav-menu-item>
          <nav-menu-item>招生就业</nav-menu-item>
          <nav-menu-item>合作交流</nav-menu-item>
          <nav-menu-item>走进学院</nav-menu-item>
        </nav-menu>
      </div>
    </nav-bar>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import NavBarLink from "@/components/common/navbar/NavBarLink";
import NavBarLinkItem from "@/components/common/navbar/NavBarLinkItem";
import NavMenu from "@/components/common/navbar/NavMenu";
import NavMenuItem from "@/components/common/navbar/NavMenuItem";
export default {
  name: "Index",
  watch: {
    isProfileShow: {
      handler() {
        if (this.isProfileShow === true) {
          this.isCollegeInfoShow = false
          this.isStudyShow = false
          this.CollegeInfoNum = 0
          this.StudyNum = 0
        }
      }
    },
    isCollegeInfoShow: {
      handler() {
        if (this.isCollegeInfoShow === true) {
          this.isProfileShow = false
          this.isStudyShow = false
          this.ProfileNum = 0
          this.StudyNum = 0
        }
      }
    },
    isStudyShow: {
      handler() {
        if (this.isStudyShow === true) {
          this.isCollegeInfoShow = false
          this.isProfileShow = false
          this.ProfileNum = 0
          this.CollegeInfoNum = 0
        }
      }
    }
  },
  data() {
    return {
      isShowSearch: false,
      isProfileShow: false,
      isCollegeInfoShow: false,
      isStudyShow: false,
      ProfileNum: 0,
      CollegeInfoNum: 0,
      StudyNum: 0
    }
  },
  components: {
    NavBar,
    NavBarLink,
    NavBarLinkItem,
    NavMenu,
    NavMenuItem,
  },
  methods: {
    ItemClick1(){
      this.$router.push({path:"/faculty/InformationEngineering"})
    },
    ItemClick2(){
      this.$router.push({path:"/faculty/BusinessAffairs"})
    },
    ItemClick3(){
      this.$router.push({path:"/faculty/Intelligence"})
    },
    ItemClick4(){
      this.$router.push({path:"/faculty/Architectural"})
    },
    ItemClick5(){
      this.$router.push({path:"/faculty/Design"})
    },
    ItemClick6(){
      this.$router.push({path:"/faculty/Travel"})
    },
    ItemClick7(){
      this.$router.push({path:"/faculty/Environment"})
    },
    ItemClick8(){
      this.$router.push({path:"/faculty/Military"})
    },
    ItemClick9(){
      this.$router.push({path:"/faculty/Marx"})
    },
    ItemClick10(){
      this.$router.push({path:"/faculty/Continue"})
    },
    ItemClick11(){
      this.$router.push({path:"/faculty/Design"})
    },
    ItemClick12(){
      this.$router.push({path:"/home"})
    },
    changeSearchColor() {
      this.isShowSearch = !this.isShowSearch
    },
    changeProfileBox() {
      if (this.ProfileNum === 0) {
        this.isProfileShow = true
        this.ProfileNum = 1
      } else {
        this.isProfileShow = false
        this.ProfileNum = 0
      }
    },
    changeCollegeInfoBox() {
      if (this.CollegeInfoNum === 0) {
        this.isCollegeInfoShow = true
        this.CollegeInfoNum = 1
      } else {
        this.isCollegeInfoShow = false
        this.CollegeInfoNum = 0
      }
    },
    changeStudyBox() {
      if (this.StudyNum === 0) {
        this.isStudyShow = true
        this.StudyNum = 1
      } else {
        this.isStudyShow = false
        this.StudyNum = 0
      }
    },
    closeSel(event){
      const navMenu = document.getElementById("navMenu");
      if(navMenu){
        if(!navMenu.contains(event.target)){  //点击到了id为navMenu以外的区域，隐藏下拉框
          this.isProfileShow = false
          this.isCollegeInfoShow = false
          this.isStudyShow = false
          this.ProfileNum = 0
          this.CollegeInfoNum = 0
          this.StudyNum = 0
        }
      }
    }
  },
  mounted() {
    document.addEventListener('click',e => {
      if(!this.$el.contains(e.target)){
        this.isShowSearch = false//点击其他区域关闭
        this.isProfileShow = false
        this.isCollegeInfoShow = false
        this.isStudyShow = false
        this.ProfileNum = 0
        this.CollegeInfoNum = 0
        this.StudyNum = 0
      }
    })
  },
}
</script>

<style scoped>
#index {
  z-index: 1000;
  position: fixed;
  border: 0;

}

#Index-NavLogo-Img {
  position: absolute;
  margin-top: 30px;
  margin-left: 50px;
  height: 100px;
  width: 100px;
}

#Index-NavLogo-Img-Font {
  position: absolute;
  height: 60px;
  width: 220px;
  margin-top: 35px;
  margin-left: 170px;
}

#Index-NavLogo-Img-FontEnglish {
  position: absolute;
  height: 30px;
  width: 220px;
  margin-top: 85px;
  margin-left: 170px;
}

.Index-NavBarLinkItem-Img {
  height: 20px;
  width: 25px;
  margin-top: -3px;
  -webkit-transition: 1s all;
}

#Index-NavMenu-ProfileBox {
  position: absolute;
  margin-top: 70px;
  margin-left: 100px;
  font-weight: 500;
  font-size: 18px;
  color: #999999;
  border-top: 5px solid #BF4DBF;
  cursor: pointer;
}

.Index-NavMenu-Profile {
  position: relative;
  height: 50px;
  width: 200px;
  background: rgba(255,255,255,.9);
  text-align: center;
  line-height: 50px;
  -webkit-transition: 1s all;
}

.Index-NavMenu-Profile:hover {
  background: gainsboro;
}


#Index-NavMenu-CollegeInfoBox {
  position: absolute;
  margin-top: 70px;
  margin-left: 260px;
  font-weight: 500;
  font-size: 18px;
  color: #999999;
  border-top: 5px solid #BF4DBF;
  cursor: pointer;
}

.Index-NavMenu-CollegeInfo {
  position: relative;
  height: 50px;
  width: 200px;
  background: rgba(255,255,255,.9);
  text-align: center;
  line-height: 50px;
  -webkit-transition: 1s all;
  cursor: pointer;
}

.Index-NavMenu-CollegeInfo:hover {
  background: gainsboro;
}


#Index-NavMenu-StudyBox {
  position: absolute;
  margin-top: 70px;
  margin-left: 420px;
  font-weight: 500;
  font-size: 18px;
  color: #999999;
  border-top: 5px solid #BF4DBF;
  cursor: pointer;
}

.Index-NavMenu-Study {
  position: relative;
  height: 50px;
  width: 200px;
  background: rgba(255,255,255,.9);
  text-align: center;
  line-height: 50px;
  -webkit-transition: 1s all;
  cursor: pointer;
}

.Index-NavMenu-Study:hover {
  background: gainsboro;
}
</style>