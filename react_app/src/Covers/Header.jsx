import React,{useState,useEffect} from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";


import logo from "../img/logo2.png";
import signup from "../img/signUp.png";
import login from "../img/log-in.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [type,settype]=useState('');
  useEffect( ()=>{
    function fetchdata(){
      const temptype=cookies['TypeR'];
      settype(temptype);
      console.log(temptype);
    }

    fetchdata();
  },[])

  const dologout=async()=>{
    // removeCookie('TypeR')
    try{

      const res=await axios.get("http://localhost:8000/doLogout");
      console.log(res);
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <header className="text-gray-600 body-font bg-gradient-to-r mb-3 from-blue-300 to-green-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-end">
          <NavLink
            to="/"
            className="order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={logo} className="h-16 w-36"></img>
          </NavLink>
          <nav className="flex lg:w-3/5 flex-wrap items-center justify-end text-xl md:ml-auto ">
            <a
              href="https://olympics.com/en/"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Olympics
            </a>
            <NavLink to='/sports' className="mr-5 hover:text-gray-900 cursor-pointer ">
              Sports
            </NavLink>
            <NavLink to='/stats' className="mr-5 hover:text-gray-900 cursor-pointer ">Stats</NavLink>

            <NavLink to="/countries" className="mr-5 hover:text-gray-900">
              Countries
            </NavLink>
            {
              type===undefined?(
                <>
                </>
              ):(
                type==='Fan'?
                (
                  <>
                    <NavLink to='/quiz' className="mr-5 hover:text-gray-900 cursor-pointer ">Quiz</NavLink>
                    <NavLink to='/favourites' className="mr-5 hover:text-gray-900 cursor-pointer ">Favourites</NavLink>
                  </>
                ):
                (
                  <>
                    <NavLink to='/quiz' className="mr-5 hover:text-gray-900 cursor-pointer ">Quiz</NavLink>
                    <NavLink to="/post" className="mr-5 hover:text-gray-900 cursor-pointer ">Post</NavLink>
                  </>
                )
              )
            }
            <NavLink
              to="/signertype"
              className="flex items-center mr-5 hover:text-gray-900"
            >
              <img
                src={signup}
                alt=""
                className="h-5 w-5 mr-1 hover:scale-110"
              />
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="flex items-center mr-5 hover:text-gray-900"
            >
              <img
                src={login}
                alt=""
                className="h-5 w-5 mr-1 hover:scale-110"
              />
              Login
            </NavLink>
            <button
              onClick={dologout}
              className="flex items-center mr-5 hover:text-gray-900"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
