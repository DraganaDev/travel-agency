import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useSingleHotel from "../hooks/useSingleHotel";

const TravelOverview = () => {
  const { name } = useParams();
  const { data: hotel, error } = useSingleHotel(name);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="travel-overview">
      <h3>Travel Overview</h3>
      <div className="travel-overview-flex">
        <div className="travel-tour">
          <h4>Travel tour</h4>
          <p>
            <span>People</span> <span>2 adults</span>
          </p>
          <p>
            <span>Duration</span> <span>{hotel?.duration} nights</span>
          </p>
          <p>
            <span>Check in</span> <span>{hotel?.checkIn}</span>
          </p>
          <p>
            <span>Check out</span> <span>{hotel?.checkOut}</span>
          </p>
        </div>

        <div className="accommodation">
          <h4>Accommodation</h4>
          <p>
            <span>Location</span> <span>{hotel?.place}</span>
          </p>
          <p>
            <span>Hotel</span> <span>{hotel?.hotelName}</span>
          </p>
          <p>
            <span>Room</span> <span>{hotel?.room}</span>
          </p>
          <p>
            <span>Meal</span> <span>{hotel?.meal}</span>
          </p>
        </div>
      </div>
      <div className="price-reserve-wrapper">
        <p className="price-hotel">
          <span className="price">
            &euro;{parseInt(hotel?.price) * parseInt(hotel?.duration)}
          </span>
          <span> for {hotel?.duration} nights</span>
        </p>
        <Link className="btn view-more" to="/hotels">
          Reserve
        </Link>
      </div>
    </div>
  );
};

export default TravelOverview;
