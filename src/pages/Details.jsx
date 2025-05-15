import { IoMdStar } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const {
    stockStatus,
    customization,
    processingTime,
    rating,
    price,
    description,
    categoryName,
    itemName,
    image,
  } = useLoaderData();

  return (
    <div className="my-20 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt={itemName}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-6 md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{itemName}</h2>
          <p className="text-gray-600">{description}</p>

          <div className="text-sm text-gray-700 space-y-1">
            <p><span className="font-semibold">Category:</span> {categoryName}</p>
            <p className="flex items-center gap-1">
              <span className="font-semibold">Rating:</span> {rating} <IoMdStar className="text-yellow-400" />
            </p>
            <p><span className="font-semibold">Price:</span> ${price}</p>
            <p><span className="font-semibold">Customization:</span> {customization}</p>
            <p><span className="font-semibold">Processing Time:</span> {processingTime}</p>
            <p><span className="font-semibold">Stock Status:</span> {stockStatus}</p>
          </div>

          <Link to={'https://rog.asus.com'}>
          <button className="mt-4 btn btn-primary w-full md:w-auto">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
