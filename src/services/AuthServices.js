import http from "./httpService";

export async function getOtp(data) {
  return await http.post("/user/get-otp", data).then(({ data }) => {
    return data.data;
  });
}
export async function checkOtp(data) {
  return await http.post("/user/check-otp", data).then(({ data }) => {
    return data.data;
  });
}
export async function completeProfile(data) {
  return await http.post("/user/complete-profile", data).then(({ data }) => {
    return data.data;
  });
}
export async function getUserProfile() {
  return await http.get("/user/profile").then(({ data }) => {
    return data.data;
  });
}
