import React from "react";
import Hero from "../../components/Hero/Hero";
import Members from "../Members/Members";
import { Link } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <Members /> */}
      {/* <div className="flex justify-center items-center">
        <Link className="" to={"/KaizenClub/Team"}>
          <Heading
            text="Our Team Participations"
            extra={"text-[#A2C9FF] p-4 hover:text-white mb-0 p-4"}
          />
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
