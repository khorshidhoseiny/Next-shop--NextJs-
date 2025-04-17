import { addToCart, removeFromCart } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useAddToCart() {
  return useMutation({
    mutationFn: addToCart,
  });
}

export function useDecrementCart() {
  return useMutation({
    mutationFn: removeFromCart,
  });
}
