import React from "react";

const ContactLinks = ({ linkClass }) => {
  return (
    <>
      <li>
        <span>Phone: </span>{" "}
        <a className={linkClass} href="tel:+38921231234">
          +389 2 123 1234
        </a>
      </li>

      <li>
        <span>Email: </span>{" "}
        <a className={linkClass} href="mailto:travellog@travel.com.mk">
          travellog@travel.com.mk
        </a>
      </li>
      <li>
        <span>Viber: </span>{" "}
        <a className={linkClass} href="tel:+38977101202">
          {" "}
          +389 77 101 202
        </a>
      </li>
    </>
  );
};

export default ContactLinks;
