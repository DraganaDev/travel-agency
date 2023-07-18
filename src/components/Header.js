import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";

const Header = ({ isVisible, setIsVisible }) => {
  const handleToggleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const closeMobileMenu = () => {
    setIsVisible(false);
  };

  return (
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
  );
};

export default Header;
