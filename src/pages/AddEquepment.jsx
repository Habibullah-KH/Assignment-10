import { useContext, useRef } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquepment = () => {
  const { user } = useContext(AuthContext);
  const categoryRef = useRef(null);
  const ratingRef = useRef(null);
  const processRef = useRef(null);
  const customizeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name");
    const itemName = form.get("item");
    const image = form.get("image");
    const stockStatus = parseInt(form.get("Stock"));

    const categoryName = categoryRef.current.value;
    const rating = parseFloat(ratingRef.current.value);
    const processingTime = parseFloat(processRef.current.value);
    const customization = customizeRef.current.value;

    const description = form.get("description");
    const price = parseFloat(form.get("price"));

    const urlRegex = /^https?:\/\/.*$/i;

    const Newequepment = {
      email,
      name,
      itemName,
      image,
      description,
      price,
      categoryName,
      rating,
      processingTime,
      stockStatus,
      customization,
    };

    if (!urlRegex.test(image)) {
      Swal.fire({
        title: "Please provide a valid image link",
        text: "The image link must start with https://",
        icon: "error",
        confirmButtonText: "Close",
        showCancelButton: true,
        cancelButtonText: "Info",
      }).then((result) => {
        if (result.isDismissed) {
          window.open(
            "https://www.google.com/search?q=image+hosting+sites+like+imgur",
            "_blank"
          );
        }
      });
      return;
    }

    if (price <= 0) {
      Swal.fire({
        title: "Please provide a valid price",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    if (isNaN(stockStatus) || stockStatus <= 0) {
      Swal.fire({
        title: "Invalid Stock",
        text: "Stock must be a positive number.",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    fetch(`${import.meta.env.VITE_SERVER_url}/equipment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Newequepment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Submit Success",
            text: "Do you want to continue?",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <div className="grid justify-items-center my-10">
      <h2 className="text-2xl font-bold mb-10 text-center text-black">
        Add Your Favourite Equipment
      </h2>

      <div className="border-2 rounded-3xl shadow-xl md:w-2/4 p-6 bg-white">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Email */}
          <div className="form-control">
            <label className="label font-semibold text-black">Your email</label>
            <input
              name="email"
              type="email"
              value={user.email}
              className="input input-bordered bg-white text-black"
              readOnly
            />
          </div>

          {/* Name */}
          <div className="form-control">
            <label className="label font-semibold text-black">Name</label>
            <input
              name="name"
              type="text"
              value={user.displayName}
              className="input input-bordered bg-white text-black"
              readOnly
            />
          </div>

          {/* Item Name */}
          <div className="form-control">
            <label className="label font-semibold text-black">Item Name</label>
            <input
              name="item"
              type="text"
              placeholder="Item Name"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          {/* Image */}
          <div className="form-control">
            <label className="label font-semibold text-black">Image Link</label>
            <input
              name="image"
              type="text"
              placeholder="https://..."
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-semibold text-black">Description</label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          {/* Stock */}
          <div className="form-control">
            <label className="label font-semibold text-black">Stock</label>
            <input
              name="Stock"
              type="number"
              placeholder="Stock Status"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold text-black">Category</label>
            <select ref={categoryRef} className="select select-bordered bg-white text-black">
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
            <label className="label font-semibold text-black">Rating</label>
            <select ref={ratingRef} className="select select-bordered bg-white text-black">
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
          <div className="form-control">
            <label className="label font-semibold text-black">Processing Time (Days)</label>
            <select ref={processRef} className="select select-bordered bg-white text-black">
              <option value="5">5</option>
              <option value="7">7</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
          </div>

          {/* Customize */}
          <div className="form-control">
            <label className="label font-semibold text-black">Customize Item</label>
            <select ref={customizeRef} className="select select-bordered bg-white text-black">
              <option value="Extra 2x ram">Extra 2x RAM</option>
              <option value="Extra 1set keycap">Extra 1 Set Keycap</option>
              <option value="Mouse Pad">Mouse Pad</option>
              <option value="No customizetion">No Customization</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label font-semibold text-black">Price ($)</label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white text-black"
              required
            />
          </div>

          {/* Submit */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <input
              type="submit"
              value="Submit Equipment"
              className="btn btn-primary w-full text-black"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquepment;
