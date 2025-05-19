import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Registation from "../pages/Ragistation";
import Login from "../pages/Login";
import Details from "../pages/Details";
import DreamCategoryItem from "../component/DreamCategoryItem";
import PrivateRoute from "./PrivateRoute";
import AddEquepment from "../pages/AddEquepment";
import Myequipment from "../pages/Myequipment";
import Allequepment from "../pages/Allequepment";
import UpdateData from "../pages/UpdateData";
import NotFound from "../component/NotFound";
import Dashboard from "../pages/Dashboard";
import Profile from "../component/Dashboard/Profile";


const Routers = createBrowserRouter([
  
      // Not found page
      {
        path: "*",
        element: <NotFound />,
      },
      
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Default redirect to All category
      {
        index: true,
        element: <Navigate to="/category/All" />,
      },

      // Home page route (with nested DreamCategoryItem)
      {
        path: "/",
        element: <Home />,
        children: [
          {
         path: "category/:category",
          element: <DreamCategoryItem />,
           loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_SERVER_url}/category?category=${params.category}`),
           },
        ],
      },
        {
          path: "allEquepment",
          element: <Allequepment />,
        },
      {
        path: "/user/:id",
        element: (<Details />),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_url}/user/${params.id}`),
      },
    ],
  },
  
  {
    path: "/dashboard",
    element: <Dashboard/>,
    children: [
  {
    path: "/dashboard/profile",
    element: <Profile/>,
  },
  {
  path: "/dashboard/addEquepment",
  element: (
    <PrivateRoute>
      <AddEquepment />
    </PrivateRoute>
  ),
  },
  {
    path: "/dashboard/updateEquepment/:id",
    element: <UpdateData />,
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_SERVER_url}/update/${params.id}`),
  },
  {
    path: "/dashboard/equipment/:user",
    element: (
      <PrivateRoute>
        <Myequipment />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_SERVER_url}/equipment/${params.user}`),
  },
    ]
  },
      {
        path: "/registration",
        element: <Registation />,
      },
      {
        path: "/login",
        element: <Login />,
      },
]);


export default Routers;