import React from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({ stars, className }) => {
  const starNumbers = (number) => {
    let arrOfNumbers = [];
    for (let i = 1; i <= number; i++) {
      arrOfNumbers.push(i);
    }
    return arrOfNumbers;
  };
  return (
    <span>
      {starNumbers(stars).map((num) => (
        <AiFillStar key={num} className={className} />
      ))}
    </span>
  );
};

export default Star;
