import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Members from "../../components/Members/Members";
import Heading from "../../components/Heading/Heading";
import Projects from "../../components/Projects/Projects";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/config";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <>
      <Navbar />
      <Hero />
      <Heading text={"Our Team"} />
      <Members />
      <Heading text={"Projects"} />
      <Projects />
    </>
  );
};

export default Dashboard;
