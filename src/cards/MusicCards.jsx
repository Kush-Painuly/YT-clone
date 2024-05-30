import React from "react";
import music1 from "../assets/music-1.jpg";
import music1logo from "../assets/subscription-4.jpg";
import music2 from "../assets/music-2.jpg";
import music2logo from "../assets/music-2-logo.jpg";
import music3 from "../assets/music-3.jpg";
import music3logo from "../assets/music-3-logo.jpg";
import music4 from "../assets/music4.jpg";
import music4logo from "../assets/music-4-logo.jpg";
import music5 from "../assets/music-5.jpg";
import music5logo from "../assets/music-5-logo.jpg";
import music6 from "../assets/music-6.jpg";
import music6logo from "../assets/music-6-logo.jpg";
const MusicCards = () => {
  const cardsObj = [
    {
      id: "1",
      thumbnail: music1,
      logo: music1logo,
      title: "PSY Trance MIX 2023",
      name: "Brutish Music",
      no_of_views: "3.1M",
      posted: "1 year ago",
    },
    {
      id: "2",
      thumbnail: music2,
      logo: music2logo,
      title: "Aisa Hoga Kalyug",
      name: "Narci",
      no_of_views: "8.6K",
      posted: "2 hours ago",
    },
    {
      id: "3",
      thumbnail: music3,
      logo: music3logo,
      title: "It Will Rain | Bruno Mars | lyrics",
      name: "Deep Blue Sea",
      no_of_views: "26M",
      posted: "7 months ago",
    },
    {
      id: "4",
      thumbnail: music4,
      logo: music4logo,
      title: "F.A.T.E (Official Video) - KARMA",
      name: "Kalamkaar",
      no_of_views: "4M",
      posted: "2 years ago",
    },
    {
      id: "5",
      thumbnail: music5,
      logo: music5logo,
      title: "Feel Immortal (Playlist)",
      name: "Unstoppable Music",
      no_of_views: "292K",
      posted: "9 months ago",
    },
    {
      id: "6",
      thumbnail: music6,
      logo: music6logo,
      title: "Charlie Puth - Hero (Official Audio)",
      name: "Charlie Puth",
      no_of_views: "224K",
      posted: "2 days ago",
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

export default MusicCards;
