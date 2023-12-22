import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold">Auth App</h1>
        <ul className="flex gap-7 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/signin">Signin</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
