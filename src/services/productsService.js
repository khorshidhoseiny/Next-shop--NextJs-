import http from "./httpService";

export function getProducts(qs) {
  return http.get(`/product/list?${qs}`).then(({ data }) => data.data);
}
export function getOneProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
