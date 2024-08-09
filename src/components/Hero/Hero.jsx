import React from "react";
import "../Hero/Hero.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Hero = () => {
  return (
    <div className="hero md:h-screen flex md:flex-row flex-col lg:flex-row overflow-hidden py-10">
      <div className="left w-full flex flex-col md:gap-10 justify-center text-center md:text-left items-center md:items-start gap-10 py-10 md:py-0">
        <h1 className=" text-5xl md:text-[64px] text-[#004263] font-bold md:leading-[4rem]">
          Kaizen Technical <br /> Community
        </h1>
        <p className="md:text-xl w-5/6">
          As a part of the Institute Technical Council, we aim to provide a
          gateway for the people in our institute to join the coding community.
          We create a platform which allows students to gain assistance and
          mentorship to enhance their coding ability.
        </p>
      </div>
      <div className="right w-full flex justify-end rounded-3xl items-center md:hidden">
        <LazyLoadImage
          className="rounded-2xl"
          src="hero.jpg"
          alt="img"
          effect="blur"
          width={400}
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
      <div className="right w-full md:flex justify-end rounded-3xl items-center hidden">
        <LazyLoadImage
          className="rounded-2xl"
          src="hero.jpg"
          alt="img"
          effect="blur"
          width={600}
          wrapperProps={{
            // If you need to, you can tweak the effect transition using the wrapper style.
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
