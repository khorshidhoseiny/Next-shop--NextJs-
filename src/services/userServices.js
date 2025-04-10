import http from "./httpService";

export async function getOtp(data) {
  return await http.post("/user/get-otp", { data }).then(({ data }) => {
    return data.data;
  });
}
export async function checkOtp(data) {
  return await http.post("/user/check-otp", { data }).then(({ data }) => {
    return data.data;
  });
}
