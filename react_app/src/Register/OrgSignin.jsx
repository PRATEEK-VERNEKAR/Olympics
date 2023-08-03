import React, { useState } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { notify } from "../../../server/Routers/router";

const OrgSignin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state.type);
  console.log(location.pathname);
  console.log(location.hash);
  console.log(location.search);


  const [user, setUser] = useState({
    type: "",
    fname: "",
    lname: "",
    dob: "",
    gender: "",
    country: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [valuea, setValue] = React.useState(dayjs('2022-04-17'));


  user.type=location.state.type;

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.name);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
    console.log(user.dob);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {
      type,
      fname,
      lname,
      dob,
      gender,
      country,
      email,
      password,
      cpassword,
    } = user;


    try{
      const res=await axios.post("http://localhost:8000/orgRegister",{type,fname,lname,dob,gender,country,email,password,cpassword});


      if(res.status===201){
        // toast("User Created Successfully");
        toast("Stored")
        navigate('/login')
      }
      else{
        throw new Error("Signin failed");
      }
      // console.log(res);
    }
    catch(err){
      toast("Signin Failed")
      console.log("BIG ERROR");
      console.log(err);
      setUser({
        type: "",
        fname: "",
        lname: "",
        dob: "",
        gender: "",
        country: "",
        email: "",
        password: "",
        cpassword: "",
      })
    }
  };

  // Validate the date
  const dateRegex = /^(0[1-9]|1\d|2\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/;



  return (
    <>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
    >
      <div className="grid justify-center items-center px-6 py-3 mx-auto lg:py-14 max-w-[1000px] bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        {/* className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
        {/*  bg-gradient-to-r from-red-200 to-indigo-200 bg-gradient-to-r from-blue-100 to-yellow-100 */}
        <form
          method="POST"
          class="bg-gradient-to-r from-blue-200 to-green-200 rounded-xl px-6 py-2 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className=" p-4 pb-2 md:p-8 space-y-2 md:space-y-5 w-full h-full mr-2 rounded-lg  dark:border md:mt-0 sm:max-w-md lg:max-w-xl dark:bg-gray-800 dark:border-gray-700">
            <div>
              <label
                for="fname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="fname"
                id="name"
                onChange={handleInputs}
                value={user.fname}
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
                placeholder="First Name"
                required=""
              />
            </div>
            <div>
              <label
                for="lname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                id="name"
                onChange={handleInputs}
                value={user.lname}
                className="bg-transparent border-2 border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Last Name"
                required=""
              />
            </div>
            <div>
              <label
                for="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date Of Birth
              </label>
              {/* <input
                type="text"
                name="dob"
                id="name"
                onChange={handleInputs}
                value={user.dob}
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="dd-mm-yyyy"
                required=""
              /> */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  disableFuture={true}
                  value={value}
                  onChange={(newValue) => {console.log(newValue.$d)
                  setValue(newValue.$d)
                  setUser({...user,'dob':newValue.$d})}}
                />
              </DemoContainer>
            </LocalizationProvider>
            </div>


            <div>
              <label
                for="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <div className="inline-block relative w-full py-1">
                <select
                  name="gender"
                  onChange={handleInputs}
                  className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>
                    Select your gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Representing Country
              </label>
              <div className="inline-block relative w-full py-1">
                <select
                  name="country"
                  onChange={handleInputs}
                  className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>
                    Select a country
                  </option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>
            </div>
          </div>

          <div className=" p-4 pt-2 md:p-8 space-y-4 md:space-y-5 w-full h-1/2 mr-2 rounded-lg dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputs}
                value={user.email}
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputs}
                value={user.password}
                placeholder="••••••••"
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="cpassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                onChange={handleInputs}
                value={user.cpassword}
                placeholder="••••••••"
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start ">
              <div className="flex items-center h-5 my-1">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-transparent focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm my-1">
                <label
                  for="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the&nbsp;
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              onClick={PostData}
              className="w-full text-white bg-blue-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-4 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-md font-light text-gray-500 dark:text-gray-400 ">
              Already have an account?&nbsp;
              <NavLink to="/login">
                <span className="font-medium text-primary-500 underline hover:text-indigo-900 dark:text-primary-500">
                  Login
                </span>
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      /> 
      </>
  );
};

export default OrgSignin;
