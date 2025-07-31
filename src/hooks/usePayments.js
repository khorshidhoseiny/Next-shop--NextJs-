import { getAllPayments, getOnePayment } from "@/services/paymentService";
import { useQuery } from "@tanstack/react-query";

export function useGetPayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
    retry: false,
  });
}
export function useGetPaymentById(id) {
  return useQuery({
    queryKey: ["get-payment", id],
    queryFn: () => getOnePayment(id),
  });
}
