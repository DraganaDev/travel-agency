import { useState } from "react";
import HotelCard from "../components/HotelCard";
import Filters from "../components/Filters";
import NoResults from "../components/NoResults";
import { MdFilterAlt } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import useHotels from "../hooks/useHotels";

const Hotels = () => {
  const { data: hotels, isLoading, error } = useHotels();
  const [showFilters, setShowFilters] = useState(false);
  const [starNumber, setStarNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [meal, setMeal] = useState("");

  const filters = [starNumber, destination, meal];
  let displayHotels = hotels;

  if (filters && starNumber) {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.stars.toString())
    );
  }

  if (filters && destination) {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.place)
    );
  }

  if (filters && meal) {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.meal)
    );
  }

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error: {error.message}</p>;

  const closeFilters = () => {
    setShowFilters(false);
  };

  return (
    <div>
      <div className="container filters-hotels-flex">
        <div className="filters-layout" data-visible={showFilters}>
          <h2 className="filters-h2">Hotels</h2>
          <button className="close-filters" onClick={closeFilters}>
            <IoMdCloseCircle size={30} />
          </button>
          <Filters
            setMeal={setMeal}
            setStarNumber={setStarNumber}
            setDestination={setDestination}
            closeFilters={closeFilters}
          />
        </div>
        <div className="hotels-layout">
          {showFilters && (
            <div className="overlay" onClick={closeFilters}></div>
          )}

          <div className="h2-btn-wrapper">
            <h2 className="hotels-h2">Hotels</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              title="Show filters"
              className="filter-btn"
            >
              <MdFilterAlt size={30} />
            </button>
          </div>
          {displayHotels.length !== 0 ? (
            displayHotels?.map((hotel) => (
              <HotelCard key={hotel.id} name={hotel.hotelName.toLowerCase()} />
            ))
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
