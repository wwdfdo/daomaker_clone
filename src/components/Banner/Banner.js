import React from "react";
import BannerLogo from "../../images/logonew.svg";

const Banner = () => {
  return (
    <div className=" bg-banner-bg w-full bg-cover bg-no-repeat  flex flex-col items-center justify-center h-[70vh] gap-10 relative pb-20 pt-10">
      <img src={BannerLogo} className="w-[80px]" alt="" />
      <h1 className="text-6xl text-white font-bold">Tokenizing the Future</h1>
      <p className="text-center text-white font-semibold text-lg">
        DAO Maker brings next-generation digital financial solutions.
        <br />
        Trusted by more than 800K+ users and startups. Discover our products
        today.
      </p>
      <div className="gap-4 flex ">
        <button className="px-5 py-3 bg-white text-xl font-semibold rounded-xl">
          Launchpad
        </button>
        <button className="px-5 py-3 bg-black text-white text-xl font-semibold rounded-xl">
          DAO Token
        </button>
      </div>
      <div className=" w-3/4 bg-white mx-auto mb-[-10%] flex justify-around py-8 px-4 rounded-2xl shadow-md">
        <div className="gap-2 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">$36M</div>
          <div className="text-lg font-bold text-slate-500">Contributions</div>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">$178M</div>
          <div className="text-lg font-bold text-slate-500">Distributed</div>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">173+</div>
          <div className="text-lg font-bold text-slate-500">Startups</div>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center">
          <div className="text-5xl font-bold">281K+</div>
          <div className="text-lg font-bold text-slate-500">KYCed Users*</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
