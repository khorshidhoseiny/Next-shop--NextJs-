import { getAllUsers, getUserProfile } from "@/services/AuthServices";
import { useQuery } from "@tanstack/react-query";

export function useGetUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUserProfile,
    refetchOnWindowFocus: true,
    retry: false,
  });
}
export function useGetUsers() {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: getAllUsers,
    refetchOnWindowFocus: true,
    retry: false,
  });
}
