import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-[#ceecff] py-12 rounded-t-xl items-center justify-center text-black gap-10">
      <div className="flex flex-col justify-center items-center">
        <img src="LogoK.svg" alt="" className="w-8" />
        <br />
        <p className="text-xl font-bold">Kaizen Tech Club</p>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
      <div className=" flex gap-10">
        <a aria-label="Github" href="https://github.com/kaizentechcult">
          <GitHubIcon className="scale-125" />
        </a>
        {/* <a href="https://github.com/kaizentechcult">
          <XIcon className="scale-125" />
        </a> */}
        <a aria-label="LinkedIn" href="https://www.linkedin.com/company/kaizen-technical-society/">
          <LinkedInIcon className="scale-125" />
        </a>
        <a aria-label="Instagram" href="https://www.instagram.com/kcc_technical_society">
          <InstagramIcon className="scale-125" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
