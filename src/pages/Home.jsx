import React from "react";
import Video from "../Components/Home/Video";
import HomeHeroText from "../Components/Home/HomeHeroText";
import HomeButtonText from "../Components/Home/HomeButtonText";

const Home = () => {
  return (
    <div className="text-white">
      <div className="w-full h-screen fixed">
        <Video />
      </div>
      <div className="w-full h-screen relative justify-between flex flex-col">
        <HomeHeroText />
        <HomeButtonText />
      </div>
    </div>
  );
};

export default Home;
