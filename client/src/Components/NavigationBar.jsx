import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in based on your authentication mechanism
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Update the authentication status
    setIsLoggedIn(false);

    navigate("/login"); 
  };

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="w-full h-auto bg-slate-400 lg:px-9 md:px-10 sm:px-14 px-12 shadow-md sm:py-4">
      <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link
            to="/"
            className="text-3xl text-gray-800 font-semibold tracking-[0.1rem]"
          >
            {/* logo section */}
            Navbar
          </Link>

          {/* Toggle */}
          <div className="md:hidden">
            <button
              className="p-2 text bg-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
              onClick={handleClick}
            >
              {navbar ? (
                <RxCrossCircled
                  className="text-orange-300 focus:border"
                  size={22}
                />
              ) : (
                <FaBars className="text-orange-400" size={22} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`felx justify-between items-center md:block ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-[1.15rem] font-normal text-black  py-1.5 rounded-lg lg:ml-10 md:ml-6 sm:ml-0"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-[1.15rem] font-normal text-black  py-1.5 rounded-lg lg:ml-10 md:ml-6 sm:ml-0"
                >
                  Login
                </Link>
              )}
            </div>
            {!isLoggedIn && (
              <Link
                to="/signup"
                className="text-[1.15rem] font-normal text-black  py-1.5 rounded-lg lg:ml-10 md:ml-6 sm:ml-0 "
              >
                Sign Up
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
