import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const closeMobileMenu = () => {
    setIsVisible(false);
  };

  const handleToggleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <div className="root-layout" onClick={closeMobileMenu}>
      <ScrollToTop />
      <header className="header">
        <div className="header-layout container">
          <Link className="logo" to="/">
            <span className="travel">Travel</span>Log
          </Link>

          <button
            className="mob-nav-toggle-btn"
            aria-controls="primary-navigation"
            aria-expanded={isVisible}
            onClick={handleToggleClick}
          >
            <span className="sr-only">{isVisible ? "Close" : "Open"} Menu</span>
            {isVisible ? (
              <IoMdCloseCircle size="30px" />
            ) : (
              <GiHamburgerMenu size="30px" />
            )}
          </button>
          <nav>
            <ul
              id="primary-navigation"
              data-visible={isVisible}
              className="primary-navigation flex"
            >
              <li>
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={closeMobileMenu}
                  onKeyDown={(e) =>
                    e.shiftKey && e.key === "Tab" && closeMobileMenu()
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="destinations"
                  onClick={closeMobileMenu}
                >
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="hotels"
                  onClick={closeMobileMenu}
                >
                  Hotels
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="nav-link"
                  to="contact"
                  onClick={closeMobileMenu}
                  onKeyDown={(e) =>
                    !e.shiftKey && e.key === "Tab" && closeMobileMenu()
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container footer-layout">
          <div className="about-company">
            <h3>About our company</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              provident alias nobis tenetur sunt? In doloremque fuga eos
              necessitatibus nulla, hic perspiciatis excepturi maiores
              reiciendis velit delectus soluta sed ullam doloribus expedita!
              Sint quibusdam consequatur tempore laborum minus nulla sequi,
              voluptatem, dolores deserunt est voluptate aliquam cupiditate
              optio eos cumque, deserunt est voluptate aliquam cupiditate.
            </p>
          </div>
          {/* <div>
            <h3>Popular destinations</h3>
            <ul>
              <li>
                <Link className="footer-link">London</Link>
              </li>
              <li>
                <Link className="footer-link">New York</Link>
              </li>
              <li>
                <Link className="footer-link">Cancun</Link>
              </li>
            </ul>
          </div> */}
          <div className="contact-follow-wrapper">
            <div className="contact-info">
              <h3>Contact info</h3>
              <ul>
                <li>
                  <Link className="footer-link">
                    Call Center: +389 2 123 1234
                  </Link>
                </li>
                <li>
                  <Link className="footer-link">
                    E-mail: travellog@travel.com.mk
                  </Link>
                </li>
                <li>
                  <Link className="footer-link">Viber: +389 77 101 202</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>Follow us</h3>
              <ul className="social-icons">
                <li>
                  <Link
                    title="Go to TravelLog's facebook page"
                    className="footer-link"
                  >
                    <FaFacebook size={21} />
                  </Link>
                </li>
                <li>
                  <Link
                    title="Go to TravelLog's instagram"
                    className="footer-link"
                  >
                    <FaInstagram size={21} />
                  </Link>
                </li>
                <li>
                  <Link
                    title="Go to TravelLog's pinterest"
                    className="footer-link"
                  >
                    <FaPinterest size={21} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
