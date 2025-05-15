import { useLoaderData } from "react-router-dom";
import MyeqErr from "./MyeqErr";
import Loding from "./Loding";
import MyEquepmentCard from "../component/MyEquepmentCards";

const Myequipment = () => {
  const data = useLoaderData();

  if (!data || data.length === 0) {
    return <MyeqErr />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      {!data.length ? <Loding /> : <MyEquepmentCard data={data} />}
    </div>
  );
};

export default Myequipment;
