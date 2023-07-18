import { useQuery } from "@tanstack/react-query";
import APIClient from "../APIClient";

const apiClient = new APIClient("/hotelsArray");

const useHotels = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useHotels;
