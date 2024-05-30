import React from "react";
import thumb1 from "../assets/thumb-1.jpg";
import thumb1logo from "../assets/thumb-1-logo.jpg";
import thumb2 from "../assets/thumb-2.jpg";
import thumb2logo from "../assets/thumb-2-logo.jpg";
import thumb3 from "../assets/thumb-3.jpg";
import thumb3logo from "../assets/thumb-3-logo.jpg";
import thumb4 from "../assets/thumb-4.jpg";
import thumb4logo from "../assets/thumb-4-logo.jpg";
import thumb5 from "../assets/thumb-5.jpg";
import thumb5logo from "../assets/thumb-5-logo.jpg";
import thumb6 from "../assets/thumb-6.jpg";
import thumb6logo from "../assets/thumb-6-logo.jpg";

const Cards = () => {
  const cardsObj = [
    {
      id: "1",
      thumbnail: thumb1,
      logo: thumb1logo,
      title: "A workout with David Laid",
      name: "Chris Bumstead",
      no_of_views: "2.1M",
      posted: "2 months ago",
    },
    {
      id: "2",
      thumbnail: thumb2,
      logo: thumb2logo,
      title: "Super Effective Workout",
      name: "THENX",
      no_of_views: "453K",
      posted: "3 months ago",
    },
    {
      id: "3",
      thumbnail: thumb3,
      logo: thumb3logo,
      title: "12 VS Code extension 2024",
      name: "Devression",
      no_of_views: "454K",
      posted: "3 months ago",
    },
    {
      id: "4",
      thumbnail: thumb4,
      logo: thumb4logo,
      title: "Ultimate Top-Tier Programming",
      name: "ThePrimeTime",
      no_of_views: "290K",
      posted: "3 months ago",
    },
    {
      id: "5",
      thumbnail: thumb5,
      logo: thumb5logo,
      title: "God-Of-War 4 walkthrough | PS5",
      name: "Game Clips",
      no_of_views: "3.5M",
      posted: "8 months ago",
    },
    {
      id: "6",
      thumbnail: thumb6,
      logo: thumb6logo,
      title: "New Release Playstation 5 Games",
      name: "IGN",
      no_of_views: "9M",
      posted: "12 months ago",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-start gap-2">
        {cardsObj.map((val) => (
          <>
            <div className="w-[49%] p-2 cursor-pointer hover:border hover:border-gray-800 hover:bg-gray-800 hover:rounded-lg  ">
              <img
                src={val.thumbnail}
                alt="thumbnail-image"
                className="w-full rounded-lg"
              />

              <div className="flex items-center justiy-center gap-2 mt-3">
                <img
                  src={val.logo}
                  alt="thumb-1-logo"
                  className="rounded-full w-[7%]"
                />
                <div>
                  <p className="text-white text-lg font-medium">{val.title}</p>
                  <p className="text-md text-gray-300">{val.name}</p>
                  <span className="text-gray-500 text-sm">
                    {val.no_of_views} views
                  </span>
                  <span className="text-gray-500 text-sm px-2">
                    {val.posted}
                  </span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cards;
