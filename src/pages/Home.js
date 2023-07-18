import React from "react";
import mountain from "../assets/images/mountain.jpg";
import city from "../assets/images/city.jpg";
import beach from "../assets/images/beach.jpg";
import antalya from "../assets/images/antalya.jpg";
import bodrum from "../assets/images/bodrum.jpg";
import kapadokya from "../assets/images/kapadokya.jpg";
import istanbul from "../assets/images/istanbul.jpg";
import hurgada from "../assets/images/hurgada.jpg";
import santorini from "../assets/images/santorini.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const recommendedTrips = [
    { src: antalya, place: "Antalya", hotel: "well palace side" },
    { src: bodrum, place: "Bodrum", hotel: "bodrum beach resort" },
    { src: kapadokya, place: "Kapadokya", hotel: "rox goreme" },
    { src: istanbul, place: "Istanbul", hotel: "beyaz saray" },
    { src: hurgada, place: "Hurgada", hotel: "swiss in resort" },
    { src: santorini, place: "Santorini", hotel: "artemis suites" },
  ];

  const homeCards = [
    {
      src: mountain,
      alt: "houses by the lake surronded with mountains",
      title: "Mountain lovers",
    },
    { src: beach, alt: "lagoon beach", title: "Beach lovers" },
    { src: city, alt: "eiffel tour", title: "City lovers" },
  ];
  return (
    <>
      <section className="section-hero">
        <div aria-hidden="true" className="hero-img"></div>
        <div className="container">
          <div className="hero-content-wrapper">
            <p className="intro-hero">Travel with ease</p>
            <h1 className="h1-hero">Destinations of your dreams</h1>
            <Link className="btn btn-hero" to="hotels">
              Explore now
            </Link>
          </div>
        </div>
      </section>

      <section className="section-one ">
        <div className="container section-one-layout">
          <div className="section-one-text">
            <h2>Inspiring travel since 1988</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              veritatis ullam quibusdam molestias? Rerum eveniet, consectetur
              quia, amet ab eligendi inventore aliquid tempore veniam voluptates
              ad mollitia unde eius omnis. Eligendi vitae distinctio accusamus
              possimus numquam minima ab unde ducimus! Id quae velit
              consequuntur aliquam voluptate consequatur maiores! Cupiditate,
              quasi!
            </p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              perferendis exercitationem sequi libero quaerat esse eos. Et
              incidunt vero eligendi quas nemo soluta esse voluptatem, deleniti
              mollitia quasi a voluptas!
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              veritatis ullam quibusdam molestias? Rerum eveniet, consectetur
              quia, amet ab eligendi inventore aliquid tempore veniam voluptates
              ad mollitia unde eius omnis. Eligendi vitae distinctio accusamus
              possimus numquam minima ab unde ducimus! Id quae velit
              consequuntur aliquam.
            </p>
          </div>
          <div className="section-one-cards">
            <h2>Recommended trips</h2>
            <div className="section-one-cards-wrapper">
              {recommendedTrips.map((trip) => (
                <Link
                  key={trip.place}
                  title={`Visit link about hotel in ${trip.place}`}
                  to={`/hotels/${trip.hotel}`}
                >
                  <figure className="section-one-img-wrapper">
                    <figcaption>
                      {trip.place} <MdArrowForwardIos className="arrow" />
                    </figcaption>
                    <img src={trip.src} alt={trip.place} />
                  </figure>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="container section-two-layout">
          {homeCards.map((card) => (
            <HomeCard
              key={card.alt}
              imageUrl={card.src}
              alt={card.alt}
              title={card.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
