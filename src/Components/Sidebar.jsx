import React from "react";
import sub1 from "../assets/subscription-1.jpg";
import sub2 from "../assets/subscription-2.jpg";
import sub3 from "../assets/subscription-3.jpg";
import sub4 from "../assets/subscription-4.jpg";
const Sidebar = () => {
  return (
    <>
      <div className="w-2/12 h-full bg-black px-3">
        <div className="flex items-center justify-start gap-2 py-4 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Home</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-4 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM80,148a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm48,48a20,20,0,1,1,20-20A20,20,0,0,1,128,196Zm0-96a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm28,28a20,20,0,1,1,20,20A20,20,0,0,1,156,128Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Shorts</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-4 px-4 border-b border-gray-600">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Subscriptions</p>
          </div>
        </div>
        <p className="font-medium text-start mt-4 text-md text-white">
          Subscriptions
        </p>
        <div className="flex items-center justify-start gap-5 py-4 px-4">
          <img
            src={sub1}
            alt="subscription-1"
            className="w-[14%] rounded-full"
          />
          <div>
            <p className="font-medium text-center text-md text-white">
              SwissBeatBox
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 py-4 px-4">
          <img
            src={sub2}
            alt="subscription-1"
            className="w-[14%] rounded-full rotate-180 infinte linear transition ease-out"
          />
          <div>
            <p className="font-medium text-center text-md text-white">
              Spinnin Records
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 py-4 px-4">
          <img
            src={sub3}
            alt="subscription-1"
            className="w-[14%] rounded-full"
          />
          <div>
            <p className="font-medium text-center text-md text-white">
              7 clouds
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 py-4 px-4">
          <img
            src={sub4}
            alt="subscription-1"
            className="w-[14%] rounded-full"
          />
          <div>
            <p className="font-medium text-center text-md text-white">
              EDM Musics
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5 py-4 px-4 border-b border-gray-600 cursor-pointer hover:bg-gray-900 hover:rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
          </svg>
          <div>
            <p className="font-medium text-center text-md text-white">
              show more
            </p>
          </div>
        </div>
        <p className="font-medium text-start mt-4 text-md text-white">
          Explore
        </p>
        <div className="flex items-center justify-start gap-2 py-4 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M183.89,153.34a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68ZM216,144a88,88,0,0,1-176,0c0-27.92,11-56.47,32.66-84.85a8,8,0,0,1,11.93-.89l24.12,23.41,22-60.41a8,8,0,0,1,12.63-3.41C165.21,36,216,84.55,216,144Zm-16,0c0-46.09-35.79-85.92-58.21-106.33L119.52,98.74a8,8,0,0,1-13.09,3L80.06,76.16C64.09,99.21,56,122,56,144a72,72,0,0,0,144,0Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Trending</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-4 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Shopping</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-4 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Movies</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-4 px-4 border-b border-gray-600 ">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,40h.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Music</p>
          </div>
        </div>
        {/* setting */}
        <div className="flex items-center justify-start gap-2 py-2 mt-2 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Settings</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-2 px-4">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Help</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 py-2 px-4 border-b border-gray-600">
          <div className="p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"></path>
            </svg>
          </div>
          <div className="p-1">
            <p className="font-medium text-md text-white">Feedback</p>
          </div>
        </div>
        {/* footer */}
        <footer className="m-2">
          <div className="p-2 flex items-center justify-start flex-wrap">
            <p className="text-sm font-bold text-gray-600 px-1 py-1">About</p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">Press</p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Contact us
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Copyright
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Creators
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Advertise
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Developers
            </p>
          </div>
          <div className="p-3 flex items-center justify-start flex-wrap">
            <p className="text-sm font-bold text-gray-600 px-1 py-1">Terms</p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">Privacy</p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">Policy</p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              Security
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              New Features
            </p>
            <p className="text-sm font-bold text-gray-600 px-1 py-1">
              How youtube Works
            </p>
          </div>
          <p className="font-thin text-sm text-gray-500 p-3">
            @2024 Google LLC
          </p>
        </footer>
      </div>
    </>
  );
};

export default Sidebar;
