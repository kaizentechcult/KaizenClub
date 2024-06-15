import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <div className=" px-12" id="members">
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
