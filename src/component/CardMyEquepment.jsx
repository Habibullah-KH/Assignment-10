import { Link } from "react-router-dom";

const CardMyEquepment = ({data}) => {
    console.log(data);
const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data || {};

    return (
        <>
      <tr>
        <th>
        </th>
        <td>
          <div className="md:flex items-center gap-3">
            <div  className="overflow-x-auto">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="prodouct" />
              </div>
            </div>
            <div>
              <div className="font-bold">{itemName}</div>
            </div>
          </div>
        </td>
        <td>
        {categoryName}
        </td>
        <td>{price}</td>
        <th>
      <Link to={`/user/${_id}`}>
      <button className="btn btn-ghost btn-xs">Learn more</button>
      </Link>
        </th>
      </tr>
        </>
    );
};

export default CardMyEquepment;