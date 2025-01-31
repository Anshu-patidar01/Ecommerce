import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setform] = useState({
    email: "",
    password: "",
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

  // const handleCheckOnline = async () => {
  //   try {
  //     const response = await axios.get("https://google.com");
  //   } catch (error) {
  //     setPopUpmessage({
  //       message: "No internet connection.",
  //       style: "bg-red-500",
  //     });
  //     handleShowMessage();
  //     return "";
  //   }
  // };
  //handle from submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // handleCheckOnline();
    try {
      console.log(form);

      const response = await axios
        .post(process.env.VITE_API_LOGINI_API, form, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setform({
            email: "",
            password: "",
          });
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem("ecommerceToken", token);
          setPopUpmessage({
            message: "login Succefully",
            style: "bg-green-500",
          });
          handleShowMessage();
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        })
        .catch((error) => {
          const response = {
            message: error.response.data.message,
            error: error.response.data.Error,
          };
          setPopUpmessage({
            message: " email or password was wrong",
            style: "bg-red-500",
          });
          handleShowMessage();
          console.log(response);
        });
    } catch (error) {
      console.log("error while connecting to login api.", error);
      setPopUpmessage({
        message: "error while connecting to login api.",
        style: "bg-red-500",
      });
      handleShowMessage();
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
            {showMessage && (
              <div
                className={`fixed top-4 right-4  ${PopUpmessage.style} text-white p-4 rounded shadow-lg w-64`}
              >
                <p>{PopUpmessage.message}</p>
                <p>{}</p>
                {/* Decreasing Line with Animation */}
              </div>
            )}
          </div>
          {/* PopUp meassage UI */}

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            onSubmit={handleSubmit}
            method="POST"
            className="space-y-6"
          >
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                <div className="text-sm">
                  <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                id="signInButton"
                onClick={() => {
                  document.getElementById("signInButton").innerText =
                    "loading...";

                  setTimeout(
                    () =>
                      (document.getElementById("signInButton").innerText =
                        "Sign in"),
                    3000
                  );
                }}
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            A newly user can register here.. ?{" "}
            <Link
              to={"/register"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Click here to Register.
            </Link>
          </p>
        </div>
      </div>
      {/* register page */}
    </>
  );
}
