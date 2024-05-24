// import React from "react";
import Member from "../../components/Member/Member";

const Members = () => {
  return (
    <div id="Members" className="">
      <div className="flex m-10 flex-wrap  justify-evenly items-center  gap-3">
        <Member name="Shreehita" post="Founder" img={"Shree.jpg"} />
        <Member name="Krish" post="Founder" img={"Krish.jpg"} />
        <Member name="Adista" post="Member" img={"Adista.jpg"} />
        <Member name="Piyush" post="Member" img={"Piyush.jpg"} />
        <Member name="Manisha" post="Member" img={"Manisha.jpg"} />
        <Member name="Ayush" post="Member" img={"Ayush.jpg"} />
        <Member name="Sanskriti" post="Member" img={"Sanskriti.jpg"} />
        <Member name="Aditya" post="Member" img={"Aditya.png"} />
        <Member name="Kanak" post="Member" img={"Kanak.jpg"} />
        <Member name="Anurag" post="Member" img={"Anurag.jpg"} />
        <Member name="Shivansh" post="Member" img={"Shivansh.jpg"} />
        <Member name="Avinash" post="Member" img={"Avinash.jpg"} />
        <Member name="Sooraj" post="Member" img={"Sooraj.jpg"} />
      </div>
    </div>
  );
};

export default Members;
