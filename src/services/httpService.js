import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const http = {
  get: app.get,
  put: app.put,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  delete: app.delete,
};
export default http;
