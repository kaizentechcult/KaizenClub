import React from "react";
import Heading from "../../components/Heading/Heading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "../../../Public/Project1.png"


const Projects = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      {/* <iframe
        className="h-[20rem] w-[38rem] rounded-xl m-auto"
        src="https://adistanautiyal.github.io/untalked/index.html"
        frameborder="0"
      ></iframe> */}
    </div>
  );
};

export default Projects;
