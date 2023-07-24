import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/Image/logo.png"

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navOptions = (
    <>
      <li className="nav-link nav-link-ltr ">
        <Link href="/" className="text-white">
          Home
        </Link>
      </li>
      <li className="nav-link nav-link-ltr">
        <Link href="/products" className="text-white">
          products
        </Link>
      </li>
      <li className="nav-link nav-link-ltr">
        <Link href="/categories" className="text-white">
          Category
        </Link>
      </li>
   
    </>
  );

  return (
    <div className="navbar fixed z-20  max-w-screen-2xl bg-gray-600">
      <div className="navbar-start">
        <div className="dropdown ">
          {!isDropdownOpen ? (
            <label
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost   lg:hidden"
            >
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
            </label>
          ) : (
            <label
              tabIndex={0}
              onClick={toggleDropdown}
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/1990/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          )}

          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact bg-black  dropdown-content mt-3 p-2 text-primary font-bold shadow  rounded-box w-52 z-50"
            >
              {navOptions}
            </ul>
          )}
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-white text-xl">
         

         <Image
          alt="example"
          src={logo}
          height={40}
          width={180}
          responsive
        />

        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1 ">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        <Link href="/login">
          {" "}
          <button className="btn btn-sm btn-primary">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
