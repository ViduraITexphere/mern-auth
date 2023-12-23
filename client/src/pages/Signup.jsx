import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg w-full mt-4 bg-gradient-to-r from-slate-700 to-slate-900 uppercase hover:opacity-95 disabled:opacity-80"
        >
          Signup
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Already have an account?</p>
        <Link to="/signin" className="text-slate-700 hover:underline">
          <span className="text-slate-700 hover:underline">Signin</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
