import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

const MainLayout = () => {
    return (
        <>
        {/* navbar */}
        
        <NavBar/>
        {/* outlet */}

<div className="min-h-[calc(100vh-444px)]">
    <Outlet/>
</div>
        {/* footer */}
        <Footer/>

        </>
    );
};

export default MainLayout;