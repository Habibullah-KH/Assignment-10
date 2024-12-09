import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
        <div>
<div className="carousel w-full">


  <div id="slide1" className="carousel-item relative w-full">

<div className="relative">{/*Image container*/}
    
    <img className="object-cover w-full" src="/hike.png" alt="hike image" />

<div className="md:p-5 p-2 absolute bottom-0 md:bottom-16 ">{/*Text container*/}
<h2 className="font-bold text-md md:text-4xl">Cyber Monday Savings Extended</h2>
<p className="font-bold text-[0.6rem] md:text-sm lg:text-lg">Up to 65% off our best packs, gear and clothing!</p>
<Link to=""><button className="duration-300 btn hover:border-2 hover:border-gray-400">Shop now</button></Link>
</div>

</div>
  </div>
{/* END */}

  <div id="slide2" className="carousel-item relative w-full">
    
  <div>{/*Image container*/}
    
    <img className="object-cover w-full" src="/shoesA.png" alt="hike image" />

    <div className="md:p-5 p-2 absolute bottom-0 md:bottom-16 ">{/*Text container*/}
<h2 className="font-bold text-md md:text-4xl text-white">NOVA Caminho</h2>
<p className="font-bold text-[0.6rem] md:text-sm lg:text-lg text-white">Up to 55% off our best deal!</p>
<Link to=""><button className="duration-300 btn hover:border-2 hover:border-gray-400 text-white hover:bg-black">Shop now</button></Link>
</div>

</div>

  </div>


  <div id="slide3" className="carousel-item relative w-full">
    
  <div>{/*Image container*/}
    
    <img className="object-cover w-full" src="/shoesB.png" alt="hike image" />

    <div className="md:p-5 p-2 absolute bottom-0 md:bottom-16 ">{/*Text container*/}
<h2 className="font-bold text-md md:text-4xl">Fly x</h2>
<p className="font-bold text-[0.6rem] md:text-sm lg:text-lg">Best premium deal!</p>
<Link to=""><button className="duration-300 btn hover:border-2 hover:border-gray-400 ">Shop now</button></Link>
</div>

</div>

  </div>


  
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#slide1" className="btn btn-xs">1</a>
  <a href="#slide2" className="btn btn-xs">2</a>
  <a href="#slide3" className="btn btn-xs">3</a>
</div>
        </div>
        </>
    );
};

export default Home;