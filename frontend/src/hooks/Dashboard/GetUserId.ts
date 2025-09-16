import { getUserById } from "@/services/dashboardApi/GetUserIdApi";
import { useQuery } from "@tanstack/react-query";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
};