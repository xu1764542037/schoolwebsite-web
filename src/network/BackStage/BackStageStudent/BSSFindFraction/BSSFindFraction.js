import {request} from "@/network/request";

export function selectGradeByStudentId() {
  return request({
    url: "/Grade/select",
    method: "get",
    params: {
    }
  })
}