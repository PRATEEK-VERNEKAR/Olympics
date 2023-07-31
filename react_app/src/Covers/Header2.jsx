import React from "react";

import logo from "../img/logo2.png";
import signup from "../img/signUp.png";
import login from "../img/log-in.png";
import { NavLink } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


const drawerWidth = 240;


const Header = (handleDrawerToggle) => {
  return (
    <>
      <header className="text-gray-600 body-font bg-gradient-to-r mb-3 from-blue-300 to-green-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-end">
        <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}

          <a
            href="/"
            className="order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={logo} className="h-16 w-36"></img>
          </a>
          <nav className="flex lg:w-3/5 flex-wrap items-center justify-end text-xl md:ml-auto ">
            <a
              href="https://olympics.com/en/"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Olympics
            </a>
            <NavLink to='/quiz' className="mr-5 hover:text-gray-900 cursor-pointer ">Quiz</NavLink>
            <NavLink to='/sports' className="mr-5 hover:text-gray-900 cursor-pointer ">
              Sports
            </NavLink>
            <NavLink to='/stats' className="mr-5 hover:text-gray-900 cursor-pointer ">Stats</NavLink>

            <NavLink to="/countries" className="mr-5 hover:text-gray-900">
              Countries
            </NavLink>
            <NavLink to='/favourites' className="mr-5 hover:text-gray-900 cursor-pointer ">
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
        </Toolbar>
      </AppBar>
          {/* <a
            href="/"
            className="order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <img src={logo} className="h-16 w-36"></img>
          </a>
          <nav className="flex lg:w-3/5 flex-wrap items-center justify-end text-xl md:ml-auto ">
            <a
              href="https://olympics.com/en/"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Olympics
            </a>
            <NavLink to='/quiz' className="mr-5 hover:text-gray-900 cursor-pointer ">Quiz</NavLink>
            <NavLink to='/sports' className="mr-5 hover:text-gray-900 cursor-pointer ">
              Sports
            </NavLink>
            <NavLink to='/stats' className="mr-5 hover:text-gray-900 cursor-pointer ">Stats</NavLink>

            <NavLink to="/countries" className="mr-5 hover:text-gray-900">
              Countries
            </NavLink>
            <NavLink to='/favourites' className="mr-5 hover:text-gray-900 cursor-pointer ">
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
          </nav> */}
        </div>
      </header>
    </>
  );
};

export default Header;
