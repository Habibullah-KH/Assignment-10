import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import FillButton from "../buttons/FillButton";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Focus sidebar when it opens
  useEffect(() => {
    if (sidebarOpen && sidebarRef.current) {
      sidebarRef.current.focus();
    }
  }, [sidebarOpen]);

  return (
    <div className="flex h-screen relative">
      {/* Toggle button always visible */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={sidebarOpen}
        aria-controls="sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {sidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <nav
        id="sidebar"
        ref={sidebarRef}
        tabIndex={-1}
        className={`
          fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-md flex flex-col justify-between text-black
          transform transition-transform duration-300 ease-in-out
          z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Profile Section */}
        <div className="flex flex-col justify-around">
          <div
            onClick={() => {
              navigate("/dashboard/profile");
              setSidebarOpen(false);
            }}
            className="cursor-pointer p-3 bg-white rounded shadow hover:bg-gray-50"
          >
            <img
              src={user?.photoURL}
              className="w-16 h-16 rounded-full mx-auto mb-2"
              alt="User"
            />
            <h2 title={user?.displayName} className="text-center font-bold">
              {user?.displayName
                ? user.displayName.length > 20
                  ? `${user.displayName.slice(0, 6)}...${user.displayName.slice(-6)}`
                  : user.displayName
                : <span className="text-red-400">N/A</span>}
            </h2>
            <h2 title={user?.email} className="text-center text-sm text-gray-500 font-semibold">
              {user?.email
                ? user.email.length > 20
                  ? `${user.email.slice(0, 10)}...${user.email.slice(-6)}`
                  : user.email
                : <span className="text-red-400">N/A</span>}
            </h2>
          </div>

          {/* Nav Buttons */}
          <div className="mt-6 space-y-2 text-center flex flex-col gap-[1px]">
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              {({ isActive }) => (
                <FillButton text="Go back to home" className={isActive ? "bg-clr-primary text-black" : ""} />
              )}
            </NavLink>
            <NavLink to="/dashboard/addEquepment" onClick={() => setSidebarOpen(false)}>
              {({ isActive }) => (
                <FillButton text="Add Equipment" className={isActive ? "bg-clr-primary text-black" : ""} />
              )}
            </NavLink>
            <NavLink to={`/dashboard/equipment/${user?.email}`} onClick={() => setSidebarOpen(false)}>
              {({ isActive }) => (
                <FillButton text="My Equipment List" className={isActive ? "bg-clr-primary text-black" : ""} />
              )}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Dark overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content with no margin */}
      <main className="flex-1 p-0 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
