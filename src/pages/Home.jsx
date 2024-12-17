import { useEffect, useState } from "react";
import CardContainer from "../component/CardContainer";
import Slider from "../component/Slider";
import Loding from "./Loding";
import DreamSetup from "../component/DreamSetup";
import Offer from "../component/Offer";

const Home = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch the data and update the state
    fetch('http://localhost:8000/myprodouct')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []); 

  return (
    <>
      <div>{/*Parent container*/}

        {/* Slider */}
        <Slider />

        {/* Cards */}
        <div>
          {product.length === 0 ? <Loding/> : <CardContainer datas={product} />}
        </div>

{/* additional 1 */}
    <DreamSetup/>
{/* additional 1 end*/}

{/* aditional page 2 */}
    <Offer/>
{/* aditional page 2 end*/}

      </div>
    </>
  );
};

export default Home;
