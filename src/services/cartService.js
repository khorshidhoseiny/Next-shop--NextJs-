import http from "./httpService";

export function addToCart(productId) {
  return http.post("/cart/add", { productId }).then(({ data }) => data.data);
}
export function removeFromCart(productId) {
  return http.post("/cart/remove", { productId }).then(({ data }) => data.data);
}
export function removeCategory(id) {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
}
