import { NavLink } from "react-router-dom";


const Categori = () => {

    return (
        <>
<div className="flex justify-center items-center p-4 backdrop-blur-3xl bg-clr-bg bg-opacity-80">
<div className="text-xl flex items-center gap-5">


<div className={`duration-700 bg-clr-bg bg-opacity-8
 z-10 overflow-hidden text-center mx-auto
 flex flex-col items-center justify-center
`} >

<NavLink to="/" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Hiking</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Football</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Cricket</button>
</NavLink>

<NavLink to="" 
className={({isActive}) => isActive?"btn btn-active" : "btn"}>
    <button>Cycle</button>
</NavLink>
</div>
            </div>
</div>


        </>
    );
};

export default Categori;