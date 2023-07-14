import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useHotels = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: () =>
      axios.get("http://localhost:4000/hotelsArray").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useHotels;
