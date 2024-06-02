import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "/Project1.png";
import Heading from "../Heading/Heading";
import Navbar from "../Navbar/Navbar";
import Slide from "../Slider/slider";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Slide>
        <div className="flex  flex-wrap  justify-evenly items-center m-12">
          <ProjectCard image={Project1} />
          <ProjectCard image={Project1} />
          <ProjectCard image={Project1} />
          <ProjectCard image={Project1} />
          <ProjectCard image={Project1} />
          <ProjectCard image={Project1} />
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
