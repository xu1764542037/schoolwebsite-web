<template>
  <div id="BSSFIBottom">
    <div id="BSSFIBottom-Functions">
      <span class="BSSFIBottom-Function" id="BSSFIBottom-Function-Classmate" @click="changeClassmate">同学</span>
      <span class="BSSFIBottom-Function" id="BSSFIBottom-Function-Teacher" @click="changeTeacher">教师</span>
      <span class="BSSFIBottom-Function" id="BSSFIBottom-Function-Course" @click="changeCourse">课程</span>
    </div>
    <div id="BSSFIBottom-Context">
      <div v-show="classmateClick">
        <b-b-s-f-i-b-student></b-b-s-f-i-b-student>
      </div>
      <div v-show="teacherClick">
        <b-b-s-f-i-b-teacher></b-b-s-f-i-b-teacher>
      </div>
      <div v-show="courseClick">
        <b-b-s-f-i-b-course></b-b-s-f-i-b-course>
      </div>
    </div>
  </div>
</template>

<script>
import BBSFIBStudent from "./child/BBSFIBStudent";
import BBSFIBTeacher from "./child/BSSFIBTeacher";
import BBSFIBCourse from "./child/BBSFIBCourse";


export default {
  name: "BSSFIBottom",
  components: {
    BBSFIBStudent,
    BBSFIBTeacher,
    BBSFIBCourse
  },
  watch: {
    classmateClick: {
      handler() {
        const classmate = document.getElementById("BSSFIBottom-Function-Classmate")
        if (this.classmateClick === true) {
          classmate.style.color = "white"
          classmate.style.borderBottom = "3px solid #6861D8"
        } else {
          classmate.style.color = "gray"
          classmate.style.borderBottom = "0px"
        }
      }
    },
    teacherClick: {
      handler() {
        const teacher = document.getElementById("BSSFIBottom-Function-Teacher")
        if (this.teacherClick === true) {
          teacher.style.color = "white"
          teacher.style.borderBottom = "3px solid #6861D8"
        } else {
          teacher.style.color = "gray"
          teacher.style.borderBottom = "0px"
        }
      }
    },
    courseClick: {
      handler() {
        const course = document.getElementById("BSSFIBottom-Function-Course")
        if (this.courseClick === true) {
          course.style.color = "white"
          course.style.borderBottom = "3px solid #6861D8"
        } else {
          course.style.color = "gray"
          course.style.borderBottom = "0px"
        }
      }
    },
  },
  data() {
    return {
      classmateClick: true,
      teacherClick: false,
      courseClick: false
    }
  },
  methods: {
    changeClassmate() {
      this.classmateClick = true
      this.teacherClick = false
      this.courseClick = false
    },
    changeTeacher() {
      this.classmateClick = false
      this.teacherClick = true
      this.courseClick = false
    },
    changeCourse() {
      this.classmateClick = false
      this.teacherClick = false
      this.courseClick = true
    }
  }
}
</script>

<style scoped>
#BSSFIBottom {
  position: absolute;
  width: 100%;
  height: 600px;
  margin-top: 250px;
  background: lightcyan;
}

#BSSFIBottom-Functions {
  position: absolute;
  width: 100%;
  height: 50px;
  background: #043052;
}

.BSSFIBottom-Function {
  position: absolute;
  font-size: 28px;
  color: gray;
  transition: .3s;
  height: 50px;
  width: 60px;
}

.BSSFIBottom-Function:hover {
  color: white;
  border-bottom: 3px solid #6861D8;
}

#BSSFIBottom-Function-Classmate {
  color: white;
  border-bottom: 3px solid #6861D8;
  margin-left: 475px;
}


#BSSFIBottom-Function-Teacher {
  margin-left: 775px;

}

#BSSFIBottom-Function-Course {
  margin-left: 1075px;

}

#BSSFIBottom-Context {
  position: absolute;
  width: 100%;
  height: 600px;
  margin-top: 50px;
  background: #03243E;
}
</style>