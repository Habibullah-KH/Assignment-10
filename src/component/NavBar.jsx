import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiXSquare } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";
import './buttons/circel.css';
import SpecialButton from "./buttons/SpecialButton";
import FillButton from "./buttons/FillButton";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [visit, setVisit] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleDropdown = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="flex justify-between items-center p-2 px-3 bg-white/90 backdrop-blur-xl w-full">
        {/* Brand Logo and name */}
        <div className="flex justify-center items-center">
          <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/logoClr.png" />
          <h2 className="font-bold md:text-xl text-black">ActiveEdge</h2>
        </div>

<div className="flex items-center gap-3">
        {/* Navigation buttons (desktop) */}
        <div className="hidden lg:flex gap-2">
          <NavLink to={"/"}>
            {({ isActive }) => (
              <FillButton
                theme={theme}
                text="Home"
                className={isActive ? "bg-clr-primary text-black" : ""}
              />
            )}
          </NavLink>

          <NavLink to="/allEquepment">
            {({ isActive }) => (
              <FillButton
                theme={theme}
                text="All Equipments"
                className={isActive ? "bg-clr-primary text-black" : ""}
              />
            )}
          </NavLink>

           {user && (
             <NavLink to="/dashboard/addEquepment">
               {({ isActive }) => (
                 <FillButton
                   theme={theme}
                   text="Dashboard"
                   className={isActive ? "bg-clr-primary text-black" : ""}
                 />
               )}
             </NavLink>
           )}


        </div>

        {/* Right side items */}
        <div className="text-xl flex items-center gap-5">
          {/* Theme toggle button */}
          <button onClick={toggleTheme} className="circel">
            {theme === "light" ? " 🌙 " : " 🌞 "}
          </button>

          {/* User login/profile */}
          {user?.email ? (
            <div className="flex items-center">
              <div
                onClick={() => setVisit(!visit)}
                className="text-sm flex items-center gap-2 mx-auto p-3"
              >
                <img
                  src={user?.photoURL}
                  className="h-8 w-8 rounded-full border-2 border-gray-500"
                />
              </div>

              <div
                className={`duration-700 rounded-lg p-5 border-2 border-gray-300 text-sm right-5 absolute ${
                  visit ? "top-20" : "-top-60"
                }`}
              >
                <p className="text-ld">{user?.displayName}</p>
              </div>

              <NavLink onClick={logOut}>
                <SpecialButton text="LogOut" />
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <SpecialButton text="Login" />
              </NavLink>
            </div>
          )}

          {/* Mobile dropdown toggle */}
          <div className="lg:hidden" onClick={handleDropdown}>
            {click ? <FiXSquare /> : <FiMenu />}
          </div>
        </div>
</div>

      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute duration-700 backdrop-blur-2xl bg-white bg-opacity-75 y-5 ${
          click ? "top-[5.5rem]" : "-top-72" 
        } left-0 right-0 shadow-sm z-10 overflow-hidden text-center mx-auto items-center flex flex-col md:flex-row justify-center md:p-10 py-2`}
      >
        <NavLink to="/">
          {({ isActive }) => (
            <FillButton
              theme={theme}
              text="Home"
              className={isActive ? "bg-clr-primary text-black" : ""}
            />
          )}
        </NavLink>

        <NavLink to="/allEquepment">
          {({ isActive }) => (
            <FillButton
              theme={theme}
              text="All Equipments"
              className={isActive ? "bg-clr-primary text-black" : ""}
            />
          )}
        </NavLink>

        {user && (
          <NavLink to="/dashboard/addEquepment">
            {({ isActive }) => (
              <FillButton
                theme={theme}
                text="Dashboard"
                className={isActive ? "bg-clr-primary text-black" : ""}
              />
            )}
          </NavLink>
        )}


      </div>
    </>
  );
};

export default NavBar;
