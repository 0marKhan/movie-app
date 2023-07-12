import React from "react";
import { Link } from "react-router-dom";

// import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/movie-app">
        <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">
          TMOVIES
        </h1>
      </Link>

      <div>
        <Link to="/movie-page">
          <button className="text-white bg-red-600 px-3 py-2 rounded cursor-pointer">
            Movies
          </button>
        </Link>
        <Link to="/movie-app">
          <button className="text-white pr-4 ml-4 cursor-pointer ">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
