import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-[90%] absolute text-white h-screen pl-24 pt-[400px] aspect-video bg-gradient-to-r from-black-700">
        <div className="my-10 ">
          <h1 className="my-10 font-bold text-5xl first-letter:text-red-700 ">{title}</h1>
          <p className="w-1/3 pl-4 font-medium first-letter:text-red-700 first-letter:text-[24px]">{overview}</p>
        </div>
        <div className="flex space-x-2 pl-4">
          <button className="bg-white text-black px-8 py-4 font-bold rounded-md flex space-x-1 hover:bg-opacity-85">
          <img src= {require('./Image/play.png')} />
          <span>Play Now</span>
          </button>

          <button className="bg-gray-500 text-white px-8 py-4 font-bold rounded-md flex space-x-1 bg-opacity-75  hover:bg-opacity-50">
          <img src= {require('./Image/moreInfo.png')} />
          <span>More Info</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
