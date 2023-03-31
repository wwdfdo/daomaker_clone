import React from "react";
import StakeIconOne from "../../images/stake-icon-1.svg";
import StakeIconTwo from "../../images/stake-icon-2.svg";
import StakeIconThree from "../../images/stake-icon-3.svg";
import StakeIconFour from "../../images/stake-icon-4.svg";

const StakeComponent = () => {
  return (
    <div className="flex w-5/6 mx-auto justify-between  py-20">
      <div className=" bg-stake-bg bg-cover px-20 py-16 w-[40%]  flex flex-col justify-center rounded-xl gap-5 ">
        <div className="bg-black py-5 w-[100%] px-10 text-white rounded-2xl flex flex-col items-center gap-2">
          <p className="text-6xl font-bold">76M</p>
          <p className="text-lg font-semibold ">DAO locked</p>
        </div>
        <div className="bg-black py-5 w-full px-10 text-white font-bold text-2xl rounded-2xl flex flex-col items-center gap-2">
          <p className="text-6xl font-bold">76M</p>
          <p className="text-lg font-semibold ">DAO locked</p>
        </div>
        <div className="bg-black py-5 w-full px-10 text-white font-bold text-2xl rounded-2xl flex flex-col items-center gap-2">
          <p className="text-6xl font-bold">76M</p>
          <p className="text-lg font-semibold ">DAO locked</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 w-[48%]">
        <div>
          <h3 className="text-[36px] font-bold">Stake DAO</h3>
          <h4 className="text-[20px] ">
            Unlock the full power of the DAO ecosystem through staking.
          </h4>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <img src={StakeIconOne} className="w-[48px] h-[48px]" alt="" />
            <div className="flex flex-col gap-2 justify-start pt-2">
              <div className="text-[20px] font-bold">Private SHO</div>
              <div>
                Buying minimum 250 DAO and staking gives access to Private
                SHO’s. More you stake, your winning chances multiply.
              </div>
            </div>
          </div>
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
          <div className="flex gap-5">
            <img src={StakeIconFour} className="w-[48px] h-[48px]" alt="" />
            <div className="flex flex-col gap-2 justify-start pt-2">
              <div className="text-[20px] font-bold">Governance</div>
              <div>Take part in DAO ecosystem.</div>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-10">
          <button className="bg-black text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-blue-500 ">
            Start staking DAO
          </button>
          <button className="border-[1px] border-opacity-30 border-black text-black text-lg font-semibold py-4 px-8 rounded-xl hover:bg-blue-500 hover:text-white">
            DAO Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default StakeComponent;
