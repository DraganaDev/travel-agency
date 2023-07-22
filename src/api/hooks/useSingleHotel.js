import { useQuery } from "@tanstack/react-query";
import { getHotelByName } from "../hotels";

const useSingleHotel = (nameOfHotel) => {
  return useQuery({
    queryKey: ["hotels", nameOfHotel],
    queryFn: () => getHotelByName(nameOfHotel),
  });
};

export default useSingleHotel;
