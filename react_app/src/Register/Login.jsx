import React,{useState} from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { useDispatch } from "react-redux";
import axios from 'axios';
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [user, setUser] = useState({
    type: "",
    email: "",
    password: "",
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
      type,
      email,
      password,
    } = user;

    const api = axios.create({
      baseURL: "http://localhost:5000/api/v1",
      withCredentials: true,
      headers: {
          "Content-type": "application/json",
      },
    });

    try{
      const res=await api.post("http://localhost:8000/login",{type,email,password});
      

      localStorage.setItem('token',res.data.token);
      localStorage.setItem('Email',user.email);
      setCookie("TypeR", type, { path: "/" });

      console.log(res);

      // const ans=await api.get('http://localhost:8000/setuser',{ withCredentials: true });
      // console.log(ans);

      if(res.status===200){
        dispatch({
          type:"setloggedemail",
          payload:user.email
        })
        navigate('/');
      }
    }
    catch(err){
      toast("Invalid Password");
      console.log(err);
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.2}}
    style={{color:"red",fontSize:"30px",padding:"20px"}}
>
      <div className="grid justify-center items-center px-6 py-3 mx-auto lg:py-14 max-w-[600px] bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <form
          method="POST"
          class="space-y-4 md:space-y-6 rounded-xl px-14 py-6 bg-gradient-to-r from-blue-200 to-green-200"
        >
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
              value={user.email}
              onChange={handleInputs}

            />
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
              value={user.password}
              onChange={handleInputs}

            />
          </div>
          <div>
          <label
                for="type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type
              </label>
              <div className="inline-block relative w-full py-1">
                <select
                  name="type"
                  onChange={handleInputs}
                  className="bg-gray-50 transparent border border-gray-300 text-gray-900 sm:text-sm md:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>
                    Select your category
                  </option>
                  <option>Manager</option>
                  <option>Coach</option>
                  <option>Athlete</option>
                  <option>Fan</option>
                </select>
              </div>
            </div>
          

          <button
            type="submit"
            class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={PostData}
          >
            Login
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account?{" "}
            <NavLink
              to="/signertype"
            >
              <span className="font-medium text-primary-500 underline hover:text-indigo-900 dark:text-primary-500">
                Register here
              </span>
            </NavLink>
          </p>
        </form>
      </div>
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
    </motion.div>
  );
};

export default Login;
