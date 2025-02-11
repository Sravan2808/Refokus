import React from "react";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Card = ({ width, start, para,hover }) => {
  return (
    <div className={`${width} hover:${hover} min-h-[30rem] bg-zinc-800 p-5 rounded-xl flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <HiMiniArrowSmallRight />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading.</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="py-2 px-5 border-[1px] mt-5 border-zinc-50 rounded-full">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
