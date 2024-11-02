import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Button2 from "./Button2";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/listed-books"}>Listed Books</NavLink>
      </li>
      <li>
        <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
        <div className="navbar-start">
          <div className="dropdown">
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
              {Links}
            </ul>
          </div>
          <a className="font-bold text-2xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <Button text="Sign In"></Button>
          <Button2 text="Sign Up"></Button2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
