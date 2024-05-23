import React from "react";
import Member from "../../components/Member/Member";
import Krish from "/Krish.jpg";
import Sanskriti from "/Sanskriti.jpg";
import Shree from "/Shree.jpg";
import Adista from "/Adista.jpg";
import Aditya from "/Aditya.png";
import Anurag from "/Anurag.jpg";
import Piyush from "/Piyush.jpg";
import Shivansh from "/Shivansh.jpg";
import Ayush from "/Ayush.jpg";
import Manisha from "/Manisha.jpg";
import Sooraj from "/Sooraj.jpg";
import Avinash from "/Avinash.jpg";
import Kanak from "/Kanak.jpg";
import Heading from "../../components/Heading/Heading";

const Members = () => {
  return (
    <div className="">
      <Heading text={"Our Team"} />
      <div className="flex m-10 flex-wrap  justify-evenly items-center  gap-3">
        <Member name="Shreehita" post="Founder" img={Shree} />
        <Member name="Krish" post="Founder" img={Krish} />
        <Member name="Adista" post="Member" img={Adista} />
        <Member name="Piyush" post="Member" img={Piyush} />
        <Member name="Manisha" post="Member" img={Manisha} />
        <Member name="Ayush" post="Member" img={Ayush} />
        <Member name="Sanskriti" post="Member" img={Sanskriti} />
        <Member name="Aditya" post="Member" img={Aditya} />
        <Member name="Kanak" post="Member" img={Kanak} />
        <Member name="Anurag" post="Member" img={Anurag} />
        <Member name="Shivansh" post="Member" img={Shivansh} />
        <Member name="Avinash" post="Member" img={Avinash} />
        <Member name="Sooraj" post="Member" img={Sooraj} />
      </div>
    </div>
  );
};

export default Members;
