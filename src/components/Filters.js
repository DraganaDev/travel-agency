import React, { useMemo } from "react";
import useHotels from "../hooks/useHotels";
import Select from "./Select";

const Filters = ({ setMeal, setDestination, setStarNumber, closeFilters }) => {
  const { data: hotels } = useHotels();

  const places = useMemo(
    () => [...new Set(hotels.map((hotel) => hotel.place))].sort(),
    [hotels]
  );

  const meals = useMemo(
    () => [...new Set(hotels.map((hotel) => hotel.meal))],
    [hotels]
  );

  const stars = useMemo(
    () => [...new Set(hotels.map((hotel) => hotel.stars.toString()))].sort(),
    [hotels]
  );

  return (
    <div>
      <Select
        id="select-place"
        label="destination"
        filters={places}
        onChange={(e) => setDestination(e.target.value)}
      />
      <Select
        id="select-stars"
        label="hotel class"
        filters={stars}
        onChange={(e) => setStarNumber(e.target.value)}
      />
      <Select
        id="select-meal"
        label="meal plans"
        filters={meals}
        onChange={(e) => setMeal(e.target.value)}
        onKeyDown={(e) => !e.shiftKey && e.key === "Tab" && closeFilters()}
      />
    </div>
  );
};

export default Filters;
