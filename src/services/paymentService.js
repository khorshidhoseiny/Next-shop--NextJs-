import axios from "axios";
import http from "./httpService";

export function CreatePayment() {
  return http.post("/payment/create").then(({ data }) => data.data);
}
export function getAllPayments() {
  return http.get("/admin/payment/list").then(({ data }) => data.data);
}
export function getAllPayments2() {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/admin/payment/list`)
    .then(({ data }) => data.data);
}

export function getOnePayment(id) {
  return http.get(`/admin/payment/${id}`).then(({ data }) => data.data);
}
