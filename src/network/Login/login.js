import {request} from "@/network/request";

export function selectIdAndPwd(id,password) {
  return request({
    url: "/UserInfo/select",
    method: "get",
    params: {
      id: id,
      password: password
    }
  })
}
