import Member from "../../components/Member/Member";
import { membersData } from "../../utils/data";

const Members = () => {
  return (
    <>
      <div className="pt-12 " id="members">
        <div className="flex m-10 flex-wrap justify-evenly items-center gap-3">
          {membersData.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
