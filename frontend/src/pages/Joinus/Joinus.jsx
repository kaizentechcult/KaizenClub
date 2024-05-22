import React from "react";
import Heading from "../../components/Heading/Heading";

const Join_us = () => {
  return (
    <div className="flex justify-center items-center pb-32">
      <div className="form-card w-[30%] rounded-xl bg-gray-700 flex flex-col justify-center items-center p-20 ">
        <p>Request to join</p>
        <br />
        <form action="" className="flex flex-col gap-10">
          <input type="text" placeholder="mail" />
          <input type="tele" placeholder="Phone" />

        </form>
      </div>
    </div>
  );
};

export default Join_us;
