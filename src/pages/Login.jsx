import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showHide, setShowHide]=useState(false);
  const {logInUser, setUser, createUserByGoogl} = useContext(AuthContext);
const location = useLocation();
const naviget = useNavigate();
console.log(location);

  const handleLogin = (e) => { 
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email);

    logInUser(email, password)
    .then((userData)=>{

      if(userData.user){
        Swal.fire({
          title: 'Login success',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }

      const data = userData.user
      setUser(data)
      naviget(location?.state ? location.state : "/");
      console.log(data);
    })

    .catch((err)=>{
      const errorCode = err.code;
      Swal.fire({
        title: errorCode,
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Close'
      })
      console.log(errorCode);
    })
   };


    return (
        <>
  <div className="hero bg-clr-bg min-h-screen ">
  <div className="hero-content flex-col lg:flex-row bg-white bg-[url('/doodle.png')]  border-2 rounded-3xl shadow-xl">
    <div className="text-center lg:text-left  backdrop-blur-lg shadow-xl rounded-2xl p-5">
      <h1 className="text-2xl md:text-5xl font-bold w-full text-white">Log in now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 ">


{/* input start */}
      <form onSubmit={handleLogin}
       className="card-body bg-clr-bg">
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
        <div className="form-control relative">

        <label className="label ">
            <span className="label-text">Password</span>
            <span className="absolute right-0 top-12 p-1 bg-white rounded-xl cursor-pointer" onClick={()=>setShowHide(!showHide)}>{showHide?<AiTwotoneEye />:<AiTwotoneEyeInvisible />}</span>
          </label>

          <input
          name="password"
           type={showHide?'text':'password'}
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
          <button onClick={createUserByGoogl} className="btn border-2 hover:border-red-400 shadow-xl"> <FcGoogle/> Continue with google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;