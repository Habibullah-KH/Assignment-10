import { useEffect, useState } from "react";
import CardContainer from "../component/CardContainer";
import Slider from "../component/Slider";
import Loding from "./Loding";
import DreamSetup from "../component/DreamSetup";

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
          {/* Show a loading message if no data has been fetched yet */}
          {product.length === 0 ? <Loding/> : <CardContainer datas={product} />}
        </div>

        {/* additional 1 */}
        <DreamSetup/>



      </div>
    </>
  );
};

export default Home;
