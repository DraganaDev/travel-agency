import React from "react";
import { Link } from "react-router-dom";
import { MdFreeBreakfast, MdPool, MdHotTub } from "react-icons/md";
import { MdRestaurant, MdNoMeals } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Star from "./Star";
import useSingleHotel from "../hooks/useSingleHotel";

const HotelCard = ({ name }) => {
  const { data: hotel, error } = useSingleHotel(name);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <article className="hotel-card-wrapper">
      <div className="hotel-img-container">
        <img
          className="hotel-img"
          src={`./img/${hotel?.img}.jpg`}
          alt={hotel?.hotelName}
        />
      </div>
      <div className="hotel-info">
        <h3>
          {hotel?.hotelName} <Star stars={hotel?.stars} className="star" />
        </h3>

        <p className="place">
          <FaMapMarkerAlt className="icon" />
          {hotel?.place}
        </p>

        <p className="meal">
          {hotel?.meal === "All inclusive" ? (
            <MdRestaurant className="icon" />
          ) : hotel?.meal === "Breakfast included" ? (
            <MdFreeBreakfast className="icon" />
          ) : (
            <MdNoMeals className="icon" />
          )}
          {hotel?.meal}
        </p>
        <p className="amenitie">
          {hotel?.amenitie === "Pool" ? (
            <MdPool className="icon" />
          ) : (
            <MdHotTub className="icon" />
          )}
          {hotel?.amenitie}
        </p>
        <div className="rating-btn-wrapper">
          <div className="rating-reviews">
            <p className="rating">{hotel?.rating}</p>
            <div className="review">
              <p>{hotel?.review}</p>
              <p>{hotel?.numberOfReviews} reviews</p>
            </div>
          </div>

          <div className="price-btn-wrapper">
            <p className="price">&euro;{hotel?.price}</p>
            <p>for 1 night</p>
            <p>includes taxes and fees</p>
            <Link className="btn view-more" to={hotel?.hotelName.toLowerCase()}>
              View more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
