import axiosInstance from "./apiClient";

const hotelsUrl = "/hotelsArray";

export const getAll = () =>
  axiosInstance.get(hotelsUrl).then((res) => res.data);

export const getHotelByName = (name) =>
  axiosInstance
    .get(hotelsUrl)
    .then((res) =>
      res.data.find((hotel) => hotel.hotelName.toLowerCase() === name)
    );
