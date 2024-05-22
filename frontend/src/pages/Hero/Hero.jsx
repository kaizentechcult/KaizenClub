import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero h-[90vh] snap-item snap-center">
      <div className="blur1 bg-[#7e44d8] h-64 w-64 blur-[50px] absolute -right-32 top-[10rem] rounded-full -z-10"></div>
      <div className="blur2 bg-[#066093] h-64 w-64 blur-[50px] absolute left-[-10rem] top-[30rem] rounded-full -z-10 "></div>
      <div className="outer flex items-center">
        <div className="main flex-1">
          <h1 className="text-7xl text-center text-white">
            Kaizen Technical <br /> Society
          </h1>
          <p className="m-10">
            As a part of the Institute Technical Council, we aim to provide a
            gateway for the people in our institute to join the coding
            community. We create a platform which allows students to gain
            assistance and mentorship to enhance their coding ability.
          </p>
        </div>
        <div className="right-main flex-1">
          <img
            className="h-[85vh] rounded-lg  scale-75"
            src="https://th.bing.com/th/id/OIG1.amdmtB.mSlhKH4FEItB7?pid=ImgGn"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
