import {
  addNewProduct,
  getOneProductById,
  getProducts,
  removeProduct,
  updateProduct,
} from "@/services/productsService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetProducts() {
  return useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    refetchOnWindowFocus: true,
    retry: false,
  });
}
export const useRemoveProduct = () => {
  return useMutation({ mutationFn: removeProduct });
};
export function useGetProductById(id) {
  return useQuery({
    queryKey: ["get-product", id],
    queryFn: () => getOneProductById(id),
    refetchOnWindowFocus: true,
    retry: false,
  });
}
export const useAddProduct = () => {
  return useMutation({ mutationFn: addNewProduct });
};
export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: updateProduct,
  });
};
