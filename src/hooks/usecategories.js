import { removeCategory } from "@/services/cartService";
import {
  addNewCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "@/services/categoryService";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useCategories() {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: getAllCategories,
    refetchOnWindowFocus: true,
    retry: false,
  });
}
export function useGetCategoryById(id) {
  return useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    refetchOnWindowFocus: true,
    retry: false,
  });
}

export const useRemoveCategory = () => {
  return useMutation({ mutationFn: removeCategory });
};
export const useUpdateCategory = () => {
  return useMutation({ mutationFn: updateCategory });
};
export const useAddNewCategory = () => {
  return useMutation({ mutationFn: addNewCategory });
};
