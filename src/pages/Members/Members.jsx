import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <div className="bg-white text-black  p-12" id="members">
        <h1 className="font-bold text-5xl text-center mt-[6rem] mb-[6rem]">
          Our Team
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {membersData.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
