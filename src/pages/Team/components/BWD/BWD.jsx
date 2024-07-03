import React from "react";

import img1 from "/Team/BWD/img1.webp";
import img2 from "/Team/BWD/img2.webp";
import img3 from "/Team/BWD/img3.webp";
import img4 from "/Team/BWD/img4.webp";
import img5 from "/Team/BWD/img5.webp";
import img6 from "/Team/BWD/img6.webp";
import img7 from "/Team/BWD/img7.webp";
import img8 from "/Team/BWD/img8.webp";
import img9 from "/Team/BWD/img9.webp";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import Heading from "../../../../components/Heading/Heading";

const BWD = () => {
  const teamMembers = [
    { img: img1, alt: "Member 1" },
    { img: img2, alt: "Member 2" },
    { img: img3, alt: "Member 3" },
    { img: img5, alt: "Member 5" },
    { img: img4, alt: "Member 4" },
    { img: img8, alt: "Member 8" },
    { img: img6, alt: "Member 6" },
    { img: img7, alt: "Member 7" },
    { img: img9, alt: "Member 9" },
  ];

  return (
    <>
      <div className="pt-20">
        <Heading text="Build With Delhi Hackathon" />
        <div className="team-members flex flex-wrap justify-center items-center gap-8">
          {teamMembers.map((member, index) => (
            <LazyLoadImage
              key={index}
              src={member.img}
              alt={member.alt}
              effect="blur"
              height={300}
              width={400}
              wrapperProps={{
                // If you need to, you can tweak the effect transition using the wrapper style.
                style: {transitionDelay: "1s"},
            }}
              className="rounded-lg object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BWD;
