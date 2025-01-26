import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HiMenuAlt1, HiMenuAlt2 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="text-[18px] font-semibold">
                <Link to="/">Home</Link>
              </li>

              <li className="text-[18px] font-semibold">
                <Link to="/joblist">Find Jobs</Link>
              </li>
              <li className="text-[18px] font-semibold">
                <Link>About Us</Link>
              </li>
            </ul>
          </div> */}

          {/* mobile hamburger menu */}
          {showMenu ? (
            <HiMenuAlt1
              className="cursor-pointer transition-all md:hidden z-50"
              onClick={toggleMenu}
              size={30}
            ></HiMenuAlt1>
          ) : (
            <HiMenuAlt2
              className="cursor-pointer transition-all md:hidden z-50"
              onClick={toggleMenu}
              size={30}
            ></HiMenuAlt2>
          )}
          <a className="btn btn-ghost text-xl">Job Heaven</a>
        </div>

        <div>
          <ResponsiveMenu
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          ></ResponsiveMenu>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[18px] font-semibold">
              <Link to="/">Home</Link>
            </li>

            <li className="text-[18px] font-semibold">
              <Link to="/joblist">Find Jobs</Link>
            </li>
            <li className="text-[18px] font-semibold">
              <Link>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  ">
          {user ? (
            <>
              {/* <p>{user.email}</p> */}
              <button
                onClick={handleLogOut}
                className="bg-[#6300B3] py-[14px] px-[25px] text-white text-[18px] font-semibold	rounded-lg"
              >
                LogOut{" "}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-[#6300B3] py-[14px] px-[25px] text-white text-[18px] font-semibold	rounded-lg"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
