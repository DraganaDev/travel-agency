import React from "react";
import { useParams } from "react-router-dom";
import useSingleHotel from "../api/hooks/useSingleHotel";

const GoogleMap = () => {
  const { name } = useParams();
  const { data: hotel, error } = useSingleHotel(name);

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="hotel-map-wrapper">
      <h3>Location</h3>
      <iframe
        src={hotel?.src}
        width="600"
        height="450"
        title={`${hotel?.hotelName} location`}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
