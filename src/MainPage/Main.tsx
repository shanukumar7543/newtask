import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Main() {
  return (
    <div className="flex w-screen flex-col lg:h-[400px] lg:w-[1200px]  bg-black lg:flex-row">
      <div className="flex h-full w-full flex-col justify-center px-[30px] lg:w-1/2 ">
        <p className="mb-4 text-[44px] text-white">
          Searching for <b>Augmented Development</b> Teams to steer your product
          towards triumph?"
        </p>
        <div className="flex w-full flex-row justify-between gap-x-[10px]  text-[46px] text-white">
          <span className="w-1/3">50+</span>
          <span className="w-1/3">80+</span>
          <span className="w-1/3">60%</span>
        </div>
        <div className="flex w-full flex-row justify-between gap-x-[10px] text-[11px] text-white">
          <span className="w-1/3">Clients</span>
          <span className="w-1/3">Project Successfully <br />Completed</span>
          <span className="w-1/3">
            of the partners converted into long term engagements partners.
          </span>
        </div>
      </div>
      <div className="flex w-full h-full flex-col items-center justify-center lg:w-1/2">
        <div className="flex h-full w-full flex-col rounded-lg bg-[#DBDBDB] px-4 py-6 text-[52px]">
          <p className="bold text-[28px] text-black">Fill out the form</p>
          <p className="text-[18px] text-black">
            Our team will touch base with you in 24 hours
          </p>
          <div className="flex w-full flex-col justify-between gap-x-[60px] lg:flex-row">
            <input
              type="text"
              id="name"
              placeholder="Full name*"
              autoComplete="off"
              className="w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit px-2 py-3 text-xl font-light outline-none"
            />
            <input
              type="text"
              id="email"
              placeholder="Email Id*"
              autoComplete="off"
              className="w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit px-2 py-3 text-xl font-light outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-x-[60px] lg:flex-row">
            <input
              type="text"
              id="country"
              placeholder="Country"
              autoComplete="off"
              className="w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit px-2 py-3 text-xl font-light outline-none"
            />
            <input
              type="text"
              id="contact"
              placeholder="Contact number"
              autoComplete="off"
              className="w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit px-2 py-3 text-xl font-light outline-none"
            />
          </div>
          <div className="flex w-full flex-col justify-between gap-x-[60px] lg:flex-row">
            <input
              type="text"
              id="name"
              placeholder="Tell us your Requirments"
              autoComplete="off"
              className="w-full border-x-0 border-b border-t-0 border-b-zinc-400 bg-inherit px-2 py-3 text-xl font-light outline-none"
            />
          </div>
          <div>
            <button
              type="button"
              className="w-20 rounded-full bg-black py-2 text-center text-sm font-medium text-white transition
                duration-500 hover:scale-105"
            >
              Submit
            </button>
            <button
              type="button"
              className="ml-4 rounded-full bg-black px-3 py-2 text-center text-sm font-medium text-white transition
                  duration-500 hover:scale-105"
            >
              ➔
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
