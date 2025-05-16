import CategoriCard from "./CategoriCard";
import NotFound from "./NotFound";

const Category = ({data}) => {
    if (!Array.isArray(data)) {
        return <div className="text-red-500 text-center">
        <NotFound/>
        </div>;
    }
    return (
        <>
        <div className="flex flex-wrap items-center justify-center gap-5 ">
   {
       data.map((data, i)=> {return <CategoriCard key={i} data={data}/>})
   }
        </div>
   
        </>
    );
};

export default Category;