import React from "react";
import StakeIconTwo from "../../images/stake-icon-2.svg";
import StakeIconThree from "../../images/stake-icon-3.svg";
import farmvestingImg from "../../images/farmvetingImg.webp";

const FarmVestingComponent = () => {
  return (
    <div className="flex justify-between w-4/5 mx-auto py-20">
      <div className="w-[40%] flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[36px] font-bold">Farms & Vesting</h3>
          <p className="text-[20px]">
            Stake on farm and claim tokens for a wide number of projects.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <img src={StakeIconTwo} className="w-[48px] h-[48px]" alt="" />
            <div className="flex flex-col gap-2 justify-start pt-2">
              <div className="text-[20px] font-bold">Venture Staking</div>
              <div>Enjoy staking on non-inflationary asset.</div>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={StakeIconThree} className="w-[48px] h-[48px]" alt="" />
            <div className="flex flex-col gap-2 justify-start pt-2">
              <div className="text-[20px] font-bold">Community Launchpad</div>
              <div>Vote for startups and win guaranteed allocations.</div>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-black text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-blue-500 ">
            Go to farms
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <img src={farmvestingImg} alt="" />
      </div>
    </div>
  );
};

export default FarmVestingComponent;
