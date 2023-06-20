import { calcLength } from "framer-motion";
import React from "react";
import ImageCard from "./ImageCard";

const images = [
  "https://i.ibb.co/dmR2k9P/signature-zyzz-gif.gif",
  "https://i.ibb.co/dmR2k9P/signature-zyzz-gif.gif",
  "https://i.imgur.com/XSHXBlL.png",
  "https://i.imgur.io/wwpnTNG_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
  "https://i.imgur.com/P93Mul6.jpg",
];

//grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2
const Card = () => {
  return (
    <>
      <div className="grid  lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 z-10">
        {images.map((image, i) => (
          <div key={i}>
            <ImageCard image={image} i={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
