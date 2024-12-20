import { IoMdStar } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id} = useLoaderData();

    return (
        <>
        <div className="flex flex-col items-center my-20">

<div className="card bg-base-100 w-96 min-h-[600px] shadow-xl">
  <figure>
    <img
      className="h-64"
      src={image}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{description}</p>
    <p>
    <span className="font-bold">Category:</span> {categoryName}</p>

    <p className="flex items-baseline">
    <span className="font-bold">Rating:</span>{rating}<IoMdStar /></p>

    <p>
    <span className="font-bold">Price:</span>{price}</p>

    <p>
    <span className="font-bold">customization:</span>{customization}</p>

    <p>
    <span className="font-bold">processing:</span>{processingTime}</p>

    <p>
    <span className="font-bold">stock:</span>{stockStatus}</p>

    <p>
    <span className="font-bold">Price:</span>{price}</p>

    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Details;