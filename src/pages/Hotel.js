import { useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import TravelOverview from "../components/TravelOverview";
import Star from "../components/Star";
import Amenities from "../components/Amenities";
import GoogleMap from "../components/GoogleMap";
import Loader from "../components/Loader";
import useSingleHotel from "../api/hooks/useSingleHotel";

const Hotel = () => {
  const { name } = useParams();
  const { data: hotel, isLoading, error } = useSingleHotel(name);

  if (error)
    return (
      <div className="single-hotel">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="single-hotel container">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <ul className="hotel-images-list">
            {hotel?.images?.map((image) => (
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
              <Amenities />
              <GoogleMap />
            </div>
            <TravelOverview />
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;
