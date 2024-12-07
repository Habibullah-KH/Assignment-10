import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
  <div className="hero bg-clr-bg min-h-screen ">
  <div className="hero-content flex-col lg:flex-row bg-white bg-[url('/Hero-bg.png')] bg-opacity-45 border-2 rounded-3xl">
    <div className="text-center lg:text-left  backdrop-blur-sm shadow-sm rounded-2xl p-5">
      <h1 className="text-2xl md:text-5xl font-bold w-full ">Log in now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 ">


{/* input start */}
      <form className="card-body bg-clr-bg">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
          name="email"
           type="email"
            placeholder="email"
             className="input input-bordered"
              required />
              
        </div>
        {/* input end */}


{/* input start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
          name="password"
           type="password"
            placeholder="password"
             className="input input-bordered"
              required />


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

          <p>Don&apos;t have an account! 
            <NavLink to="/signin" className="list mx-2">Signin now</NavLink>
          </p>
        </div>
{/* input end */}


        <div className="form-control mt-6">
          <button className="btn border-2 shadow-xl">Login in</button>
        </div>

        <div className="form-control mt-6">
          <button className="btn border-2 hover:border-red-400 shadow-xl"> <FcGoogle/> Sign in with google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;