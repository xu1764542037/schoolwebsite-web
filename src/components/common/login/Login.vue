<template>
  <div id="Login">
    <div id="Login-Logo">
      <img id="Index-NavLogo-Img" src="@/assets/img/index/collegeLogo.png"/>
      <img id="Index-NavLogo-Img-Font" src="@/assets/img/index/collegeFont.png"/>
      <img id="Index-NavLogo-Img-FontEnglish" src="@/assets/img/index/collegeFontEnglish.png"/>
    </div>
    <div id="Login-Box">
      <h1 id="Login-Box-Title">LOGIN</h1>
      <div id="Login-Box-IdAndPwdBox">
        <input id="Login-Box-Id" type="text" placeholder="学号" v-model="id"></input>
        <input id="Login-Box-Pwd" type="password" placeholder="密码" v-model="password"></input>
      </div>
        <button id="Login-Button" @click="login">Sign In</button>
    </div>
  </div>
</template>

<script>
import {selectIdAndPwd} from "@/network/Login/login";


export default {
  name: "login",
  data() {
   return {
    id: '',
    password: '',
    fullscreenLoading: false
   }
  },
  methods: {
    login() {
      selectIdAndPwd(this.id,this.password).then( res => {
        console.log(res);
        // console.log(res.obj.length);
        if (res.code === 1 && res.obj.length !== 0) {
          if (res.obj[0].idcardnumber.code === 1) {
            this.$store.commit('addStudentInfo',res.obj[0])
            this.$message({
              message: '登录成功！' +
                  '欢迎'+this.$store.state.Name+'同学！',
              type: 'success'
            });
          } else if(res.obj[0].idcardnumber.code === 2) {
            this.$store.commit('addTeacherInfo',res.obj[0])
            this.$message({
              message: '登录成功！' +
                  '欢迎'+this.$store.state.Name+'老师！',
              type: 'success'
            });
          }

          this.$router.replace({path: "/BSHome"})
        } else if (res.code === 0) {
          this.$message.error('账号或密码错误，请重新输入！');
        } else if (res.code === -1 ) {
          this.$message({
            message: '后台系统错误，请联系管理员！',
            type: 'warning'
          });
        }
      })
    }
  },
  beforeCreate() {
    this.$parent.navShow = false
  },
}
</script>

<style scoped>


#Login {
  position: fixed;
  min-height: 100%;
  width: 100%;
  /*z-index: 10000;*/
  background: url("../../../../src/assets/img/login/school.png") no-repeat fixed ;
  overflow: hidden;
}

#Index-NavLogo-Img {
  position: absolute;
  margin-top: 30px;
  margin-left: 50px;
  height: 120px;
  width: 120px;
}

#Index-NavLogo-Img-Font {
  position: absolute;
  height: 60px;
  width: 250px;
  margin-top: 45px;
  margin-left: 180px;
}

#Index-NavLogo-Img-FontEnglish {
  position: absolute;
  height: 30px;
  width: 250px;
  margin-top: 95px;
  margin-left: 180px;
}

#Login-Box {
  width: 650px;
  height: 650px;
  background: rgba(255,255,255,.6);
  margin: auto;
  margin-top: 100px;
  text-align: center;
}

#Login-Box-Title {
  position: relative;
  padding-top: 25px;
  font-size: 56px;
  color: #CCCCFF;
}

#Login-Box-IdAndPwdBox {
}

#Login-Box-IdAndPwdBox input {
  height: 50px;
  width: 500px;
  background: rgba(255,255,255,.0);
  font-size: 24px;
  color: black;
  font-weight: 600;
  border-bottom: 2px solid #FFCC33;
  text-align: center;
}

#Login-Box-Id {
  margin-top: 50px;
}

/*设置input框的placeholder的默认字体颜色*/
::-webkit-input-placeholder {
  color: grey;
}


#Login-Box-Pwd {
  margin-top: 100px;
}

#Login-Button {
  width: 200px;
  height: 50px;
  border-radius: 5px;
  margin-top: 100px;
  font-size: 24px;
  background: rgba(122,122,1222,.5);
  /*color: #FFCC33;*/
  color: white;
  -webkit-transition: .5s;
}

#Login-Button:hover {
  /*background: #8886F2;*/
  background: rgba(122,122,1222,.8);

}

</style>