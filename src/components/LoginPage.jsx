import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(users);
    const user = users.find(
      (u) => u.name === formData.name && u.password === formData.password
    );
    console.log(user);
    if (user) {
      toast.success("Logged in Successfully");
      setTimeout(() => {
        navigate("/movies");
      }, 1000);
    } else {
      toast.error("Invalid Credentials");
    }
  };
  return (
    <div className="bg-blue-600 flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <form
        className="border w-1/3 bg-blue-500 p-4 rounded-lg mt-20"
        onSubmit={handleLogin}
      >
        <div className="flex justify-between p-2 h-12 ">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-1/2 p-1 rounded font-bold"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between p-2 h-12 ">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-1/2 p-1 rounded font-bold"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center flex-col p-5">
          <button className="border font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white">
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
