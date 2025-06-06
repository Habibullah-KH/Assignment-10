import { useLoaderData } from "react-router-dom";
import MyeqErr from "./MyeqErr";
import Loading from "./Loding";
import MyEquepmentCard from "../component/MyEquepmentCards";
import NotFound from "../component/NotFound";

const Myequipment = () => {
  const data = useLoaderData();
if (!(data)) {
        return <div className="text-red-500 text-center">
        <NotFound/>
        </div>;
    }
  if (!data || data.length === 0) {
    return <MyeqErr />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      {!data.length ? <Loading /> : <MyEquepmentCard data={data} />}
    </div>
  );
};

export default Myequipment;
