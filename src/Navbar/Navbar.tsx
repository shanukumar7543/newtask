import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from "./logo.svg"

function Navbar() {
  return (
    <div className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl flex-col font-bold">
          {/* <div><img src={logo} alt="logo" /></div> */}
         <h1> TECH </h1>
        </div>

        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <a href="#" className="hover:text-gray-400">Solutions</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Culture</a>
        </div>

        <div className="md:flex items-center space-x-2 flex-shrink">
          <button className="bg-gray-800  hover:bg-blue-700 text-white py-2 px-6 rounded-3xl transition duration-300">Contact Us</button>
          <div  className="ml-4 rounded-full bg-gray-800 hover:bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white transition
                  duration-500 hover:scale-105">
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
