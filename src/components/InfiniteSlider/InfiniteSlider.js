import React from "react";
import { slides } from "../../arrays/infiniteSlides";
import "./InfiniteSlider.css";

const InfiniteSlider = ({ animation, clas }) => {
  return (
    <div className=" flex items-center h-[10vh] justify-center pb-20 ">
      {/* 1. */}
      <div className="w-[200%] h-20  overflow-hidden relative">
        {/* 2. */}

        <div
          className={`w-[200%] flex items-center h-20 justify-around absolute left-0  gap-5 ${animation} ${clas}`}
        >
          {/* 3 */}
          {slides.map((image) => {
            return (
              <div className="flex justify-center items-center w-[48rem] bg-[#f9fafb] rounded-3xl py-1 cursor-pointer hover:shadow-2xl duration-300 ease-in-out">
                <div className="flex gap-1 justify-center items-center">
                  <img
                    src={image.icon}
                    className="w-[28px] h-[28px] rounded-full"
                  />
                  <div className="text-[1rem] font-semibold">{image.title}</div>
                  <div className="text-[1rem] font-bold text-[#32d583]">
                    {image.percentage}
                  </div>
                </div>
              </div>
            );
          })}
          {slides.map((image) => {
            return (
              <div className="flex justify-center items-center w-[48rem] bg-[#f9fafb] rounded-3xl py-1 cursor-pointer hover:shadow-2xl duration-300 ease-in-out">
                <div className="flex gap-1 justify-center items-center">
                  <img
                    src={image.icon}
                    className="w-[28px] h-[28px] rounded-full"
                  />
                  <div className="text-[1rem] font-semibold">{image.title}</div>
                  <div className="text-[1rem] font-bold text-[#32d583]">
                    {image.percentage}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
