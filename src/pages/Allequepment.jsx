import { useContext, useEffect, useState } from "react";
import AllequepmentCard from "../component/AllequepmentCard";
import Loding from "./Loding";
import { AuthContext } from "../provider/AuthProvider";

const Allequepment = () => {
    const [data, setData] = useState([]);

    const {user} = useContext(AuthContext);
    
  useEffect(() => {
    const fetchData = async () => {
        try {
            const userEmail = user?.email || '';
            const response = await fetch(`http://localhost:8000/allequipment?user=${userEmail}`);
            const data = await response.json();
            setData(data);
          } catch (error) {
            console.error("Error fetching equipment data:", error);
          }
        };
        
        fetchData();
      }, [user]);

    if (data.length === 0) {
        return <Loding />;
    }

    return (
        <>
        <div className="text-center my-10">

            <h2 className="my-5 font-semibold text-xl md:text-3xl">All equepment</h2>

        <div className="flex flex-wrap gap-5 items-center justify-center">
            {data.map((item, index) => (
                <AllequepmentCard key={index} data={item} />
            ))}
        </div>
        </div>
        </>
    );
};

export default Allequepment;
