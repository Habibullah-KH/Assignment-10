import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquepment = () => {
    const {user} = useContext(AuthContext);

    const categoryRef = useRef(null);
    const ratingRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
      const form = new FormData(e.target);
    const email = form.get('email');
    const name = form.get('name');
    const item = form.get('item');
    const image = form.get('image');

    const category = categoryRef.current.value;
    const rating = parseFloat(ratingRef.current.value);

    const description = form.get('description');
    const price = parseFloat(form.get('price')); 
    
    const urlRegex = /^https?:\/\/.*$/i;

    const Newequepment = {email, name, item, image, description, price, category, rating};
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
              console.log("Close button clicked");
            } else if (result.isDismissed) {
              console.log("Info button clicked");
              window.open('https://www.google.com/search?q=image+hosting+sites+like+imgur&oq=image+host&gs_lcrp=EgZjaHJvbWUqBwgDEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg90gEIODAyM2owajSoAgCwAgA&sourceid=chrome&ie=UTF-8', '_blank');
            }
      })
        return;
      }
console.log(Newequepment);

//* send data to backend

    fetch('http://localhost:8000/equipment', {
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
              title: 'Login success',
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
          <input name="image" type="text" placeholder="Item Name" className="input input-bordered" />
        </div>

{/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Description</span>
          </label>
          <input name="description" type="text" placeholder="Description" className="input input-bordered" required />
        </div>

{/* categoryy name */}
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

{/* Price */}
<div className="form-control">
          <label className="label">
            <span className="label-text text-md text-black font-bold md:text-xl">Price</span>
          </label>
          <input name="price" type="number" placeholder="Price" className="input input-bordered" required />
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