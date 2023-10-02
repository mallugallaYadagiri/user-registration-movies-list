import React from "react";
import NavBar from "./NavBar";

function MainScreen() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center mt-60">
        <button className=" border font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
}

export default MainScreen;
