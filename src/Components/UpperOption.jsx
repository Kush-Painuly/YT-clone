import React from "react";
import { Link, Outlet } from "react-router-dom";

const UpperOption = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-2">
        <div className="border border-gray-800 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <Link to="all">
            <p className="text-white hover:text-black py-2 px-3 font-medium">
              All
            </p>
          </Link>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <Link to="music">
            <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
              music
            </p>
          </Link>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <Link to="coding">
            <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
              coding
            </p>
          </Link>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            gaming
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            workout
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            travel
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            sports
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            protien
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            software engineering
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            Arts
          </p>
        </div>
        <div className="border border-gray-900 bg-gray-900 rounded-lg  hover:bg-white hover:border-white">
          <p className="text-white hover:text-black py-2 px-3 font-medium capitalize ">
            Video games
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default UpperOption;
