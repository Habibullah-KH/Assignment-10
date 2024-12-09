import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
const MainLayout = () => {
    return (
        <>
        {/* navbar */}
        <div className="sticky top-0 z-[999]  mb-5">
        <NavBar/>
        </div>
        {/* outlet */}

<div className="min-h-[calc(100vh-444px)] z-2">
    <Outlet/>
</div>
        {/* footer */}
        <Footer/>

        </>
    );
};

export default MainLayout;