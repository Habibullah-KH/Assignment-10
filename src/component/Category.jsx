import CategoriCard from "./CategoriCard";

const Category = ({data}) => {
    console.log(data);
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