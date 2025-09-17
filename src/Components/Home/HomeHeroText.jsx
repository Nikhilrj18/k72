import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1]  h-100 content-end  pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw] ">
        The spark for
      </div>
      <div className="text-[9.5vw] justify-center flex items-start uppercase leading-[8vw] ">
        all
        <div className="h-[8vw] rounded-full -mt-3 w-[12vw] overflow-hidden object-cover ">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw] ">
        la creative
      </div>
    </div>
  );
};

export default HomeHeroText;
