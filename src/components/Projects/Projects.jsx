import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "/Project1.png";
const Projects = () => {
  return (
    <>
      <div id="projects" className=" pt-12">
        <div className="flex  flex-wrap  justify-evenly items-center m-12">
          <ProjectCard image={Project1} />
        </div>
      </div>
    </>
  );
};

export default Projects;
