import React from "react";

const GoogleMap = ({ hotel }) => {
  return (
    <div className="hotel-map-wrapper">
      <h3>Location</h3>
      <iframe
        src={hotel.src}
        width="600"
        height="450"
        title={`${hotel.hotelName} location`}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;