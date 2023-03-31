import React from "react";
import communitybg from "../../images/communitybg.webp";
import lauchpadIconOne from "../../images/launchpad-icon-1.svg";
import launpadIconTwo from "../../images/launchpad-icon-2.svg";

const Community = () => {
  return (
    <div className="overflow-x-hidden relative w-full py-20 ">
      <div className="flex justify-between gap-32 w-full ml-[-10%] ">
        <img src={communitybg} className="w-[850px] mr-[-5%]" alt="" />
        <div className="flex flex-col gap-5 justify-start  ">
          <div className="text-[36px] font-bold">Community Launchpad</div>
          <div className="text-[20px] leading-[30px]">
            Discover ongoing crypto launchpad offerings & IDOs elected by the
            community.
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-5">
              <img src={lauchpadIconOne} alt="" />
              <div className="flex flex-col gap-5 justify-start pt-2">
                <div className="text-[20px] font-bold">Vote</div>
                <div className="text-[16px]">
                  Stake DAO in order to unlock access to DAO community voting
                  round
                </div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <img src={launpadIconTwo} alt="" />
              <div className="flex flex-col gap-5 justify-start pt-2">
                <div className="text-[20px] font-bold">Participate</div>
                <div className="text-[16px]">
                  Take part in voting with guaranteed allocations
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <button className="bg-black text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-blue-500">
              Community launchpad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
