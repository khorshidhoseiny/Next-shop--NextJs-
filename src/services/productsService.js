import http from "./httpService";

export function getProducts(qs, cookies) {
  return http
    .get(`/product/list?${qs}`, {
      headers: {
        Cookie: cookies,
      },
    })
    .then(({ data }) => data.data);
}
export function getOneProductBySlug(slug) {
  return http.get(`/product/slug/${slug}`).then(({ data }) => data.data);
}
export function getOneProductById(id) {
  return http.get(`/product/${id}`).then(({ data }) => data.data);
}
export function addNewProduct(productForm) {
  return http
    .post(`/admin/product/add`, productForm)
    .then(({ data }) => data.data);
}
export function likeProduct(id) {
  return http.post(`/product/like/${id}`).then(({ data }) => data.data);
}

export function removeProduct(id) {
  return http
    .delete(`/admin/product/remove/${id}`)
    .then(({ data }) => data.data);
}
export function updateProduct({ productId, data }) {
  return http
    .patch(`/admin/product/update/${productId}`, data)
    .then(({ data }) => data.data);
}
