import React from "react";
import KotlinGfg from "./components/KotlinGfg/KotlinGfg";
import BWD from "./components/BWD/BWD";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Loader from "../../components/Loader/Loader";

const Team = () => {
  return (
    <div className="team-container p-16">
      <LazyLoadComponent placeholder={<Loader />}>
        <KotlinGfg />
        <BWD />
      </LazyLoadComponent>
    </div>
  );
};

export default Team;
