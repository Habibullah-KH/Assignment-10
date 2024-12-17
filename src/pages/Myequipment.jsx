import { useLoaderData } from "react-router-dom";

import CardMyEquepment from "../component/CardMyEquepment";
import MyeqErr from "./MyeqErr";

const Myequipment = () => {
const data = useLoaderData();
if(data.length === 0){
    return <MyeqErr/>;
}
    return (
        <>
   {
     data.map((data, i)=> {<CardMyEquepment key={i} data={data}/>})
   }

        </>
    
)
};
export default Myequipment;