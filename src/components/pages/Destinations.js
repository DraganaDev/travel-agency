import React from "react";
// import { useOutletContext, useParams, Link } from "react-router-dom";
import turkiye1 from "../../images/turkey4.jpg";
import egypt from "../../images/egypt2.jpg";
import greece from "../../images/greece.jpg";
import Antalya from "../Antalya";
import Destination from "../Destination";
import Paragraph from "../Paragraph";

const Destinations = () => {
  const antalyaPlaces = ["Alanya", "Belek", "Kemer", "Side"];
  return (
    <div className="hotels-bg">
      <div className="container ">
        <h2 className="destinations-h2">Destinations</h2>
        <div className="turkiye-layout">
          <section className="destination turkiye">
            <h3>Amazing places in Turkiye</h3>
            <Paragraph />
            <div className="img-box">
              <img
                className="turkiye-img"
                src={turkiye1}
                alt="antalya sea coast"
              />
            </div>
            <Paragraph />
            <Paragraph />
          </section>
          <aside className="antalya-wrapper">
            {antalyaPlaces.map((place) => (
              <Antalya key={place} title={place} />
            ))}
          </aside>
        </div>
      </div>
      <Destination place="greece" title="Aegean sea in Greece" src={greece} />
      <Destination place="egypt" title="Egypts' ancient places" src={egypt} />
    </div>
  );
};

export default Destinations;
