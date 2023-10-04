import React from "react";

import logo from "../assets/logo-2.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    toast.success("Logged Out");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <nav className="flex justify-around items-center bg-blue-700">
      <div className="flex justify-center items-center w-1/3">
        <img src={logo} alt="logo" />
        <p className="text-2xl ml-3 font-bold text-white cursor-pointer">
          GEEKSYNERGY
        </p>
      </div>
      <ul className="flex justify-between w-1/4 px-4">
        <li className="text-2xl font-bold text-white hover:text-gray-700 cursor-pointer px-4 py-2 hover:bg-white rounded-md">
          <Link to="/company">Company Info</Link>
        </li>
        <li
          className="text-2xl font-bold text-white hover:text-gray-700 cursor-pointer px-4 py-2 hover:bg-white rounded-md"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
      <ToastContainer />
    </nav>
  );
}

export default NavBar;
