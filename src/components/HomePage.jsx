import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="flex justify-between w-3/5 p-5 m-auto ">
      <div className="flex flex-col border p-4 rounded-md bg-blue-500 mt-60">
        <p className="text-xl font-bold p-4 text-white">
          Already registered? Please Login here
        </p>
        <Link
          to="/login"
          className=" text-center border text-xl font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-col border p-4 rounded-md bg-blue-500 mt-60">
        <p className="text-xl font-bold p-4 text-white">
          Are you new user? Please Signup here
        </p>
        <Link
          to="/signup"
          className=" text-center border text-xl font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
