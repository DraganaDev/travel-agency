import { useQuery } from "@tanstack/react-query";
import APIClient from "../APIClient";

const apiClient = new APIClient("/hotelsArray");

const useSingleHotel = (nameOfHotel) => {
  return useQuery({
    queryKey: ["hotels", nameOfHotel],
    queryFn: () => apiClient.getSingleHotel(nameOfHotel),
  });
};

export default useSingleHotel;
