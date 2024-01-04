import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/validate";
import { auth } from "./utils/firebase";
import { USER_AVTAR } from "./utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { BG_C0VER_IMG } from "./utils/constant";



const Login = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  const handleBtnClick = () => {
    // Data Validation
    const message = checkValidData(email.current.value, password.current.value);
    setInputErrorMessage(message);
    if (message) return;

    //Data authentication using firebase authentication APIs
    //SignUp and SIgnIn logics
    if (signUp) {
      //sign In...
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //updatating the firebase
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {

              const { uid, email, displayName, photoURL } = auth.currentUser; //from firebase..
            //here dispatches an action and update the store->userslice->user and update store
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              setInputErrorMessage(error.message);
            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInputErrorMessage(errorMessage + "-" + errorCode);
          // ...
        });
    } 
    else {
      // signIN Logic : firebase signInWithEmailAndPassword Api
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setInputErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };

  return (
    <div className="w-full h-screen bg-black bg-opacity-50 absolute z-20">
      <Header />
      <div className="absolute z-10">
        <div className="overflow-hidden">
          <img
            alt="background-cover-Img"
            src={BG_C0VER_IMG}
          />
        </div>
      </div>

      <div className="h-screen ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-75 w-[450px] px-16  py-10  mx-auto relative z-10 top-40"
        >
          <h1 className="text-3xl text-white mb-6 font-medium">Sign In</h1>
          {signUp ? (
            <div className="pb-5">
              <div className="bg-[#333] px-5 pt-4 pb-1 rounded-lg">
                <label
                  htmlFor="signUpUserName"
                  className="block text-[10px] text-gray-400"
                >
                  Enter Your Name
                </label>
                <input
                  ref={name}
                  id="signUpUserName"
                  type="text"
                  placeholder="Username"
                  className="w-full bg-transparent  focus:outline-none "
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="pb-5">
            <div className="bg-[#333] px-5 pt-4 pb-1 rounded-lg">
              <label
                htmlFor="inputEmailMob"
                className="block text-[10px] text-gray-400"
              >
                Email or phone number
              </label>
              <input
                ref={email}
                id="inputEmailMob"
                type="text"
                placeholder="Email Address"
                className="w-full bg-transparent  focus:outline-none text-white "
              />
            </div>
          </div>

          <div className="pb-5">
            <div className="bg-[#333] w-full px-5 pt-4 pb-1 rounded-lg">
              <label
                htmlFor="pass_Id "
                className="block text-[10px] text-gray-400"
              >
                Password
              </label>
              <input
                ref={password}
                id="pass_Id"
                type="password"
                placeholder="Password"
                className="w-full bg-transparent focus:outline-none text-white"
              />
            </div>
          </div>

          <p className="text-[13px] text-[#e87c03] w-full ">
            {inputErrorMessage}
          </p>

          <button
            className="bg-[#e50914] p-4 mt-4 w-full rounded-lg font-semibold text-white"
            onClick={handleBtnClick}
          >
            {signUp ? "Sign Up" : "Sign in"}
          </button>
          <div className="flex align-baseline justify-between py-4 text-[#b3b3b3] text-[13px] font-normal">
            <div className="flex align-baseline space-x-2">
              <input
                className="accent-[#737373]"
                type="checkbox"
                id="checkBoxRemME"
                defaultChecked
              />
              <label className="" htmlFor="checkBoxRemME">
                Remember Me
              </label>
            </div>
            <a>Need Help?</a>
          </div>
          <div className="text-[#b3b3b3] text-[14px] font-normal mt-5">
            {signUp ? (
              <span>
                Already a user?{" "}
                <a className="text-white cursor-pointer" onClick={handleSignUp}>
                  Sign In Now
                </a>
              </span>
            ) : (
              <span>
                New To Netflix?{" "}
                <a className="text-white cursor-pointer" onClick={handleSignUp}>
                  Sign Up Now
                </a>
              </span>
            )}
          </div>
          <div className="text-[#b3b3b3] text-[14px] font-normal mt-5 pb-14">
            <p>
              Sign in is protected by Google reCAPTCHA to ensure you’re not a
              bot.
              <a href="" className="text-blue-800 mx-1">Learn More</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
