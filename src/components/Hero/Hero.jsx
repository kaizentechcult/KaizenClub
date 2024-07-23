// import React from "react";
// import "../Hero/Hero.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const Hero = () => {
//   return (
//     <div className="hero h-screen flex flex-col lg:flex-row mt-[-5rem]">
//       <div className="left w-full h-screen flex flex-col md:gap-20 justify-center">
//         <h1 className="text-4xl md:text-7xl text-[#a2c9ff] font-bold text-center lg:p-0 p-12">
//           Kaizen Technical Society
//         </h1>
//         <p className="md:px-20 md:text-xl text-center px-10">
//           As a part of the Institute Technical Council, we aim to provide a
//           gateway for the people in our institute to join the coding community.
//           We create a platform which allows students to gain assistance and
//           mentorship to enhance their coding ability.
//         </p>
//       </div>
//       <div className="right w-full flex justify-center rounded-3xl items-center md:hidden">
//         <LazyLoadImage
//           className="rounded-2xl"
//           src="hero.jpg"
//           alt="img"
//           effect="blur"
//           width={300}
//           wrapperProps={{
//             // If you need to, you can tweak the effect transition using the wrapper style.
//             style: { transitionDelay: "1s" },
//           }}
//         />
//       </div>
//       <div className="right w-full md:flex justify-center rounded-3xl items-center hidden">
//         <LazyLoadImage
//           className="rounded-2xl"
//           src="hero.jpg"
//           alt="img"
//           effect="blur"
//           width={500}
//           wrapperProps={{
//             // If you need to, you can tweak the effect transition using the wrapper style.
//             style: { transitionDelay: "1s" },
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="h-screen flex w-5/6 justify-center items-center">
          <div className="left flex flex-col gap-10">
            <h1 className="text-white text-[88px] font-semibold leading-[6rem]">
              KAIZEN Tech Community
            </h1>
            <p className="text-white text-[24px] w-[568px]">
              This community provides students with assistance and mentorship to
              enhance their coding skills. It also offers opportunities to
              connect with others who are improving their coding abilities and
              expanding their networks.
            </p>
            <button className="bg-white rounded-2xl text-black text-[24px] w-[173px] h-[66px]">
              <a
                aria-label="Google-From"
                href="https://forms.gle/dAGYv4SLC5wkFvxq9"
              >
                Join Us
              </a>
            </button>
          </div>
          <div className="right">
            <img
              src="Hero/heroCoding.svg"
              alt=""
              className="flex justify-center items-center"
            />
            <img
              src="Hero/blur.svg"
              alt=""
              className="absolute right-[-10rem] top-[-5rem] -z-10 scale-3"
            />
          </div>
        </div>
      </div>
      {/* <div className="projects flex justify-center items-center gap-10">
        <div className=" w-[47vh] h-[16rem] rounded-2xl bg-white">
          <img
            src="Project1.png"
            className="blur-[8px] hover:blur-0 transition-all-1s object-cover rounded-2xl h-full"
            alt=""
          />
        </div>
        <div className="w-[47vh] h-[16rem] rounded-2xl bg-white">
          <img
            src="Project2.png"
            className="blur-[8px] object-cover rounded-2xl  h-full"
            alt=""
          />
        </div>
        <div className="w-[47vh] h-[16rem] rounded-2xl bg-white">
          <img
            src="Project2.png"
            className="blur-[8px]  object-cover rounded-2xl  h-full"
            alt=""
          />
        </div>
      </div> */}
    </>
  );
};

Hero.propTypes = {};

export default Hero;
