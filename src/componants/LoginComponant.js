import React, { useState, useRef } from "react";
import HeaderComponant from "./HeaderComponant";
import NETFLIX_LOGO from "./../assets/images/Netflix_Logo_PMS.png";
import { checkValidData } from "./../utils/validation";

const LoginComponant = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
  };

  return (
    <div>
      <HeaderComponant />
      <div className="absolute">
        <img alt="netflix-bg" src={NETFLIX_LOGO} />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 top-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div>
              <input
                ref={name}
                placeholder="Full Name"
                type="text"
                className="p-4 my-4 w-full bg-gray-700"
              />
            </div>
          )}
          <div>
            <input
              ref={email}
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <input
              ref={password}
              className="p-4 my-4 w-full bg-gray-700"
              type="text"
              placeholder="password"
            />
          </div>
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            className="p-4 my-4 w-full bg-red-700"
            onClick={handleButtonClick}
          >
            {" "}
            {!isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponant;
