import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  //   const { user, logOut } = UserAuth();
  //   const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    //   try {
    //     await logOut();
    //     navigate("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className=" text-purple-600 text-4xl font-bold cursor-pointer">
        TMOVIES
      </h1>
      <div>
        <button className="text-white pr-4">Account</button>
        <button
          onClick={handleLogout}
          className="bg-purple-600 px-6 py-2 rounded cursor-pointer text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
