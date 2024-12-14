import { useState } from "react";
import { Navigate } from "react-router-dom";
const DreamSetup = () => {
    const [selectedOption, setSelectedOption] = useState("All");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);

            // Navigate to the route based on the selected option
            Navigate(`/category/${selectedOption.toLowerCase()}`);
    };

    return (
        <>
                <div className="my-44">{/*main container*/}
          <h3 className="p-3 text-red-700">DREAM SETUP</h3>
          <div className="flex flex-col items-center bg-gray-900 text-white rounded-t-2xl text-center">{/*parent*/}
            <div className="my-5"> {/*text container*/}
            <h2 className="font-bold text-xl md:text-3xl">COMPLETE YOUR DREAM SETUP</h2>
            <p className="text-sm md:text-md">Choose the monitor and peripherals that match your playstyle.</p>
            </div>

            <div>{/*image container*/}
              <img  className="rounded-[1rem] text-center" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/campaign/alienware/gaming/awm16-r2-aw2725df-aw420k-aw720m-aw920h-dreamdesk-scorpio-frontfacing-4320x1638.jpg?fmt=png-alpha&wid=4320&hei=1638" alt="dream desktop"/>
            </div>

{/* filter buttons */}
 <div className="w-full my-10 flex flex-col justify-start p-2">


<h2 className="text-left">Filter by category</h2>
<select
    className="text-black py-3 max-w-52"
    onChange={handleChange}
    value={selectedOption}
>
    <option value="All">All</option>
    <option value="Laptop">Laptop</option>
    <option value="Laptop">Desktop</option>
    <option value="Laptop">Camera</option>
    <option value="Laptop">Monitor</option>
    <option value="Keyboard">keyboard</option>
    <option value="Mouse">mouse</option>
    <option value="Headset">Headset</option>
    <option value="Chair">Chair</option>
</select>

</div>      
{/* filter radio buttons END*/}

          </div>{/*parent end*/}
        </div>{/*main container end*/}
        </>
    );
};

export default DreamSetup;