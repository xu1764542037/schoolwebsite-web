export default {
  //Vue添加学生信息
  addStudentInfo(state,plyload){
    state.IdCardNumber = plyload.idcardnumber.idCardNumber
    state.Code = plyload.idcardnumber.code
    state.Name = plyload.studentName
    state.Sex = plyload.sex
    state.Age = plyload.age
    state.Tel = plyload.tel
    state.Identity = '学生'
    state.CreateTime = plyload.createTime.split("T")[0]
    state.StudentId = plyload.id
    state.StudentProfessionId = plyload.profession.professionId
    state.StudentProfessionName = plyload.profession.professionName
    state.StudentBranchId = plyload.branch.id
    state.StudentBranchName = plyload.branch.branchName
    state.StudentClassId = plyload.classes.id
    state.StudentClassName = plyload.classes.className
    state.StudentQQ = plyload.qq
    state.StudentAddress = plyload.address
  },

  //Vuex添加教师信息
  addTeacherInfo(state,plyload){
    state.IdCardNumber = plyload.idcardnumber.idCardNumber
    state.Code = plyload.idcardnumber.code
    state.Name = plyload.teacherName
    state.Sex = plyload.sex
    state.Identity = '老师'
    state.CreateTime = plyload.createTime.split("T")[0]
    state.TeacherId = plyload.id
    state.TeacherBranchId = plyload.branch.id
    state.TeacherBranchName = plyload.branch.branchName
    state.TeacherSalary = plyload.salary
  },
}