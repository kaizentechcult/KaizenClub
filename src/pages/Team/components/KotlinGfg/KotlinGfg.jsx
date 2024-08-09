import React from "react";
import img1 from "../../../../../public/Team/KotlinGFG/img1.webp";
import img2 from "../../../../../public/Team/KotlinGFG/img2.webp";
import img3 from "../../../../../public/Team/KotlinGFG/img3.webp";
import img4 from "../../../../../public/Team/KotlinGFG/img4.webp";
import img5 from "../../../../../public/Team/KotlinGFG/img5.webp";
import img6 from "../../../../../public/Team/KotlinGFG/img6.webp";
import img7 from "../../../../../public/Team/KotlinGFG/img7.webp";
import img8 from "../../../../../public/Team/KotlinGFG/img8.webp";
import img9 from "../../../../../public/Team/KotlinGFG/img9.webp";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Heading from "../../../../components/Heading/Heading";

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

const KotlinGfg = () => {
  return (
    <>
      {" "}
      <Heading text="At Kotlin GFG conference" />
      <div className="team-members flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <LazyLoadImage
            key={index}
            src={member.img}
            alt={member.alt}
            effect="blur"
            wrapperProps={{
              // If you need to, you can tweak the effect transition using the wrapper style.
              style: { transitionDelay: "1s" },
            }}
            // height={250}
            width={400}
            height={300}
            className="rounded-lg object-contain"
          />
          // <img key={index} src={member.img} alt={member.alt} className="h-[14rem] rounded-lg object-contain" />
        ))}
      </div>
    </>
  );
};

export default KotlinGfg;
