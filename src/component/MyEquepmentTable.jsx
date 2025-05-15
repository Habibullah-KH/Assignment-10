import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquepmentTable = ({ data, onDelete }) => {
  const { price, categoryName, itemName, image, _id } = data || {};

  const handleDelete = (id) => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`${import.meta.env.VITE_SERVER_url}/users/${id}`, {
                  method: "DELETE",
              })
  .then((res) => res.json())
  .then((data) => {
      if (data.deletedCount > 0) {
          Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
          });
          if (onDelete) onDelete(id);
      } else {
          Swal.fire({
              title: "Failed!",
              text: "Failed to delete the item.",
              icon: "error",
          });
      }
  })
  .catch((error) => {
      console.error("Error deleting item:", error);
      Swal.fire({
          title: "Error!",
          text: "An error occurred while deleting the item.",
          icon: "error",
      });
            });
          }
      });
  };
//* handledelete function end

  return (
      <tr>
          <th></th>
          <td>
              <div className="flex items-center gap-3">
                  <div className="overflow-x-auto">
                      <div className="mask mask-squircle h-12 w-12">
                          <img src={image} alt="product" />
                      </div>
                  </div>
                  <div>
                      <div className="font-bold">{itemName}</div>
                  </div>
              </div>
          </td>
          <td>{categoryName}</td>
          <td>{price}</td>
          <th className="flex">
              <Link to={`/user/${_id}`}>
                  <button className="btn btn-ghost btn-xs">Learn more</button>
              </Link>
              <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-ghost btn-xs text-xl text-red-400"
              >
                  <MdDeleteForever />
              </button>

<Link to={`/updateEquepment/${_id}`}>
              <button
              className="btn btn-ghost btn-xs text-xl">
                  <AiOutlineEdit />
              </button>
</Link>
          </th>
      </tr>
  );
};

export default MyEquepmentTable;
