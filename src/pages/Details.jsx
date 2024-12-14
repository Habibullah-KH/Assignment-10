import { useLoaderData } from "react-router-dom";

const Details = () => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id} = useLoaderData();
    console.log(stockStatus);
    return (
        <>
        <div className="flex flex-col items-center my-20">

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
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Details;