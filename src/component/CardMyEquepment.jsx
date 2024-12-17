import { Link } from "react-router-dom";

const CardMyEquepment = ({data}) => {
    const {customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;
console.log(data);
    return (
        <>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/user/${_id}`}>
      <button className="btn border-2 border-black">Learn more</button>
      </Link>
    </div>
  </div>
</div>
        </>
    );
};

export default CardMyEquepment;