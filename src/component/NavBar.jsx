import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";


const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleDropdown = () => {
        setClick(!click)
    }
    return (
        <>
        <div className="flex justify-between items-center p-4">
            {/* Brand Logo and name */}
            <div className="flex justify-center items-center">
            <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/public/logoClr.png"/>
            <h2 className="font-bold md:text-xl">ActiveEdge</h2>
            </div>

            {/*Page Navigate button*/}
            <div className=" hidden lg:flex lg:block">

                <NavLink to="/" 
                className={({isActive}) => isActive?"btn btn-active" : "btn"}>
                    <button>Home</button>
                </NavLink>

                <NavLink to="" 
                className={({isActive}) => isActive?"btn btn-active" : "btn"}>
                    <button>All Equipments</button>
                </NavLink>

                <NavLink to="" 
                className={({isActive}) => isActive?"btn btn-active" : "btn"}>
                    <button>Add Equipment</button>
                </NavLink>

                <NavLink to="" 
                className={({isActive}) => isActive?"btn btn-active" : "btn"}>
                    <button>My Equipment List</button>
                </NavLink>
            </div>

<div className="text-xl flex items-center gap-5">
    
            {/*Login equepment*/}
            <div>
                <NavLink to="" className={ ({isActive}) => isActive? "btn-active" : "btn"}>Login</NavLink>
            </div>

            {/*Dropdown btn*/}
            <div className="lg:hidden" onClick={handleDropdown}>      
            {
                click?<FiXSquare />:<FiMenu />
            }

<div className={`absolute duration-700 bg-transparent backdrop-blur-2xl
    ${click? 'top-20':'-top-60'}
    left-0 right-0 shadow-sm z-10 overflow-hidden`} 
>

<NavLink to="/" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Home</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>All Equipments</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Add Equipment</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>My Equipment List</button>
</NavLink>
</div>
            </div>
</div>



        </div>
        </>
    );
};

export default NavBar;