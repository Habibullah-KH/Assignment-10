// LayoutLoader.jsx
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Routers from '../routes/Routers'
// You can replace this with any custom spinner
const FullPageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
    <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

const LayoutLoader = () => {
  const { Loading } = useContext(AuthContext);

  return Loading ? <FullPageLoader /> : <RouterProvider router={Routers} />;
};

export default LayoutLoader;
