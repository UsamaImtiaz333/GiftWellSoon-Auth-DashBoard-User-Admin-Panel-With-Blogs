import { getAllUsers } from "@/services/dashboardApi/GetUsersApi";
import { useQuery } from "@tanstack/react-query";


export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
}
