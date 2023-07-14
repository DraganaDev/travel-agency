import React from "react";
import {
  MdRestaurant,
  MdFreeBreakfast,
  MdPool,
  MdHotTub,
  MdWifi,
  MdSpa,
  MdLocalParking,
  MdKitchen,
} from "react-icons/md";
import { IoMdBus, IoMdSnow } from "react-icons/io";

const Amenities = ({ hotel }) => {
  const allAmenities = {
    breakfast: <MdFreeBreakfast />,
    kitchen: <MdKitchen />,
    allincl: <MdRestaurant />,
    pool: <MdPool />,
    spa: <MdSpa />,
    bus: <IoMdBus />,
    parking: <MdLocalParking />,
    hottub: <MdHotTub />,
    wifi: <MdWifi />,
    air: <IoMdSnow />,
  };
  return (
    <div className="popular-amenities">
      <h3>Popular amenities</h3>
      <ul className="amenities-flex">
        {hotel.amenities.map((amenitie) => (
          <li key={amenitie.name}>
            <span className="icon"> {allAmenities[amenitie.icon]}</span>
            {amenitie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Amenities;
