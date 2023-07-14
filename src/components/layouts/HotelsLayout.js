import React from "react";
import { Outlet } from "react-router-dom";
import useHotels from "../../hooks/useHotels";

const HotelsLayout = () => {
  const { data: hotels, error } = useHotels();

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="hotels-bg">
      <Outlet context={{ hotels }} />
    </div>
  );
};

export default HotelsLayout;
