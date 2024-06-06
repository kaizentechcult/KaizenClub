import React, { useState } from "react";
import axios from "axios";
import FormInput from "../../components/FormInput/FormInput";
import FormBtn from "../../components/FormBtn/FormBtn";
import Navbar from "../../components/Navbar/Navbar";
import Slide from "../../components/Slider/slider";

const JoinUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [why, setWhy] = useState("");
  const [email, setEmail] = useState("");

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
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center w-[100%] h-[90vh]">
          <Slide>
            <div className="w-[20rem] md:w-[30rem] bg-gray-800 rounded-lg p-8 space-y-6">
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
                    textField={"Tech"}
                    inpType={"text"}
                    handleFunc={(e) => setWhy(e.target.value)}
                    valuein={why}
                    Label={"Technologies/Languages you know."}
                  />
                  <FormInput
                    textField={"email"}
                    inpType={"email"}
                    handleFunc={(e) => setEmail(e.target.value)}
                    valuein={email}
                    Label={"Your email address."}
                  />
                  <FormInput
                    textField={"phone"}
                    inpType={"phone"}
                    handleFunc={(e) => setPhone(e.target.value)}
                    valuein={phone}
                    Label={"Phone number"}
                  />

                  <FormBtn text={"Join Us"} />
                </div>
              </form>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
