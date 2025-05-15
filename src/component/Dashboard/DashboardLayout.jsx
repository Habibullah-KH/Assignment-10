import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import FillButton from "../buttons/FillButton";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 shadow-md flex flex-col justify-between text-black">
        {/* Profile Section */}
        <div className="flex flex-col justify-around">
          <div
            onClick={() => navigate("/dashboard/profile")}
            className="cursor-pointer p-3 bg-white rounded shadow hover:bg-gray-50 "
          >
            <img
              src={user?.photoURL}
              className="w-16 h-16 rounded-full mx-auto mb-2"
              alt="User"
            />

            
               <h2 title={user?.displayName} className="cursor-pointer text-center font-bold">
                {user?.displayName ? (
                  user?.displayName.length > 20 ? (
                    `${user?.displayName.slice(0, 6)}...${user?.displayName.slice(
                      -6
                    )}`
                  ) : (
                  user?.displayName
                  )
                ) : (
                  <span className="text-red-400">N/A</span>
                )}
              </h2>


               <h2 title={user?.email} className="cursor-pointer text-center text-sm text-gray-500 font-semibold">
                {user?.email ? (
                  user?.email.length > 20 ? (
                    `${user?.email.slice(0, 10)}...${user?.email.slice(
                      -6
                    )}`
                  ) : (
                  user?.email
                  )
                ) : (
                  <span className="text-red-400">N/A</span>
                )}
              </h2>
              
          </div>

          {/* Nav Buttons */}
          <div className="mt-6 space-y-2 text-center">

          <NavLink to="/">
          {({ isActive }) => (
            <FillButton
              text="Go back to home"
              className={isActive ? "bg-clr-primary text-black" : ""}
            />
          )}
        </NavLink>

          <NavLink to="/dashboard/addEquepment">
          {({ isActive }) => (
            <FillButton
              text="Add Equipment"
              className={isActive ? "bg-clr-primary text-black" : ""}
            />
          )}
        </NavLink>

        <NavLink to={`/dashboard/equipment/${user?.email}`}>
          {({ isActive }) => (
            <FillButton
              text="My Equipment List"
              className={isActive ? "bg-clr-primary text-black" : ""}
            />
          )}
        </NavLink>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-5 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
