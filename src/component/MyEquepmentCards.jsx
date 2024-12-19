import { useState } from "react";
import MyEquepmentTable from "./MyEquepmentTable";

const MyEquepmentCard = ({ data: initialData }) => {

    const [data, setData] = useState(initialData);

    const handleDeleteFromUI = (id) => {
        setData(data.filter((item) => item._id !== id));
    };

    return (
        <>
            <div className="md:flex flex-wrap items-center justify-center gap-5">
    <div className="overflow-x-auto">
    <table className="table">
     {/* Table Head */}
           <thead>
            <tr>
             <th></th>
             <th>Item Name</th>
             <th>Category</th>
             <th>Price</th>
             <th></th>
         </tr>
</thead>
<tbody>
        {data.map((item) => (
            <MyEquepmentTable
                key={item._id}
                data={item}
                onDelete={handleDeleteFromUI}
            />
        ))}
   </tbody>
</table>
</div>
</div>
        </>
    );
};

export default MyEquepmentCard;
