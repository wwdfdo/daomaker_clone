import React from "react";
import ecosystembg from "../../images/ecosystembg.webp";

const Ecosystem = () => {
  return (
    <div className="flex justify-between items-start gap-20 w-5/6 mx-auto py-20">
      <div className="flex flex-col gap-10 w-[40%]">
        <h3 className="text-[36px] font-bold">Ecosystem governance</h3>
        <p className="text-lg leading-relaxed">
          Vote for DAO Maker ecosystem changes by engaging in discussions on
          Discord. The ecosystem participation is open only for DAO token
          holders or those who staked.
        </p>
        <button className="bg-black text-white text-md font-bold py-4 px-4 rounded-xl hover:bg-blue-500 w-[50%] ">
          Participate on Snapshot
        </button>
      </div>

      <img src={ecosystembg} className="rounded-xl max-w-[50%]" alt="" />
    </div>
  );
};

export default Ecosystem;
