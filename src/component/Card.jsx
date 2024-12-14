import { Link } from "react-router-dom";

const Card = ({data}) => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;

    return (
        <>
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      className="h-64"
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

export default Card;