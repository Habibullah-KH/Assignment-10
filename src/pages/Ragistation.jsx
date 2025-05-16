import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import {
  AiTwotoneEye,
  AiTwotoneEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const Ragistation = () => {
  const [showHide, setShowHide] = useState(false);
  const navigate = useNavigate();
  const { createUser, setUser, updateUser, createUserByGoogl } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("img");

    const ValidPass = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!ValidPass.test(password)) {
      Swal.fire({
        title: "Password must include uppercase and lowercase letters",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }
    if (password.length < 6) {
      Swal.fire({
        title: "Password must be at least 6 characters",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    }

    createUser(email, password)
      .then((userData) => {
        if (userData.user) {
          Swal.fire({
            title: "Signup success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Close",
          });
          updateUser({ displayName: name, photoURL: image });
        }
        setUser(userData.user);
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Close",
        });
        console.log(err.code, err);
      });
  };

    const handleGoogleLogin = () => {
    createUserByGoogl()
      .then((result) => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          title: "Login Success",
          icon: "success",
          confirmButtonText: "Close",
        });

        // Redirect to intended route or home
        navigate(location?.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: error.code,
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="w-full max-w-md text-black border rounded-xl shadow-lg p-8 space-y-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-semibold text-red-500 hover:text-black flex items-center gap-1"
          title="Go to home"
        >
          <AiOutlineArrowLeft /> Home
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-800">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label-text font-semibold mb-1 text-black">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          {/* Image */}
          <div className="form-control">
            <label className="label-text font-semibold mb-1 text-black">Picture URL</label>
            <input
              name="img"
              type="text"
              placeholder="Enter profile picture URL"
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label-text font-semibold mb-1 text-black">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-white text-black"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label-text font-semibold mb-1 text-black">Password</label>
            <input
              name="password"
              type={showHide ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full bg-white text-black"
              required
            />
            <span
              className="absolute top-9 right-3 cursor-pointer text-xl text-gray-600"
              onClick={() => setShowHide(!showHide)}
            >
              {showHide ? <AiTwotoneEyeInvisible /> : <AiTwotoneEye />}
            </span>
          </div>

          {/* Submit */}
          <div className="form-control">
            <button className="btn w-full bg-blue-600 text-black hover:text-white hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Google Button */}
          <div className="form-control">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn w-full border-gray-300 flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-xl text-black" /> Continue with Google
            </button>
          </div>

          {/* Already have account */}
          <p className="text-center text-gray-700 text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Log in now
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Ragistation;
