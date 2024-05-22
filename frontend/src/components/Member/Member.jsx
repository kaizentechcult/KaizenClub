import React from "react";

const Member = ({ name, post, img }) => {
  return (
    <div className="mb-10 card bg-slate-800 rounded-[1rem] w-[40vh] h-[43vh] p-4 flex-col items-center justify-center hover:bg-slate-700 transition-all duration-300">
      <img src={img} alt="img" className="rounded-full h-[12rem] m-auto" />
      <div className="text-center pt-10 text-white">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-300">{post}</p>
      </div>
    </div>
  );
};

export default Member;
