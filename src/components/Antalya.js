import React from "react";

const Antalya = ({ title }) => {
  return (
    <article className={`antalya ${title.toLowerCase()}`}>
      <h4>{title}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        asperiores accusantium voluptatem voluptas voluptates, odit quo
        provident laboriosam doloribus, sit, commodi beatae veritatis recusandae
        laborum. Sequi officiis.
      </p>
    </article>
  );
};

export default Antalya;
