import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-[#141941] py-12 rounded-t-xl items-center justify-center text-[#a2c9ff] gap-10">
      <div className="flex flex-col justify-center items-center">
        <div className="h-32 w-32 flex justify-center items-center bg-[#dfecff] rounded-full">
          <img src="LogoK.svg" alt="" className="w-10" />
        </div>
        <br />
        <p className="text-xl font-bold">Kaizen Tech Club</p>
      </div>
      <div className="w-full h-[2px] bg-white"></div>
      <div className=" flex gap-10">
        <a aria-label="Github" href="https://github.com/kaizentechcult">
          <GitHubIcon className="scale-125" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/company/kaizen-technical-society/"
        >
          <LinkedInIcon className="scale-125" />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/kcc_technical_society"
        >
          <InstagramIcon className="scale-125" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
