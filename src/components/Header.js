import React from "react";
import { USER_AVTAR } from "./utils/constant";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () =>{
    //Put Firebase SIGNOUT APl .You find it in authentication option on firebase
    // And After signOut clicked -> the onAuthStateChanged api automatically Called as it changes the auth state
    //  where we have written the logic and dispatch remove user action.

    signOut(auth).then(() => {
      // Sign-out successful.
      //Navigate to Home Page.
      navigate('/');

    }).catch((error) => {
     navigate('/error');
    });

  }

  return (
    <div>
      <div className=" px-8 py-2 bg-gradient-to-b from-black absolute z-20 w-full flex justify-between  items-center">
        <div>
          <img
            className="w-44"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix-PMS-Logo"
          />
        </div>
        {user && <div>
          <button className="text-white font-md text-2xl flex items-center space-x-2 cursor-pointer" onClick = {handleSignOut}>
            <img className="w-10 h-10" src= {user.photoURL} />
            <span>(SignOut)</span>
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Header;
