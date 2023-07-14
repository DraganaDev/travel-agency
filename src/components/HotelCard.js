import React from "react";
import Star from "./Star";
import { MdFreeBreakfast, MdPool, MdHotTub } from "react-icons/md";
// import { TbInfinity } from "react-icons/tb";
import { MdRestaurant, MdNoMeals } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const {
    img,
    hotelName,
    place,
    stars,
    price,
    rating,
    review,
    numberOfReviews,
    meal,
    amenitie,
  } = hotel;

  return (
    <article className="hotel-card-wrapper">
      <div className="hotel-img-container">
        <img className="hotel-img" src={`./img/${img}.jpg`} alt={hotelName} />
      </div>
      <div className="hotel-info">
        <h3>
          {hotelName} <Star stars={stars} className="star" />
        </h3>

        <p className="place">
          <FaMapMarkerAlt className="icon" />
          {place}
        </p>

        <p className="meal">
          {meal === "All inclusive" ? (
            <MdRestaurant className="icon" />
          ) : meal === "Breakfast included" ? (
            <MdFreeBreakfast className="icon" />
          ) : (
            <MdNoMeals className="icon" />
          )}
          {meal}
        </p>
        <p className="amenitie">
          {amenitie === "Pool" ? (
            <MdPool className="icon" />
          ) : (
            <MdHotTub className="icon" />
          )}
          {amenitie}
        </p>
        <div className="rating-btn-wrapper">
          <div className="rating-reviews">
            <p className="rating">{rating}</p>
            <div className="review">
              <p>{review}</p>
              <p>{numberOfReviews} reviews</p>
            </div>
          </div>

          <div className="price-btn-wrapper">
            <p className="price">&euro;{price}</p>
            <p>for 1 night</p>
            <p>includes taxes and fees</p>
            <Link className="btn view-more" to={hotelName.toLowerCase()}>
              View more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
