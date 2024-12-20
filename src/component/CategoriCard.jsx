const CategoriCard = ({data}) => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;
    return (
        <>
  <div className="card min-h-[600px] bg-white text-black w-96 shadow-2xl text-center">
  <figure>
    <img
      className="h-64"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body text-left">
    <h2 className="card-title text-center">{itemName}</h2>
    <p>{description}</p>
    <p>Price: {price}</p>
    <p>Rating: {rating}</p>
    <div className="card-actions justify-end">
      <a href='https://rog.asus.com/' target="blank"><button className="btn text-black">Buy Now</button></a>
    </div>
  </div>
</div>
        </>
    );
};

export default CategoriCard;