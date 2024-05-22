import React, { useState } from "react";

export default function Index() {
  return (
    <>
      <StarRating totalStars={5} />
    </>
  );
}

function StarRating({ totalStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <>
      <div style={{ display: "flex", columnGap: "10px" }}>
        {[...Array(totalStars)].map((_, index) => {
          index += 1;
          return (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span
                style={
                  index <= (hover || rating)
                    ? { color: "red", fontSize: "30px" }
                    : { color: "black", fontSize: "30px" }
                }
              >
                &#9733;
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
