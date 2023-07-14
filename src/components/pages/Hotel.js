import React, { useMemo } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import TravelOverview from "../TravelOverview";
import Star from "../Star";
import Amenities from "../Amenities";
import GoogleMap from "../GoogleMap";

const Hotel = () => {
  const { hotels } = useOutletContext();
  const { name } = useParams();

  const hotel = useMemo(
    () => hotels.find((hotel) => hotel.hotelName.toLowerCase() === name),
    [hotels, name]
  );

  return (
    <>
      <div className="single-hotel container">
        <ul className="hotel-images-list">
          {hotel?.images.map((image) => (
            <li key={image}>
              <img src={`../img/${image}.jpg`} alt={hotel?.hotelName} />
            </li>
          ))}
        </ul>
        <div className="single-hotel-wrapper">
          <div className="single-hotel-content">
            <h2>
              {hotel?.hotelName}{" "}
              <Star stars={hotel?.stars} className="star bigger-star" />
            </h2>
            <p className="place">
              <FaMapMarkerAlt className="icon" />
              {hotel?.place}
            </p>

            <p className="rating-hotel">
              <span>{hotel?.rating}/10</span> <span>{hotel?.review}</span>
            </p>
            <p>{hotel?.numberOfReviews} reviews</p>
            <Amenities hotel={hotel} />
            <GoogleMap hotel={hotel} />
          </div>
          <TravelOverview hotel={hotel} />
        </div>
      </div>
    </>
  );
};

export default Hotel;
