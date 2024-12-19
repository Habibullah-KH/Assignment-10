import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Ragistation from "../pages/Ragistation";
import Login from "../pages/Login";
import Details from "../pages/Details";
import DreamCategoryItem from "../component/DreamCategoryItem";
import PrivateRoute from "../PrivateRoute";
import AddEquepment from "../pages/AddEquepment";
import Myequipment from "../pages/Myequipment";
import Allequepment from "../pages/Allequepment";
import UpdateData from "../pages/UpdateData";
import NotFound from "../component/NotFound";


const Routers = createBrowserRouter([

    {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: "/",
            element: <Navigate to='/category/All'/>
        },
        {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/",
                element: <Navigate to='/category/All'/>
            },
            {
            path: "/category/:category",
            element: <DreamCategoryItem/>,
            loader: ({params}) => {fetch(`http://localhost:8000/category/${params.category}`);}

        },
    ]},
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/signIn",
        element: <Ragistation/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/user/:id",
        element: <PrivateRoute><Details/></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:8000/user/${params.id}`)
    },
    {
        path: "/addEquepment",
        element: 
        <PrivateRoute>
            <AddEquepment/>
        </PrivateRoute>
    },
    {
        path: "/updateEquepment/:id",
        element: <UpdateData/>,
        loader:({params}) => fetch(`http://localhost:8000/update/${params.id}`)
    },
    {
        path: "/allEquepment",
        element: 
        <Allequepment/>
    },
    {
        path: "/equipment/:user",
        element: 
    <PrivateRoute>
        <Myequipment/>
    </PrivateRoute>
        ,
        loader:({params}) => fetch(`http://localhost:8000/equipment/${params.user}`)
    },
]},
]);

export default Routers;