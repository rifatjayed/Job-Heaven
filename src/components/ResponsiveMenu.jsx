import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const { user } = useContext(AuthContext);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white/50 backdrop:blur-md px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        <div className="flex items-center">
          <FaUserCircle size={50}></FaUserCircle>
          <div>
            {user ? (
              <div className="ml-2">
                {" "}
                <h1>{user.displayName}</h1>
                <h1 className="text-sm text-slate-500">{user.email}</h1>
              </div>
            ) : (
              <>
                {" "}
                <h1>Hellow User</h1>
                <h1 className="text-sm text-slate-500"> Premium User</h1>
              </>
            )}
          </div>
        </div>

        <ul className="menu menu-horizontal px-1 inline-block text-base font-semibold py-2  uppercase">
          <li
            onClick={() => setShowMenu(false)}
            className="text-[18px] font-semibold"
          >
            <Link to="/">Home</Link>
          </li>

          <li
            onClick={() => setShowMenu(false)}
            className="text-[18px] font-semibold"
          >
            <Link to="/joblist">Find Jobs</Link>
          </li>
          <li
            onClick={() => setShowMenu(false)}
            className="text-[18px] font-semibold"
          >
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
