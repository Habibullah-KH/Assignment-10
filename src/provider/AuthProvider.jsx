import PropTypes from 'prop-types';  
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.Config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

//* Initialize Firebase Authentication and get a reference to the service

const auth = getAuth(app);
    //* SignIn with email and password
    const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
    }

    //* login with email and password
    const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    }

    //*logout
    const logOut = () => {
        return signOut(auth);
    }

    //* obsurver
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return()=>{unsubscribe()}
    }, [auth])

    const data = {
        createUser,
        logInUser,
        setUser,
        logOut,
        user,
    };
    return (
        <>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </>
    );
};
AuthProvider.propTypes = {  
    children: PropTypes.object.isRequired,    
}  
export default AuthProvider;