import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [signUp ,setSignUp] = useState(false);
    const handleSignUp = () =>{
        setSignUp(!signUp);
    }
  return (
    <div className="w-full h-screen bg-black bg-opacity-50 absolute z-20">
      <Header />
      <div className="absolute z-10">
        <div className="overflow-hidden">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            className=""
          />
        </div>
      </div>

      <div className="h-screen ">
        <form className="bg-black bg-opacity-75 w-[450px] px-16  py-10  mx-auto relative z-10 top-40">
          <h1 className="text-3xl text-white mb-6 font-medium">Sign In</h1>
         {signUp ?  (<div className="pb-5">
            <div className="bg-[#333] px-5 pt-4 pb-1 rounded-lg">
              <label for="" className="block text-[10px] text-gray-400">
                Enter Your Name
              </label>
              <input
                id=""
                type="text"
                placeholder="Username"
                className="w-full bg-transparent  focus:outline-none "
              />
            </div>
          </div>) : ""}
          <div className="pb-5">
            <div className="bg-[#333] px-5 pt-4 pb-1 rounded-lg">
              <label for="" className="block text-[10px] text-gray-400">
                Email or phone number
              </label>
              <input
                id=""
                type="text"
                placeholder="Email Address"
                className="w-full bg-transparent  focus:outline-none "
              />
            </div>
          </div>
          <div className="pb-5">
            <div className="bg-[#333] w-full px-5 pt-4 pb-1 rounded-lg">
              <label for="pass_Id " className="block text-[10px] text-gray-400">
                Password
              </label>
              <input
                id="pass_Id"
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <button className="bg-[#e50914] p-4 mt-4 w-full rounded-lg font-semibold text-white">
            {signUp ? "Sign Up" : "Sign in"}
          </button>
          <div className="flex align-baseline justify-between py-4 text-[#b3b3b3] text-[13px] font-normal">
            <div className="flex align-baseline space-x-2">
              <input
                className="accent-[#737373]"
                type="checkbox"
                id="checkBoxRemME"
                checked
              />
              <label className="" for="checkBoxRemME">
                Remember Me
              </label>
            </div>
            <a>Need Help?</a>
          </div>
          <div className="text-[#b3b3b3] text-[14px] font-normal mt-5">
           {signUp ? ( <span>
               Already a user?{" "}
              <a className="text-white cursor-pointer" onClick={handleSignUp}>
                 Sign In Now
            </a>
            </span>) : ( <span>
                New To Netflix?{" "}
              <a className="text-white cursor-pointer" onClick={handleSignUp}>
                 Sign Up Now
            </a>
            </span>)}
          </div>
          <div className="text-[#b3b3b3] text-[14px] font-normal mt-5 pb-14">
            <p>
              Sign in is protected by Google reCAPTCHA to ensure you’re not a
              bot.
              <a className="text-blue-800 mx-1">Learn More</a>
            </p>
          </div>
        </form>
      </div>
    </div>

    // </div>
  );
};

export default Login;

{
  /*  */
}
