import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo-putih.jpg";
import { login } from "../redux/actions/Auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  // console.log(formdata);
  const { email, password } = formdata;
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    navigate("/dashboard");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[350px] h-[500px] border rounded-md flex items-center justify-center flex-col  shadow-md">
        <div className="w-[150px] h-[150px]  rounded-full ">
          <img src={logo} alt="logo" />
        </div>

        <form className="w-full p-6" onSubmit={handlesubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={handlechange}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              onChange={handlechange}
              name="password"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
