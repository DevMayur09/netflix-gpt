import React, { useEffect } from "react";
import { NETFLIX_LOGO_URL } from "./utils/constant";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";


const Header = () => {

  const dispatch = useDispatch();
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

  useEffect(() => {
    const unSubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user; //from firebase..

        //here dispatches an action and update the store->userslice->user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate('/browse')
        // ...
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    // Unscribeds when component is unmount
    return () => unSubscribe();

  }, []);

  return (
    <div>
      <div className=" px-8 py-2 bg-gradient-to-b from-black absolute z-20 w-full flex justify-between  items-center">
        <div>
          <img
            className="w-44"
            src={NETFLIX_LOGO_URL}
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
