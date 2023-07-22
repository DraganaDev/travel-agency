import { useQuery } from "@tanstack/react-query";
import { getAll } from "../hotels";

const useHotels = () => {
  return useQuery({
    queryKey: ["hotels"],
    queryFn: getAll,
  });
};

export default useHotels;
