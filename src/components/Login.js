import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
   const [isSignIn, setisSignIn] = useState(true);
  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  }
 
  return (
    <div>
      <Header />
      <div>
        <img
          className="size-full absolute"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="background"
        ></img>
      </div>
      <form className="w-3/12 p-14 absolute bg-black opacity-90 my-36 mx-auto right-0 left-0 rounded-lg text-white">
        <h1 className="font-bold text-3xl mb-8 opacity-100">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-3 mb-3 rounded-md w-full bg-gray-800 opacity-100"
          />
        )}
        {!isSignIn && (
          <input
            type="text"
            placeholder="Phone number"
            className="px-4 py-3 mb-3 rounded-md w-full bg-gray-800 opacity-100"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="px-4 py-3 mb-0.5 rounded-md w-full bg-gray-800 opacity-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 my-3 rounded-md w-full bg-gray-800 opacity-100"
        />
        <button className="py-2 px-3 my-8 w-full text-white bg-red-700 rounded-md opacity-100 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix ? Sign Up Now"
            : "Already registered ? Sign In"}
        </p>
      </form>
    </div>
  );
}

export default Login
