import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Footer = () => {
  return (
    <>
      <div className="md:px-64 px-4 flex md:flex-row flex-col justify-center items-center md:justify-between py-4 bg-[#1F2937] text-white gap-4 md:gap-0">
        <div>2024 Kaizen Club </div>
        <div>Coded with ❤ and ☕ by Kaizen Team</div>
        <div className=" flex gap-10">
          <a target="_blank" aria-label="Github" href="https://github.com/kaizentechcult">
            <GitHubIcon className="" />
          </a>
          <a target="_blank"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/company/kaizen-technical-society/"
          >
            <LinkedInIcon className="" />
          </a>
          <a target="_blank"
            aria-label="Instagram"
            href="https://www.instagram.com/kcc_technical_society"
          >
            <InstagramIcon className="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
