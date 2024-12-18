import Loding from "../pages/Loding";
import Card from "./Card";
import PropTypes from 'prop-types';  
const CardContainer = ({datas}) => {
    return (
        <>
        <div className="flex flex-wrap justify-center gap-3 my-20">
            {
              datas.length===0?<Loding/> :datas.map((data, i)=> {return <Card key={i} data={data}/>})
            }
        </div>
        </>
    );
};
CardContainer.propTypes = {  
    datas: PropTypes.array.isRequired,  
};
export default CardContainer;