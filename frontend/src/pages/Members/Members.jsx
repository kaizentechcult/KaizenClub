import React from "react";
import Member from "../../components/Member/Member";
import Krish from "../../../Public/Krish.jpg";
import Shree from "../../../Public/Shree.jpg";
import Adista from "../../../Public/Adista.jpg";
import Aditya from "../../../Public/Aditya.png";
import Anurag from "../../../Public/Anurag.jpg";
import Piyush from "../../../Public/Piyush.jpg";
import Shivansh from "../../../Public/Shivansh.jpg";

const Members = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex m-10 flex-wrap  justify-evenly items-center">
        <Member name="Shreehita" post="Founder" img={Shree} />
        <Member name="Krish" post="Founder" img={Krish} />
        <Member name="Adista" post="Member" img={Adista} />
        <Member name="Aditya" post="Member" img={Aditya} />
        <Member name="Anurag" post="Member" img={Anurag} />
        <Member name="Piyush" post="Member" img={Piyush} />
        <Member name="Shivansh" post="Member" img={Shivansh} />
        <Member
          name="Ayush"
          post="Member"
          // img={Ayush}
        />
        <Member
          name="Manisha"
          post="Member"
          // img={Manisha}
        />
        <Member
          name="Kanak"
          post="Member"
          // img={Kanak}
        />
        <Member
          name="Avinash"
          post="Member"
          // img={Avinash}
        />
        <Member
          name="Sanskriti"
          post="Member"
          // img={Sanskriti}
        />
        <Member
          name="Sooraj"
          post="Member"
          // img={Sooraj}
        />
      </div>
    </div>
  );
};

export default Members;
