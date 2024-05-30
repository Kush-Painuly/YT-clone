import React from "react";
import ytimg from "../assets/youtube-image.png";
import accountlogo from "../assets/account-logo.jpg";
const Header = () => {
  return (
    <>
      <header className="h-16 bg-black flex items-center justify-between">
        <div className="w-[25%] flex items-center justify-start pl-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
          <img src={ytimg} alt="youtube-image" className="w-[33%]" />
        </div>
        {/* search input*/}
        <div className="w-[40%] flex items-center justify-center gap-3 p-2">
          <input
            type="text"
            name="search"
            id="search"
            className="relative block w-full rounded-full bg-black  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <div className="absolute right-[27%] w-16 py-1 pl-5 cursor-pointer border-l border-gray-500 bg-gray-800 rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <div className="p-2 border cursor-pointer border-gray-500 bg-gray-900 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#ffffff"
              viewBox="0 0 256 256"
              className="p-0.5"
            >
              <path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z"></path>
            </svg>
          </div>
        </div>
        {/* account */}
        <div className="flex items-center justify-center gap-2">
          {/* video */}
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"></path>
            </svg>
          </div>
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </div>
          <div className="p-0.5 w-12">
            <img
              src={accountlogo}
              alt="account-logo"
              className="w-[80%] rounded-full"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
