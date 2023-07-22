import mountain from "../assets/images/mountain.jpg";
import city from "../assets/images/city.jpg";
import beach from "../assets/images/beach.jpg";
import HomeCard from "../components/HomeCard";

const SectionTwo = () => {
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
  );
};

export default SectionTwo;
