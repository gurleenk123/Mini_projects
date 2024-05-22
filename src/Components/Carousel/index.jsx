import React from "react";
import Carousel from "./Carousel";
import image1 from "./logo.svg";
import image2 from "./reviewAvatar.svg";
import image3 from "./avatar.svg";

export default function index() {
  const images = [image1, image2, image3];

  return (
    <div>
      <h1>Custom Carousel</h1>
      <Carousel images={images} interval={3000} />
    </div>
  );
}
