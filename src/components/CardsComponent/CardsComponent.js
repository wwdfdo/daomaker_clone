import React from "react";
import CardIconOne from "../../images/card-icon-1.webp";
import CardIconTwo from "../../images/card-icon-2.webp";
import CardIconThree from "../../images/card-icon-3.webp";
import CardIconFour from "../../images/card-icon-4.webp";
import CardIconFive from "../../images/card-icon-5.webp";
import CardIconSix from "../../images/card-icon-6.webp";

const CardsComponent = () => {
  return (
    <div className="pt-40 flex flex-col gap-8 items-center pb-20">
      <h2 className="text-[36px] font-bold">More than a launchpad</h2>
      <h3 className="text-[20px] leading-[30px] text-[#667085]">
        At DAO Maker we bring great solutions to our users everyday. Discover
        our latest products.
      </h3>
      <div className="flex flex-wrap gap-5 w-[95%] justify-center mx-auto">
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconOne} className="w-[80px]" alt="" />
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px] ">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconTwo} className="w-[80px]" alt="" />
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px]">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconThree} className="w-[80px]" alt="" />{" "}
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px]">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconFour} className="w-[80px]" alt="" />
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px]">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconFive} className="w-[80px]" alt="" />
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px]">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
        <div className=" w-[28%] flex flex-col items-center gap-5 py-10 px-6 rounded-2xl justify-center shadow-lg">
          <img src={CardIconSix} className="w-[80px]" alt="" />
          <h4 className="text-[30px] font-[700]">DAO Launchpad</h4>
          <p className="text-center text-[16px]">
            Access DAO Maker incubation, top tier & NFT projects before they hit
            the market
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
