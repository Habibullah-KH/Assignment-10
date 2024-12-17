import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [click, setClick] = useState(false);
    const [visit, setVisit] = useState(false);

    const handleDropdown = () => {
        setClick(!click)
    }
    return (
        <>
        <div className="flex justify-between items-center p-4 backdrop-blur-3xl bg-clr-bg bg-opacity-80 ">
            {/* Brand Logo and name */}
            <div className="flex justify-center items-center">
            <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/logoClr.png"/>
            <h2 className="font-bold md:text-xl">ActiveEdge</h2>
            </div>

{/* Navigative buttons */}
 <div className={`hidden lg:flex`} >

<NavLink to="/" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">Home</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">All Equipments</button>
</NavLink>

<NavLink to="/addEquepment" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">Add Equipment</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">My Equipment List</button>
</NavLink>
</div>      
{/* Navigative buttons END*/}


<div className="text-xl flex items-center gap-5">

{/*Login equepment and Login info*/}

{
    user&&user?.email? 
<div className="flex items-center">



    <div onClick={()=>setVisit(!visit)}
     className="text-sm flex items-center gap-2 mx-auto p-3">
        <img  src={user?.photoURL}
        className="h-8 w-8 rounded-full border-2 border-gray-500"/>
    </div>

    <div className={`
    duration-700 rounded-lg
    p-5 border-2 border-gray-300 text-sm right-5
    absolute ${visit? 'top-20' : '-top-60'}
    `}>

        <p className="text-ld">{user?.displayName}</p>
    </div>

    <NavLink onClick={logOut} className={ ({isActive}) => isActive? "btn-active" : "btn"}>LogOut</NavLink>
</div>
    :
<div>
    <NavLink to="/login" className={ ({isActive}) => isActive? "btn-active" : "btn"}>Login</NavLink>
</div>
}






            {/*Dropdown btn*/}
            <div className="lg:hidden" onClick={handleDropdown}>      
            {
                click?<FiXSquare />:<FiMenu />
            }

<div className={`absolute duration-700 bg-clr-bg bg-opacity-80 
    ${click? 'top-20':'-top-60'}
    left-0 right-0 shadow-sm z-10 overflow-hidden text-center mx-auto items-center
    flex flex-col md:flex-row justify-center md:p-10
    `} >

<NavLink to="/" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">Home</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">All Equipments</button>
</NavLink>

<NavLink to="/addEquepment" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">Add Equipment</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button type="button">My Equipment List</button>
</NavLink>
</div>
            </div>
</div>



        </div>
        </>
    );
};

export default NavBar;