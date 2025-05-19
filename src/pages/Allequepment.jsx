import { useContext, useEffect, useState } from "react";
import AllequepmentCard from "../component/AllequepmentCard";
import Loading from "./Loding";
import { AuthContext } from "../provider/AuthProvider";
import ".././component/buttons/button.css"
import NotFound from "../component/NotFound";
const Allequepment = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = user?.email || '';
        const response = await fetch(`${import.meta.env.VITE_SERVER_url}/allequipment?user=${userEmail}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };
    
    fetchData();
  }, [user]);

  const sortData = (data, order) => {
    return data.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      }  else {
        return b.price - a.price;
      }
    });
  };
if (!Array.isArray(data)) {
        return <div className="text-red-500 text-center">
        <NotFound/>
        </div>;
    }
  const handleSortClick = () => {
    setSortOrder('asc');
    // setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  if (data.length === 0) {
    return <Loading />;
  }

  const sortedData = sortData([...data], sortOrder);

  return (
    <>
      <div className="text-center my-10">
        <h2 className="my-5 font-semibold text-xl md:text-3xl">All Equipment</h2>

        {/* Sort button */}
        <button 
          onClick={handleSortClick} 
          className="mt-6 px-6 py-3 my-button my-5 text-left"
        >
          Sort by Price
          {/* Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'} */}
        </button>

        <div className="flex flex-wrap gap-5 items-center justify-center">
          {sortedData.map((item, index) => (
            <AllequepmentCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Allequepment;
