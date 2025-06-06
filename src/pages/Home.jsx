import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider"
import CardContainer from "../component/CardContainer";
import Slider from "../component/Slider";
import Loading from "./Loding";
import DreamSetup from "../component/DreamSetup";
import Offer from "../component/Offer";
import WarrantyPolicy from "../component/WarrantyPolicy";
import EidSpecialOffer from "../component/EidSpecialOffer";

const Home = () => {
  const {user} = useContext(AuthContext);
  const userEmail = user?.email || '';
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_url}/equipment?user=${userEmail}`);
      const data = await response.json();
      setEquipment(data || []);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    }
  };

  fetchData();
}, [userEmail]);

        
  return (
    <>
      <div>{/*Parent container*/}

        {/* Slider */}
        <Slider />

<EidSpecialOffer/>
        {/* Cards */}
        <div>
        <h2 className="text-center mt-16 text-3xl font-bold">Our top Gadgets</h2>
        <p className="text-sm text-gray-700 text-center font-semibold mt-2">Get Your Desired Product from Our top Gadgets Category!</p>
          {/* Show a loading message if no data has been fetched yet */}
         {equipment.length === 0 ? <Loading /> : <CardContainer datas={equipment} />}
        </div>

{/* additional 1 */}
    <DreamSetup/>
{/* additional 1 end*/}

{/* aditional page 2 */}
    <Offer/>
{/* aditional page 2 end*/}


<WarrantyPolicy/>


      </div>
    </>
  );
};

export default Home;
