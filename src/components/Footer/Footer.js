import React from "react";

const Footer = () => {
  return (
    <div className="py-20">
      <div className="flex w-5/6 mx-auto justify-between ">
        <div>LOGO</div>
        <div className="flex justify-between w-4/5">
          <ul className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-slate-500">Product</h3>
            <div className="flex flex-col gap-2 font-semibold text-[1.1rem] text-slate-400">
              <li>DAO Launchpad</li>
              <li>Stake DAO</li>
              <li>Community voted</li>
              <li>Farms and Vestings</li>
              <li>Buy Dao</li>
              <li>DAO Swap</li>
              <li>Governance</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-slate-500">Company</h3>
            <div className="flex flex-col gap-2 font-semibold text-[1.1rem] text-slate-400">
              <li>DAO Launchpad</li>
              <li>Stake DAO</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-slate-500">Resources</h3>
            <div className="flex flex-col gap-2 font-semibold text-[1.1rem] text-slate-400">
              <li>DAO Launchpad</li>
              <li>Stake DAO</li>
              <li>Community voted</li>
              <li>Farms and Vestings</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-slate-500">Social</h3>
            <div className="flex flex-col gap-2 font-semibold text-[1.1rem] text-slate-400">
              <li>DAO Launchpad</li>
              <li>Stake DAO</li>
              <li>Community voted</li>
              <li>Farms and Vestings</li>
              <li>Buy Dao</li>
              <li>DAO Swap</li>
            </div>
          </ul>
          <ul className="flex flex-col gap-2">
            <h3 className="text-md font-bold text-slate-500">Legal</h3>
            <div className="flex flex-col gap-2 font-semibold text-[1.1rem] text-slate-400">
              <li>DAO Launchpad</li>
              <li>Stake DAO</li>
              <li>Community voted</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
