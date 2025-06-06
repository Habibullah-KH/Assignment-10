import Loading from "../pages/Loding";
import Card from "./Card";
import PropTypes from 'prop-types';
import { Fade } from "react-awesome-reveal";  
import NotFound from "./NotFound";
const CardContainer = ({datas}) => {
    if (!Array.isArray(datas)) {
        return <div className="text-red-500 text-center">
        <NotFound/>
        </div>;
    }
    return (
        <>
        <div className="flex flex-wrap justify-center gap-3 my-20">
        <Fade delay={50} cascade damping={0.1}>
            {
              datas.length === 0 ? <Loading/> : datas?.map((data, i)=> {return <Card key={i} data={data}/>})
            }
        </Fade>
        </div>
        </>
    );
};
CardContainer.propTypes = {  
    datas: PropTypes.array.isRequired,  
};
export default CardContainer;