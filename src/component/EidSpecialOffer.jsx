import { Gift } from 'lucide-react'; // Optional icon

const EidSpecialOffer = () => {
  return (
    <div className="bg-green-100 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4 my-6">
      <div className="flex items-center gap-3">
        <Gift className="text-green-700 w-8 h-8" />
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-green-800">
            🎉 Eid Special Offer!
          </h2>
          <p className="text-green-700">
            Get up to <span className="font-semibold">25% OFF</span> on all PC components this Eid.
          </p>
        </div>
      </div>
      <a
        href="https://www.asus.com/eg-en/deals/all-deals/" target='_blank'
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition"
      >
        Shop Now
      </a>
    </div>
  );
};

export default EidSpecialOffer;
