import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <div className="md:px-64 px-4 flex md:flex-row flex-col justify-between items-center py-10 md:py-0 gap-8 md:gap-0">
        <div className="left text-center md:text-start">
          <h1 className="text-5xl sm:text-5xl">Meet the</h1>
          <h1 className="text-5xl sm:text-5xl  text-primary-default tracking-wide text-[#4763b7] ">
            Kaizen Club Team
          </h1>
          <p className="mt-4 md:mt-0 text-xl text-gray-500 md:text-xl md:pr-24 lg:pr-20 font-light leading-tight tracking-tight text-justify">
            Individual commitment to a group effort that is what makes a  team
            work, a <br /> company work, a society work, a civilisation work.
          </p>
        </div>
        <div className="right">
          <img src="hero/aboutus.svg" className="h-[300px] object-cover" alt="" />
        </div>
      </div>
      <div className="text-center flex flex-col gap-6">
        <h1 className="text-3xl font-bold md:text-4xl mt-[6rem] text-[#004263]">
          Meet the Dream Team
        </h1>
        <p className="text-base text-gray-700  md:text-lg font-light ">
          "Talent wins games, but teamwork and intelligence win championships."
        </p>
        <p className="font-bold tracking-wider">- Michael Jordan</p>
      </div>
      <div className="flex flex-wrap justify-center items-center md:px-64 px-4 py-20">
        {membersData.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default Members;
