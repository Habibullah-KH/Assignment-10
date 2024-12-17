const Offer = () => {
    return (
        <>
        <div className="bg-gray-500 py-10 rounded-b-2xl">
            <div>
                <h2 className="pl-2 text-white text-xl md:text-2xl">EXCLUSIVE GAMING DEVICES OFFERS</h2>
            </div>

            <div className="grid grid-cols-2 justify-center gap-5 mt-20 text-white md:m-3">
<div className="rounded-2xl bg-black shadow-xl col-span-2 md:col-span-1">
  <div>
    <img
    className="rounded-2xl max-h-72 m-auto"
      src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/campaign/alienware/gaming/awx16-aw720h-00230-1080x600.jpg?fmt=png-alpha&wid=1080&hei=600"
      alt="Movie" />
  </div>
  <div className="card-body">
    <h2 className="card-title">EXPAND YOUR GAMING OPTIONS</h2>
    <p className="text-sm">Everyday financing offers with Pay Credit. The easy way to get the tech you want.</p>
    <div className="card-actions justify-end">
      <a href="https://www.dell.com/en-us/gaming/alienware"><button className="btn text-white hover:text-black">GET FINANCING</button></a>
    </div>
  </div>
</div>

<div className="rounded-2xl bg-black shadow-xl col-span-2 md:col-span-1">
  <div>
    <img
    className="rounded-2xl max-h-72  m-auto"
      src="https://dlcdnwebimgs.asus.com/gain/411B0A56-4584-484B-9EC1-DDC8F817639E/w750/h470"
      alt="Movie" />
  </div>
  <div className="card-body">
    <h2 className="card-title">LIMITLESS IS NOW WITHIN REACH</h2>
    <p className="text-sm">Shop next-level gaming for less, with the latest deals on Alienware PCs.</p>
    <div className="card-actions justify-end">
      <a href="https://rog.asus.com/"><button className="btn text-white hover:text-black">Best Desktop deals</button></a>
    </div>
  </div>
</div>
            </div>
        </div>
        </>
    );
};

export default Offer;