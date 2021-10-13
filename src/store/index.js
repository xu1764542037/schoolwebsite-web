import Vue from "vue";
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getter from "./getter";

Vue.use(Vuex)


const state = {
  IdCardNumber: '',
  Code: '',
  Name: '',
  Sex: '',
  Age: '',
  Tel: '',
  StudentId: '',
  Identity: '',
  CreateTime: '',
  StudentProfessionId: '',
  StudentProfessionName: '',
  StudentBranchId: '',
  StudentBranchName: '',
  StudentClassId: '',
  StudentClassName: '',
  StudentQQ: '',
  StudentAddress: '',
  TeacherId: '',
  TeacherBranchId: '',
  TeacherBranchName: '',
  TeacherSalary: '',
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getter
})


export default store