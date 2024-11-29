import React, { useState } from "react";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const arr = [1, 2, 3, 4, 5];

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star_container">
      {arr.map((item, index) => {
        index += 1;
        return (
          <div
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            key={index}
          >
            &#9733;
          </div>
        );
      })}
    </div>
  );
};

export default Star;
