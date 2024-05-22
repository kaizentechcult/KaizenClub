import React from "react";
import Member from "../../components/Member/Member";
import Krish from "../../../Public/Krish.jpg";
import Sanskriti from "../../../Public/Sanskriti.jpg";
import Shree from "../../../Public/Shree.jpg";
import Adista from "../../../Public/Adista.jpg";
import Aditya from "../../../Public/Aditya.png";
import Anurag from "../../../Public/Anurag.jpg";
import Piyush from "../../../Public/Piyush.jpg";
import Shivansh from "../../../Public/Shivansh.jpg";
import Ayush from "../../../Public/Ayush.jpg";
import Manisha from "../../../Public/Manisha.jpg";
import Sooraj from "../../../Public/Sooraj.jpg";
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
        <Member
          name="Kanak"
          post="Member"
          // img={Kanak}
          img={"https://i.pinimg.com/736x/2c/f5/58/2cf558ab8c1f12b43f7326945672805e.jpg"}
        />
        <Member name="Anurag" post="Member" img={Anurag} />
        <Member name="Shivansh" post="Member" img={Shivansh} />
        <Member
          name="Avinash"
          post="Member"
          // img={Avinash}
          img={"https://i.pinimg.com/736x/2c/f5/58/2cf558ab8c1f12b43f7326945672805e.jpg"}
        />
        <Member name="Sooraj" post="Member" img={Sooraj} />
      </div>
    </div>
  );
};

export default Members;
