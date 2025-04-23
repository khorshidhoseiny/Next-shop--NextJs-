import { getAllPayments, getOnePayment } from "@/services/paymentService";
import { useQuery } from "@tanstack/react-query";

export function useGetPayments() {
  return useQuery({
    queryKey: ["get-payments"],
    queryFn: getAllPayments,
  });
}
export function useGetPaymentById(id) {
  return useQuery({
    queryKey: ["get-payment", id],
    queryFn: () => getOnePayment(id),
  });
}
