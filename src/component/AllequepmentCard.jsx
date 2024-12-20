const AllequepmentCard = ({data}) => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;
    return (
        <>
             <div className="card bg-base-100 max-h-[500px] w-96 shadow-xl border text-center">
  <figure>
    <img
      className="h-64"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title text-center">{itemName}</h2>
    <p>{description}</p>
    <p><span className="font-semibold">Price:</span>{price}</p>
    <p><span className="font-semibold">Rating:</span>{rating}</p>
    <div className="card-actions justify-end">
      <a href='https://rog.asus.com/' target="blank"><button className="btn">Buy Now</button></a>
    </div>
  </div>
</div>
        </>
    );
};

export default AllequepmentCard;