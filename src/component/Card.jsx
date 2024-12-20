import { Link } from "react-router-dom";

const Card = ({data}) => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;

    return (
        <>
        <div className="card border min-h-[500px] w-96 shadow-xl">
  <figure>
    <img
    className="h-64"
      src={image}
      alt="photo" />
  </figure>
  <div className="card-body text-center">
    <h2 className="card-title text-center">{itemName}</h2>
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