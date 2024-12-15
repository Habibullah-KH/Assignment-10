import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Ragistation from "../pages/Ragistation";
import Login from "../pages/Login";
import Details from "../pages/Details";
import DreamCategoryItem from "../component/DreamCategoryItem";

const Routers = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout/>,
    children: [{
        path: "/",
        element: <Home/>,
        children: [{
            path: "/category/:category",
            element: <DreamCategoryItem/>,
            loader: ({params}) => {fetch(`http://localhost:8000/category/${params.category}`);}
        },
    ]},

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
        element: <Details/>,
        loader:({params}) => fetch(`http://localhost:8000/user/${params.id}`)
    },
]},
]);

export default Routers;