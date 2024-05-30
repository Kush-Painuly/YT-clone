import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UpperOption from "./UpperOption";
import { Route, Routes } from "react-router-dom";
import Cards from "../cards/Cards";
import MusicCards from "../cards/MusicCards";

const Screen = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />

          <div className="w-[85%] bg-black">
            <Routes>
              <Route path="/" element={<UpperOption />}>
                <Route index element={<Cards />}></Route>
                <Route path="all" element={<Cards />}></Route>
                <Route path="music" element={<MusicCards />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
