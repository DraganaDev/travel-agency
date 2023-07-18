import React from "react";
import ContactLinks from "../components/ContactLinks";

const Contact = () => {
  return (
    <div className="contact-bg">
      <div className="container">
        <h2 className="contact-h2">Contact us</h2>
        <div className="contact-layout">
          <div className="contact">
            <h3>Contact info</h3>

            <ul>
              <li>
                <span>Address: </span>
                <address>
                  Nikola Vapcarov 22, 1000 Skopje, North Macedonia
                </address>
              </li>

              <ContactLinks linkClass="pick-an-app-link" />
              <li>
                <span>Working hours: </span>09:00h - 20:00h
              </li>
            </ul>
          </div>

          <div className="map-wrapper">
            <h3>Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2389892926417!2d21.426460111461687!3d41.995146271109135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b4c2a3638b%3A0x312315de281eb76!2sNikola%20Vapcarov%2022%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1687725604814!5m2!1sen!2smk"
              title="travellog location"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
