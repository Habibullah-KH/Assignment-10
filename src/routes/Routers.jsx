import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Ragistation from "../pages/Ragistation";
import Login from "../pages/Login";

const Routers = createBrowserRouter([
    {
    path: "/",
    element: <MainLayout/>,
    children: [{
        path: "/",
        element: <Home/>,
    },
    {
        path: "/signIn",
        element: <Ragistation/>
    },
    {
        path: "/login",
        element: <Login/>
    }
]},
]);

export default Routers;