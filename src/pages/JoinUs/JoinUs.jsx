import React, { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Slider/slider";

const JoinUs = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [why, setWhy] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("https://kaizen-b1af6-default-rtdb.firebaseio.com/joinus.json", {
      //   name,
      //   address,
      //   why,
      //   year
      // })
      setName("");
      setAddress("");
      setWhy("");
      setYear("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <div className="flex justify-center items-center w-[60%] h-[40rem]">
        <Slide>
          <div className="w-1/2 bg-gray-800 rounded-lg p-8 space-y-6">
            <h2 className="text-center text-3xl text-white">Join Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-outer flex flex-col gap-7">
                <FormInput
                  textField={"name"}
                  inpType={"text"}
                  handleFunc={(e) => setName(e.target.value)}
                  valuein={name}
                  Label={"Name"}
                />
                <FormInput
                  textField={"address"}
                  inpType={"text"}
                  handleFunc={(e) => setAddress(e.target.value)}
                  valuein={address}
                  Label={"Address"}
                />
                <FormInput
                  textField={"why"}
                  inpType={"text"}
                  handleFunc={(e) => setWhy(e.target.value)}
                  valuein={why}
                  Label={"Why do you wanna join us."}
                />
                <FormInput
                  textField={"year"}
                  inpType={"text"}
                  handleFunc={(e) => setYear(e.target.value)}
                  valuein={year}
                  Label={"Semester"}
                />
                <FormBtn text={"Join Us"} />
              </div>
            </form>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default JoinUs;
