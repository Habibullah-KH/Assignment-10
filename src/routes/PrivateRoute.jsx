import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loding";

const PrivateRoute = ({children}) => {
     const {user, Loading} = useContext(AuthContext);
     const location = useLocation();

     if(Loading){
       return <Loading/>
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