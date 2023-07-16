import React from "react";

import logo from "./img/logo2.png";
import signup from "./img/signUp.png";
import login from "./img/log-in.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font bg-gradient-to-r mb-3 from-blue-300 to-green-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-end">
          <a
            href="/"
            className="order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={logo} className="h-16 w-36"></img>
          </a>
          <nav className="flex lg:w-4/5 flex-wrap items-center justify-end text-xl md:ml-auto ">
            <a
              href="https://olympics.com/en/"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Olympics
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Athletes</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Sports</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer ">Stats</a>
            <a
              href=" http://localhost:8501"
              className="mr-5 hover:text-gray-900 cursor-pointer "
            >
              Graph
            </a>

            <NavLink to="/history" className="mr-5 hover:text-gray-900">
              History
            </NavLink>
            <NavLink className="mr-5 hover:text-gray-900 cursor-pointer ">
              Favourites
            </NavLink>
            <NavLink
              to="/post"
              className="mr-5 hover:text-gray-900 cursor-pointer "
            >
              Post
            </NavLink>
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
