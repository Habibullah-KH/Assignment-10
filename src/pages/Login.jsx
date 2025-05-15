import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import {
  AiTwotoneEye,
  AiTwotoneEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const Login = () => {
  const [showHide, setShowHide] = useState(false);
  const { logInUser, setUser, createUserByGoogl } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((userData) => {
        if (userData.user) {
          Swal.fire({
            title: "Login success",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Close",
          });
        }

        const data = userData.user;
        setUser(data);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        Swal.fire({
          title: err.code,
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Close",
        });
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
    <div
      className="min-h-screen flex items-center justify-center bg-white text-black"
      
    >
      {/* Semi-transparent login form */}
      <div className="w-full max-w-md text-black border rounded-xl shadow-lg p-8 space-y-4">
        {/* Home button */}
        <button
          onClick={() => navigate("/")}
          className="text-sm font-semibold text-red-500 hover:text-black flex items-center gap-1"
          title="Go to home"
        >
          <AiOutlineArrowLeft /> Home
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Log in
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email input */}
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

          {/* Password input */}
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
            <label className="label mt-2">
              <a
                href="#"
                className="label-text-alt text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control">
            <button className="btn w-full bg-blue-600 text-white hover:bg-blue-700">
              Log In
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

          {/* Redirect to Signin */}
          <p className="text-center text-gray-700 text-sm">
            Don&apos;t have an account?{" "}
            <NavLink to="/signin" className="text-blue-600 hover:underline">
              Sign up now
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
