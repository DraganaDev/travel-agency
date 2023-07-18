import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get(this.endpoint).then((res) => res.data);
  };

  getSingleHotel = (name) => {
    return axiosInstance
      .get(this.endpoint)
      .then((res) =>
        res.data.find((item) => item.hotelName.toLowerCase() === name)
      );
  };
}

export default APIClient;
