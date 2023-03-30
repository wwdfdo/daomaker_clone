import React from "react";
import logo from "../../images/logo.svg";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#f5f6f8] px-[8%] h-20 ">
      <div className="flex gap-8 items-center">
        <img src={logo} className="w-[200px]" alt="" />
        <div className="font-semibold text-lg">Products</div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="relative bg-white px-2 rounded-lg border-2 border-blue-400">
          <form action="/action_page.php" className=" py-2 flex items-center">
            <CiSearch className="absolute left-2 " />
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="Search"
              className="outline-none pl-5"
            />
            <input type="submit" className="hidden" />
          </form>
        </div>

        <button className=" max-w-[300px] py-2 px-4 rounded-lg bg-white border-2 border-blue-400 ">
          Connect Wallet
        </button>
        <div className="text-lg font-semibold text-slate-600">Log in</div>
        <div className="py-2 px-4 rounded-lg bg-slate-900 border-2 text-white flex items-center">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Header;
