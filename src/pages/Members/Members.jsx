import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <h1 className=" font-bold text-5xl text-center mt-[6rem] mb-[6rem]">
        Our Team
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {membersData.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default Members;
