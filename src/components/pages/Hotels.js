import React, { useState, useRef } from "react";
import HotelCard from "../HotelCard";
import Filters from "../Filters";
import NoResults from "../NoResults";
import { MdFilterAlt } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import useHotels from "../../hooks/useHotels";

const Hotels = () => {
  const { data: hotels, isLoading, error } = useHotels();
  const [showFilters, setShowFilters] = useState(false);
  const [starNumber, setStarNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [meal, setMeal] = useState("");
  const selectStarsRef = useRef(null);
  const selectDestinationRef = useRef(null);
  const selectMealRef = useRef(null);

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

  const handleRefreshClick = () => {
    setDestination("");
    setStarNumber("");
    setMeal("");
    selectStarsRef.current.value = "";
    selectDestinationRef.current.value = "";
    selectMealRef.current.value = "";
  };

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
            selectStarsRef={selectStarsRef}
            selectMealRef={selectMealRef}
            selectDestinationRef={selectDestinationRef}
            setMeal={setMeal}
            setStarNumber={setStarNumber}
            setDestination={setDestination}
            showFilters={showFilters}
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
              <HotelCard key={hotel.id} hotel={hotel} />
            ))
          ) : (
            <NoResults handleRefreshClick={handleRefreshClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
