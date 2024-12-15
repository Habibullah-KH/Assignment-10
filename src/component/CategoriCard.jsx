const CategoriCard = ({data}) => {
    const {stockStatus, customization, processingTime, rating, price, description, categoryName, itemName, image, _id}=data;
    return (
        <>
  <div className="card bg-base-100 max-w-96 shadow-xl text-black">
  <figure>
    <img
      className="h-64"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <a href='https://rog.asus.com/' target="blank"><button className="btn">Buy Now</button></a>
    </div>
  </div>
</div>
        </>
    );
};

export default CategoriCard;