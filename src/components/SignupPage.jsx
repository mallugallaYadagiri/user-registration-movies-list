import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  name: "",
  password: "",
  email: "",
  phoneNumber: "",
  profession: "",
};
function SignupPage() {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const isUserAlreadyExists = () => {
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];
    return existingUsers.some(
      (user) =>
        user.name.toLowerCase() === formData.name.toLowerCase() &&
        user.password === formData.password &&
        user.email === formData.email &&
        user.phoneNumber === formData.phoneNumber &&
        user.profession === formData.profession
    );
  };
  console.log(isUserAlreadyExists());
  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      toast.error("Name is a required field");
    }
    if (formData.password.trim() === "") {
      toast.error("Password is a required field");
    }
    if (formData.email.trim() === "") {
      toast.error("Email is a required field");
    }
    if (formData.phoneNumber.trim() === "") {
      toast.error("Phone Number is a required field");
    }
    if (formData.profession.trim() === "") {
      toast.error("Profession is a required field");
    } else if (isUserAlreadyExists()) {
      toast.error("User already exists. Please login");
      navigate("/login");
    } else {
      const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

      const updatedUsers = [...existingUsers, formData];

      localStorage.setItem("userData", JSON.stringify(updatedUsers));
      toast.success("Registration Successful");
      setFormData(initialState);

      setTimeout(() => {
        navigate("/login");
      }, 3000);

      console.log("formData", formData);
    }
  };

  return (
    <div className="bg-blue-600 flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold text-white">Signup Page</h1>
      <form
        className="border w-1/3 bg-blue-500 p-4 rounded-lg mt-10"
        onSubmit={handleSignup}
      >
        <div className="flex justify-between p-2 h-12 ">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="w-1/2 p-1 rounded font-bold"
            value={formData.name.toLowerCase()}
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
            value={formData.password.toLowerCase()}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between p-2 h-12 ">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="w-1/2 p-1 rounded font-bold"
            value={formData.email.toLowerCase()}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between p-2 h-12 ">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            className="w-1/2 p-1 rounded font-bold"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-between p-2 h-12">
          <label htmlFor="profession">Profession</label>
          <select
            name="profession"
            className="w-1/2 rounded font-bold"
            value={formData.profession.toLowerCase()}
            onChange={handleInputChange}
          >
            <option value="" className="text-center">
              ---- Select ----
            </option>
            <option value="software_developer">Software Developer</option>
            <option value="system_administrator">System Administrator</option>
            <option value="network_engineer">Network Engineer</option>
            <option value="data_analyst">Data Analyst</option>
            <option value="it_security_specialist">
              IT Security Specialist
            </option>
            <option value="ux_ui_designer">UX/UI Designer</option>
            <option value="project_manager">Project Manager</option>
            <option value="qa_tester">QA Tester</option>
            <option value="devops_engineer">DevOps Engineer</option>
            <option value="business_analyst">Business Analyst</option>
          </select>
        </div>
        <div className="flex justify-center flex-col p-5">
          <button className="border font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white">
            Sign Up
          </button>
        </div>
        <div className="flex justify-center flex-col p-5">
          <p className="text-center p-4 text-white text-xl">
            Already have an account?
          </p>
          <button
            className="border font-bold px-6 py-2 rounded-md bg-white hover:bg-blue-400 hover:text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;
