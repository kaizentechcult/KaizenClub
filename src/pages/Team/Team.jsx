import React from "react";
import img1 from "/Team/KotlinGFG/img1.jpg";
import img2 from "/Team/KotlinGFG/img2.jpg";
import img3 from "/Team/KotlinGFG/img3.jpg";
import img4 from "/Team/KotlinGFG/img4.jpg";
import img5 from "/Team/KotlinGFG/img5.jpg";
import img6 from "/Team/KotlinGFG/img6.jpg";
import img7 from "/Team/KotlinGFG/img7.jpg";
import img8 from "/Team/KotlinGFG/img8.jpg";
import img9 from "/Team/KotlinGFG/img9.jpg";

import Heading from "../../components/Heading/Heading";

const Team = () => {
  const teamMembers = [
    { img: img1, alt: "Member 1" },
    { img: img2, alt: "Member 2" },
    { img: img3, alt: "Member 3" },
    { img: img4, alt: "Member 4" },
    { img: img5, alt: "Member 5" },
    { img: img6, alt: "Member 6" },
    { img: img7, alt: "Member 7" },
    { img: img8, alt: "Member 8" },
    { img: img9, alt: "Member 9" },
  ];
  return (
    <div className="team-container p-16">
      {/* <h1>Team Participations</h1> */}
        <Heading text="At Kotlin GFG conference" />
      <div className="team-members flex flex-wrap justify-center items-center gap-8">
        {teamMembers.map((member, index) => (
          <img key={index} src={member.img} alt={member.alt} className="h-[14rem] rounded-lg object-contain" />
        ))}
      </div>
    </div>
  );
};

export default Team;
