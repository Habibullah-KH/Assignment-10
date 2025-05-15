import { useState } from "react";
import MyEquepmentTable from "./MyEquepmentTable";

const MyEquepmentCard = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);

  const handleDeleteFromUI = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto overflow-x-auto">
      <div className="shadow-xl border border-gray-200 rounded-lg">
        <table className="table table-zebra w-full">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th>#</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <MyEquepmentTable
                  key={item._id}
                  data={item}
                  index={index}
                  onDelete={handleDeleteFromUI}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No equipment found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEquepmentCard;
