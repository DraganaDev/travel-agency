import React from "react";
import { Link } from "react-router-dom";
import { FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa";
import ContactLinks from "./ContactLinks";
import About from "./About";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-layout">
        <About />
        <div className="contact-follow-wrapper">
          <div className="contact-info">
            <h3>Contact info</h3>
            <ul>
              <ContactLinks linkClass="footer-link" />
            </ul>
          </div>
          <div>
            <h3>Follow us</h3>
            <ul className="social-icons">
              <li>
                <Link
                  title="Go to TravelLog's facebook page"
                  className="social-link"
                >
                  <FaFacebook size={21} />
                </Link>
              </li>
              <li>
                <Link
                  title="Go to TravelLog's instagram"
                  className="social-link"
                >
                  <FaInstagram size={21} />
                </Link>
              </li>
              <li>
                <Link
                  title="Go to TravelLog's pinterest"
                  className="social-link"
                >
                  <FaPinterest size={21} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
