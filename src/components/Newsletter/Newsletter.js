import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-slate-200">
      <div className=" flex justify-between items-center py-10 w-5/6 mx-auto ">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Join our newsletter</h3>
          <p>We’ll send you a nice letter once per week. No spam.</p>
        </div>
        <div>
          <form action="/action_page.php" className="flex gap-2">
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              placeholder="Enter your Email"
              className="rounded-lg outline-none hover:border-[3px] hover:border-blue-500 ease-in-out duration-100 px-3 py-2"
            />
            <input
              type="submit"
              className="rounded-lg bg-black text-white px-6"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
