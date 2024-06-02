import Hero from "../../components/Hero/Hero";
import Members from "../../components/Members/Members";
import Projects from "../../components/Projects/Projects";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/config.jsx";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Hero />
      <Members />
      <Projects />
    </>
  );
};

export default Dashboard;
