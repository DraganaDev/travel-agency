import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="hotels-bg">
      <div className="container">
        <div className="no-results-bg">
          <h2 className="no-results-h3">Page not found!</h2>
          <p>
            Lorem ispum dolor sit amet consectetur elit. Pariatur recusadus,
            amaet ab staque, harum beathae. In, sumameda dolorum cilnapa.
          </p>

          <p>
            Go to the <Link to="/">Home</Link> page.
          </p>
        </div>
      </div>
    </div>
  );
}
