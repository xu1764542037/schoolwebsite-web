import {request} from "@/network/request";

export function selectClassmate(ClassId) {
  return request({
    url: "/Student/select",
    method: "get",
    params: {
      classId: ClassId
    }
  })
}


export function selectTeacher_Class_CourseById(TeaId,CouId,ClaId) {
  return request({
    url: "/Teacher_Class/select",
    method: "get",
    params: {
      TeaId: TeaId,
      CouId: CouId,
      ClaId: ClaId
    }
  })
}
