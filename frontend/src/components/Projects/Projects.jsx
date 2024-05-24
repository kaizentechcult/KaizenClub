import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "/Project1.png";

const Projects = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
      <ProjectCard image={Project1} />
    </div>
  );
};

export default Projects;
