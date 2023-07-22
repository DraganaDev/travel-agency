import antalya from "../assets/images/antalya.jpg";
import bodrum from "../assets/images/bodrum.jpg";
import kapadokya from "../assets/images/kapadokya.jpg";
import istanbul from "../assets/images/istanbul.jpg";
import hurgada from "../assets/images/hurgada.jpg";
import santorini from "../assets/images/santorini.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const SectionOne = () => {
  const recommendedTrips = [
    { src: antalya, place: "Antalya", hotel: "well palace side" },
    { src: bodrum, place: "Bodrum", hotel: "bodrum beach resort" },
    { src: kapadokya, place: "Kapadokya", hotel: "rox goreme" },
    { src: istanbul, place: "Istanbul", hotel: "beyaz saray" },
    { src: hurgada, place: "Hurgada", hotel: "swiss in resort" },
    { src: santorini, place: "Santorini", hotel: "artemis suites" },
  ];
  return (
    <section className="section-one ">
      <div className="container section-one-layout">
        <div className="section-one-text">
          <h2>Inspiring travel since 1988</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            veritatis ullam quibusdam molestias? Rerum eveniet, consectetur
            quia, amet ab eligendi inventore aliquid tempore veniam voluptates
            ad mollitia unde eius omnis. Eligendi vitae distinctio accusamus
            possimus numquam minima ab unde ducimus! Id quae velit consequuntur
            aliquam voluptate consequatur maiores! Cupiditate, quasi!
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
            possimus numquam minima ab unde ducimus! Id quae velit consequuntur
            aliquam.
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
  );
};

export default SectionOne;
