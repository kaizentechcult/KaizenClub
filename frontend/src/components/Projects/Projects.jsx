import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "/Project1.png";
import Heading from "../Heading/Heading";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <Heading text={"Projects"} />
      </div>
      <div className="flex  flex-wrap  justify-evenly items-center">
        <ProjectCard image={Project1} />
        <ProjectCard image={Project1} />
        <ProjectCard image={Project1} />
        <ProjectCard image={Project1} />
        <ProjectCard image={Project1} />
        <ProjectCard image={Project1} />
      </div>
    </div>
  );
};

export default Projects;
