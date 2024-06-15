import React from "react";

const LazyImg = () => {
  return (
    <img
      className="lg:h-[85vh] rounded-3xl scale-75 object-cover -z-20"
      src="hero.jpg"
      alt="img"
      loading="lazy"
    />
  );
};

export default LazyImg;
