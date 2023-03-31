import React from "react";
import lauchpadImg from "../../images/LaunchpadImg.webp";
import lauchpadIconOne from "../../images/launchpad-icon-1.svg";
import launpadIconTwo from "../../images/launchpad-icon-2.svg";

const Launchpad = () => {
  return (
    <div className="overflow-x-hidden relative w-full ">
      <div className="flex justify-between gap-32 w-[95%] ml-[10%] ">
        <div className="flex flex-col gap-5 justify-start ">
          <div className="text-[36px] font-bold">DAO Launchpad</div>
          <div className="text-[20px] leading-[30px]">
            Access DAO Maker incubation projects, top tier sales & NFT projects
            before they hit the market.
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-5">
              <img src={lauchpadIconOne} alt="" />
              <div className="flex flex-col gap-5 justify-start pt-2">
                <div className="text-[20px] font-bold">Public SHO</div>
                <div className="text-[16px]">
                  Public SHOs allow anyone with more than $500 USD worth of
                  tokens in their wallets to participate.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <img src={launpadIconTwo} alt="" />
              <div className="flex flex-col gap-5 justify-start pt-2">
                <div className="text-[20px] font-bold">Public SHO</div>
                <div className="text-[16px]">
                  Public SHOs allow anyone with more than $500 USD worth of
                  tokens in their wallets to participate.
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-10">
            <button className="bg-black text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-blue-500">
              DAO launchpad
            </button>
            <button className="border-[1px] border-opacity-30 border-black text-black text-lg font-semibold py-4 px-8 rounded-xl hover:bg-blue-500 hover:text-white">
              How to participate
            </button>
          </div>
        </div>

        <img src={lauchpadImg} className="w-[890px] mr-[-5%]" alt="" />
      </div>
    </div>
  );
};

export default Launchpad;
