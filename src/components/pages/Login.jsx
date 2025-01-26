import React, { useContext, useState } from "react";
import LoginImg from "../../assets/login.png";
import googleIcon from "../../assets/search.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setSuccess("Login done");
        console.log(result);
      })
      .catch((error) => {
        setError("error khyse re");
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center font-poppins">
      <h1 className="mt-10 text-[45px] text-[#303030] font-semibold	">
        Login to your Account
      </h1>
      <p className="text-[22px] text-[#5E6670]">
        Welcome back! Select the below login methods.
      </p>

      <div className="hero min-h-screen max-w-[1200px] ">
        <div className="hero-content flex-col lg:flex-row-reverse  shadow-2xl rounded-lg">
          <div className="text-center lg:text-left">
            <img className="" src={LoginImg} alt="" />
          </div>
          <div className="card  w-full max-w-sm shrink-0 ">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium	text-[#303030] text-[22px]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium	text-[#303030] text-[22px]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-[16px] text-[#2D31AB]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              {error && <p className="text-red-500">{error}</p>}
              {success && <p>{success}</p>}
              <div className="form-control mt-6">
                <button className="btn bg-[#6300B3] font-bold	text-[22px] text-white">
                  Login
                </button>
              </div>
            </form>

            <div>
              <div className="flex items-center">
                <div className="flex-grow ml-4 h-px bg-gray-300"></div>
                <span className="mx-4 text-gray-500  text-[20px] font-normal	">
                  or login with
                </span>
                <div className="flex-grow mr-4 h-px bg-gray-300"></div>
              </div>
              <div className="flex justify-center mt-4 mb-10">
                <button className="">
                  <img className="w-[30px]" src={googleIcon} alt="" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-[#303030] text-[18px] font-normal	">
                Don’t have an account?{" "}
                <span className="text-[#2D31AB]">
                  {" "}
                  <Link to="/register">Register</Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
