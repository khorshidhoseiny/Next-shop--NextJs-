import {
  addNewCoupon,
  getAllCoupons,
  getOneCoupon,
  removeCoupon,
  updateCoupon,
} from "@/services/couponsService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetOneCoupon = (id) =>
  useQuery({
    queryKey: ["get-coupon", id],
    queryFn: () => getOneCoupon(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useAddCoupon = () => {
  return useMutation({ mutationFn: addNewCoupon });
};
export const useUpdateCoupon = () => {
  return useMutation({ mutationFn: updateCoupon });
};
export const useRemoveCoupon = () => {
  return useMutation({ mutationFn: removeCoupon });
};
