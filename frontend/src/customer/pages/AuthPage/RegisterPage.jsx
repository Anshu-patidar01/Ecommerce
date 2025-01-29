import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterPage() {
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
  const [PopUpmessage, setPopUpmessage] = useState({
    message: "",
    style: "bg-green-500",
  });
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 5 seconds
    }, 2000);
  };
  //handle input change
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //handle from submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.password !== form.confirmPassword) {
        setPopUpmessage({
          message: "confirm password not matched.",
          style: "bg-red-500",
        });
        handleShowMessage();
        return "";
      }
      console.log(form);
      const response = await axios
        .post(process.env.VITE_API_REGISTER_API, form, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          setform({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          console.log(response);
          setPopUpmessage({
            message: "Registered Succefully",
            style: "bg-green-500",
          });
          handleShowMessage();
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((error) => {
          const response = {
            message: error.response.data.message,
            error: error.response.data.Error,
          };
          console.log(response);

          setPopUpmessage({
            message: response.error,
            style: "bg-red-500",
          });
          handleShowMessage();
        });
    } catch (error) {
      console.log("error while connecting to registering api.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className=" flex flex-row gap-2 justify-center items-center  rounded-xl p-2  ">
            <h1 className=" font-light  text-3xl text-black cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-100">
              Fashion HUB
            </h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>
          {/* PopUp meassage UI */}
          <div className="">
            {/* <button
              onClick={handleShowMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            >
              Show Message
            </button> */}

            {showMessage && (
              <div
                className={`fixed top-4 right-4  ${PopUpmessage.style} text-white p-4 rounded shadow-lg w-64`}
              >
                <p>{PopUpmessage.message}</p>
                {/* Decreasing Line with Animation */}
              </div>
            )}
          </div>
          {/* PopUp meassage UI */}

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create new Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                User Name
              </label>
              <div className="flex flex-row gap-3">
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="First Name"
                    className="block w-full rounded-md bg-blue-50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-blue-50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-blue-50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-blue-50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Conferm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-blue-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a user... ?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to login.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
