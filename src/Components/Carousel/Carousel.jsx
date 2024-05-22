import React, { useState, useEffect } from "react";

export default function Carousel({ images, interval }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    console.log("enter");
    setIsHovered(true);
  }

  function handleMouseLeave() {
    console.log("exist");
    setIsHovered(false);
  }

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, interval);
    }
    return () => clearTimeout(timer);
  }, [isHovered, currentImageIndex, images, interval]);

  let nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  let prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{ position: "relative", height: "400px", display: "flex" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {images.map((img, index) => {
        return (
          <div style={{ display: "flex" }}>
            <div>
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "0px",
                }}
              >
                Prev
              </button>
            </div>
            <img
              src={img}
              alt={img}
              style={{
                display: index === currentImageIndex ? "block" : "none",
                width: "100%",
                height: "300px",
                position: "absolute",
              }}
            />
            <div>
              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "0px",
                }}
              >
                Next
              </button>
            </div>
          </div>
        );
      })}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: index === currentImageIndex ? "#000" : "#ccc",
              margin: "0 5px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
