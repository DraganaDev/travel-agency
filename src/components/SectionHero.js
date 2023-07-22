import { Link } from "react-router-dom";

const SectionHero = () => {
  return (
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
  );
};

export default SectionHero;
