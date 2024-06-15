import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <div className=" p-12" id="members">
        <h1 className="text-white font-bold text-5xl text-center mb-[6rem]">Our Team</h1>
        <div className="flex flex-wrap justify-evenly items-center gap-12">
          {membersData.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
