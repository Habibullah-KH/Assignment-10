import { useLoaderData } from "react-router-dom";

import MyeqErr from "./MyeqErr";
import Loding from "./Loding";
import MyEquepmentCards from "../component/MyEquepmentCards";

const Myequipment = () => {
const data = useLoaderData();
console.log(data);
if(data.length === 0){
    return <MyeqErr/>;
}
    return (
        <>
        <div>
        {
            data.length === 0 ? <Loding/> : <MyEquepmentCards data={data}/>
        }
        </div>


        </>
    
)
};
export default Myequipment;