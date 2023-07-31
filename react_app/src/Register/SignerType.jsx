import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import OrgSignin from "./OrgSignin";
import FanSignin from "./FanSignin";



const SignerType = () => {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    if (e.target.name === "Fan") {
      navigate("/fansignin", { state: { type: e.target.name } });
    } else {
      navigate("/orgsignin", { state: { type: e.target.name } });
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
>
      <div className="w-1/2 mx-auto flex flex-col my-8 py-5 bg-gradient-to-r from-blue-200 to-green-200 max-w-[500px] rounded-lg">
        <div className="text-center font-bold text-3xl my-3">Register As</div>
        <button
          className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4"
          name="Manager"
          onClick={handleSelect}
        >
          Event Manager
        </button>
        <button
          className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4"
          name="Coach"
          onClick={handleSelect}
        >
          Coach
        </button>
        <button
          className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4"
          name="Athlete"
          onClick={handleSelect}
        >
          Athelete
        </button>
        <button
          className="w-1/2 mx-auto my-5 text-xl font-serif flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-4"
          name="Fan"
          onClick={handleSelect}
        >
          Fan
        </button>
      </div>
    </motion.div>
  );
};

export default SignerType;
