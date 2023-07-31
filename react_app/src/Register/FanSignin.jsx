import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import axios from 'axios';
import {motion} from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FanSignin = () => {
  const navigate=useNavigate();

  const [user, setUser] = useState({
    name: "",
    gender: "",
    country: "",
    email: "",
    password: "",
    cpassword:""
  });

  // user.type=location.state.type;

  let name, value;
  const handleInputs = (e) => {
    console.log(e.target.name);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };


  const PostData = async (e) => {
    e.preventDefault();
    const {
      name,
      gender,
      country,
      email,
      password,
    } = user;

    try{
      const res=await axios.post("http://localhost:8000/fanRegister",{name,gender,country,email,password});

      console.log(res);
      navigate('/login');
    }
    catch(err){
      toast("Signin Failed")
      setUser({name: "",gender: "",country: "",email: "",password: "", cpassword:""})
      console.log(err);
    }
  };


  return (
    <>

    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
>
      <div className="grid justify-center items-center px-6 py-3 mx-auto lg:py-10 max-w-[600px] bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <form
          method="POST"
          class="space-y-4 md:space-y-6 rounded-xl px-14 py-6 bg-gradient-to-r from-blue-200 to-green-200"
        >
          <div>
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="email"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Name"
              required=""
              onChange={handleInputs}
              value={user.name}
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
              onChange={handleInputs}
              value={user.email}
            />
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

          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={handleInputs}
              value={user.password}
            />
          </div>
          <div>
            <label
              for="cpassword"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="cpassword"
              name="cpassword"
              id="cpassword"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
              onChange={handleInputs}
              value={user.cpassword}
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="terms"
                class="font-light text-gray-500 dark:text-gray-300"
              >
                I accept the{" "}
                <a
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <button
            type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={PostData}
          >
            Create an account
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <NavLink
              to="/login"
            >
              <span className="font-medium text-primary-500 underline hover:text-indigo-900 dark:text-primary-500">
                Login
              </span>
            </NavLink>
          </p>
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

export default FanSignin;

{
  /* <body className="max-h-screen"> */
}
