import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquepment = () => {
    const {user} = useContext(AuthContext);
    const categoryRef = useRef(null);
    const ratingRef = useRef(null);
    const processRef = useRef(null);
    const customizeRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
      const form = new FormData(e.target);
    const email = form.get('email');
    const name = form.get('name');
    const itemName = form.get('item');
    const image = form.get('image');
    const stockStatus = parseInt(form.get('Stock'));

    const categoryName = categoryRef.current.value;
    const rating = parseFloat(ratingRef.current.value);
    const processingTime = parseFloat(processRef.current.value);
    const customization = customizeRef.current.value;

    const description = form.get('description');
    const price = parseFloat(form.get('price')); 
    
    const urlRegex = /^https?:\/\/.*$/i;

    const Newequepment = {email, name, itemName, image, description, price, categoryName, rating, processingTime, stockStatus, customization};
    if (!urlRegex.test(image)) {
        Swal.fire({
            title: 'Please provide a valid image link',
            text: "Please enter a valid image link (must start with https://)! If you don't know how to submit an image, press the info button.",
            icon: 'error',
            confirmButtonText: 'Close',
            showCancelButton: true,
            cancelButtonText: 'Info',
          }).then((result) => {
            if (result.isConfirmed) {
              // console.log("Close button clicked");
            } else if (result.isDismissed) {
              // console.log("Info button clicked");
              window.open('https://www.google.com/search?q=image+hosting+sites+like+imgur&oq=image+host&gs_lcrp=EgZjaHJvbWUqBwgDEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg90gEIODAyM2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8', '_blank');
            }
      })
        return;
      }

      if(price < 0 || price === 0){
        Swal.fire({
            title: 'Please provide a valid price',
            icon: 'error',
            confirmButtonText: 'Close',
      })
        return;
      }

    if (isNaN(stockStatus) || stockStatus <= 0) {
    Swal.fire({
        title: 'Invalid Stock',
        text: 'Stock must be a positive number.',
        icon: 'error',
        confirmButtonText: 'Close'
    });
    return;
}
// console.log(Newequepment);

//* send data to backend

    fetch('https://ph-10-as-server-three.vercel.app/equipment', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Newequepment)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            Swal.fire({
              title: 'submit success',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Close'
            })
        }
    })
    .catch(err => console.log('what is this', err));


} //!handleSubmit function end


    return (
        <>
        <div className="grid justify-items-center my-10">
            <h2 className="text-xl md:text-2xl font-black mb-10 text-center">Add your favourite equepment</h2>

            <div className="border-2 rounded-3xl bg-[url('/doodle.png')] shadow-xl md:w-2/4 p-5">

            {/* Form start */}
            <form 
            onSubmit={handleSubmit}
            className="
            card-body backdrop-blur-xl rounded-2xl 
            lg:grid lg:grid-cols-2 md:w-full
            ">

{/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Your email</span>
          </label>
          <input name="email" type="email" value={user.email} className="input input-bordered" readOnly />
        </div>

{/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Name</span>
          </label>
          <input name="name" type="text"  value={user.displayName} className="input input-bordered" readOnly />
        </div>


{/* item name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Item Name</span>
          </label>
          <input name="item" type="text" placeholder="Item Name" className="input input-bordered" required />
        </div>


{/* item image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Image link</span>
          </label>
          <input name="image" type="text" placeholder="Item Name" className="input input-bordered" required />
          </div>

{/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Description</span>
          </label>
          <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
        </div>

{/* Stock Status */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Stock</span>
          </label>
          <input name="Stock" type="number" placeholder="Stock Status" className="input input-bordered" required />
        </div>

{/* category name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Category Name</span>
          </label>

 <select

ref={categoryRef}
    className="text-black py-3 rounded-lg"
>
    <option value="Laptop">Laptop</option>
    <option value="Desktop">Desktop</option>
    <option value="Camera">Camera</option>
    <option value="Monitor">Monitor</option>
    <option value="Keyboard">Keyboard</option>
    <option value="Mouse">Mouse</option>
    <option value="Headset">Headset</option>
    <option value="Chair">Chair</option>
</select>
        </div>



{/* Rating */}
<div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl ">Rating</span>
          </label>

<select

ref={ratingRef}
    className="text-black py-3  rounded-lg text-center"
>
  <option value="5">5</option>
  <option value="4.5">4.5</option>
  <option value="4">4</option>
  <option value="3.8">3.8</option>
  <option value="3.5">3.5</option>
  <option value="3">3</option>
  <option value="2">2</option>
  <option value="1">1</option>
</select>
</div>



{/* Processing Time */}
<div className="form-control relative">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl ">Processing Time</span>
          </label>

<select

ref={processRef}
    className="text-black py-3  rounded-lg text-center"
>
  <option value="5">5</option>
  <option value="7">7</option>
  <option value="15">15</option>
  <option value="30">30</option>
  <option value="45">45</option>
</select>
  <span className="absolute right-5 top-[74%] text-sm transform -translate-y-1/2 text-gray-500 font-bold pointer-events-none">
      Days
    </span>
</div>



{/* customize */}
<div className="form-control relative">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl ">Customize item</span>
          </label>

<select

ref={customizeRef}
    className="text-black py-3  rounded-lg text-center"

  
>
  <option value="Extra 2x ram">Extra 2x ram</option>
  <option value="Extra 1set keycap">Extra 1set keycap</option>
  <option value="Mouse Pad">Mouse Pad</option>
  <option value="No customizetion">No customizetion</option>
</select>

</div>




{/* Price */}
<div className="form-control relative">
  <label className="label">
    <span className="label-text text-md text-black font-bold md:text-xl">Price</span>
  </label>
  <div className="relative">
    <input 
      name="price" 
      type="number" 
      placeholder="Price" 
      className="input input-bordered w-full pr-8" 
      required 
    />
    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold pointer-events-none">
      $
    </span>
  </div>
</div>


{/*submit*/}
<div className="col-span-2">
    <input type="submit" className="btn"/>
</div>

      </form>
            </div>
        </div>
        </>
    );
};

export default AddEquepment;