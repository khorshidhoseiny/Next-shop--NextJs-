import axios from "axios";

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => new Promise.reject(err)
);
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await app.get(`/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) app(originalConfig);
      } catch (error) {
        new Promise.reject(error);
      }
    }
  }
);

const http = {
  get: app.get,
  put: app.put,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  delete: app.delete,
};
export default http;
