import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquepmentTable = ({ data, onDelete }) => {
  const { price, categoryName, itemName, image, _id } = data || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1d4ed8",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_url}/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              onDelete && onDelete(id);
            } else {
              Swal.fire("Failed", "Could not delete item.", "error");
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong!", "error");
          });
      }
    });
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      <td></td>

      <td>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded overflow-hidden">
            <img
              src={image}
              alt={itemName}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-800">{itemName}</p>
          </div>
        </div>
      </td>

      <td className="text-gray-600">{categoryName}</td>
      <td className="text-gray-700 font-medium">${price}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link to={`/user/${_id}`}>
            <button className="btn btn-sm btn-outline text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
              Details
            </button>
          </Link>

          <Link to={`/updateEquepment/${_id}`}>
            <button className="p-2 rounded hover:bg-gray-200 text-blue-600">
              <AiOutlineEdit size={18} />
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="p-2 rounded hover:bg-red-100 text-red-500"
          >
            <MdDeleteForever size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyEquepmentTable;
