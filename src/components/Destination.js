import React from "react";

const Destination = ({ place, title, imageUrl }) => {
  return (
    <div className={`${place}-bg`}>
      <section className={`destination ${place}-layout container`}>
        <div className={place}>
          <h3>{title}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            asperiores accusantium voluptatem voluptas voluptates, odit quo
            provident laboriosam doloribus, sit, commodi beatae veritatis
            recusandae laborum. Sequi officiis quia perferendis eaque, odit
            soluta excepturi! Nulla ea mollitia, dolorem facilis odit voluptates
            aspernatur. Similique facilis repellat fugiat? Ut rerum placeat
            saepe sit.
          </p>
        </div>
        <div className="destination-img">
          <img src={imageUrl} alt={title} />
        </div>
      </section>
    </div>
  );
};

export default Destination;
