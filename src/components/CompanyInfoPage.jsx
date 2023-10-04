import React from "react";
import NavBar from "./NavBar";

function CompanyInfoPage() {
  return (
    <div className="h-screen ">
      <NavBar />
      <h1 className="text-center text-3xl text-white font-bold mt-10 ">
        Company Info
      </h1>
      <div className="border w-1/3 m-auto flex flex-col justify-between bg-blue-500 rounded-lg mt-20">
        <p className="text-xl text-white font-bold flex justify-between p-4">
          <span>Company:</span>
          <span className="w-3/4">Geeksynergy Technologies Pvt Ltd</span>
        </p>
        <p className="text-xl text-white font-bold flex  justify-between p-4">
          <span>Address:</span>
          <span className="w-3/4">Sanjayanagar, Bengaluru-56</span>
        </p>
        <p className="text-xl text-white font-bold flex  justify-between p-4">
          <span>Phone:</span> <span className="w-3/4">XXXXXXXXX09</span>
        </p>
        <p className="text-xl text-white font-bold flex  justify-between p-4">
          <span>Email:</span> <span className="w-3/4">XXXXXX@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default CompanyInfoPage;
