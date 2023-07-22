import { useState } from "react";
import HotelCard from "../components/HotelCard";
import Filters from "../components/Filters";
import NoResults from "../components/NoResults";
import { MdFilterAlt } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import useHotels from "../api/hooks/useHotels";
import Loader from "../components/Loader";

const Hotels = () => {
  const { data: hotels, isLoading, error } = useHotels();
  const [showFilters, setShowFilters] = useState(false);
  const [starNumber, setStarNumber] = useState("all");
  const [destination, setDestination] = useState("all");
  const [meal, setMeal] = useState("all");

  const filters = [starNumber, destination, meal];
  let displayHotels = hotels;

  if (starNumber !== "all") {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.stars.toString())
    );
  }

  if (destination !== "all") {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.place)
    );
  }

  if (meal !== "all") {
    displayHotels = displayHotels.filter((hotel) =>
      filters.join(" ").includes(hotel.meal)
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  const closeFilters = () => {
    setShowFilters(false);
  };

  const resetFilters = () => {
    setDestination("all");
    setMeal("all");
    setStarNumber("all");
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
            meal={meal}
            destination={destination}
            starNumber={starNumber}
          />
        </div>
        <div className="hotels-layout">
          {showFilters && (
            <div className="overlay" onClick={closeFilters}></div>
          )}

          <div className="h2-btn-wrapper">
            <h2 className="hotels-h2">Hotels</h2>
            <button
              onClick={() => setShowFilters(true)}
              title="Show filters"
              className="filter-btn"
            >
              <MdFilterAlt size={30} />
            </button>
          </div>
          {isLoading && <Loader />}
          {!isLoading && (
            <div>
              {displayHotels.length !== 0 ? (
                displayHotels?.map((hotel) => (
                  <HotelCard
                    key={hotel.id}
                    name={hotel.hotelName.toLowerCase()}
                  />
                ))
              ) : (
                <NoResults resetFilters={resetFilters} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
