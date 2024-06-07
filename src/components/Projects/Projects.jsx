import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Project1 from "/Project1.png";
import Navbar from "../Navbar/Navbar";
import Slide from "../Slider/slider";
import Loader from "../Loader/Loader";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { Navigate } from "react-router-dom";

const Projects = () => {
  const [user, loading] = useAuthState(auth);
  // console.log(user);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/KaizenClub/" replace />;
  }
  return (
    <>
      <Navbar />
      <div className=" pt-12">
        <Slide>
          <div className="flex  flex-wrap  justify-evenly items-center m-12">
            <ProjectCard image={Project1} />
            {/* <ProjectCard image={Project1} />
            <ProjectCard image={Project1} />
            <ProjectCard image={Project1} />
            <ProjectCard image={Project1} />
            <ProjectCard image={Project1} /> */}
          </div>
        </Slide>
      </div>
    </>
  );
};

export default Projects;
