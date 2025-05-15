import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loding from "../pages/Loding";

const PrivateRoute = ({children}) => {
     const {user, loding} = useContext(AuthContext);
     const location = useLocation();

     if(loding){
       return <Loding/>
     }
     if(user&&user?.email){
        return children;
     }
    return (
        <Navigate state={location.pathname} to="/Login">

        </Navigate>
    );
};

export default PrivateRoute;