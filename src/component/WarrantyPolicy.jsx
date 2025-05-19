const WarrantyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-2xl my-36">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Warranty Policy</h2>
      <p className="mb-4 text-gray-700">
        At <span className="font-semibold text-gray-900">Your PC Shop</span>, we stand behind the quality of our components. Below are the details of our warranty policy:
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Warranty Period:</strong> All components come with a standard warranty of 1 to 3 years depending on the brand and product type.
        </li>
        <li>
          <strong>Proof of Purchase:</strong> A valid invoice must be presented to claim warranty services.
        </li>
        <li>
          <strong>Warranty Type:</strong> Manufacturer warranty only. We act as a bridge to help you claim the warranty smoothly.
        </li>
        <li>
          <strong>What&#39;s Covered:</strong> Manufacturing defects, non-functioning parts, and hardware failures under normal usage.
        </li>
        <li>
          <strong>What&#39;s Not Covered:</strong> Physical damage, burns, liquid damage, and unauthorized modifications or repairs.
        </li>
        <li>
          <strong>Claim Time:</strong> Warranty claim processing may take 7–30 business days depending on the manufacturer.
        </li>
      </ul>

      <p className="mt-6 text-gray-600">
        If you have any questions or need help with a warranty claim, feel free to contact our support team.
      </p>
    </div>
  );
};

export default WarrantyPolicy;
