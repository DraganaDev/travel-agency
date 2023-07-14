import React from "react";

const HomeCard = ({ title, src, alt }) => {
  return (
    <div className="card">
      <div className="card-text-content">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          possimus ut. Doloribus vitae esse perferendis ad nisi quidem?
          Inventore, voluptatum officiis sint harum corporis sapiente animi sit
          id sequi quas, sint harum corporis.
        </p>
      </div>
      <div className="card-img-container">
        <img className="card-img" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default HomeCard;
