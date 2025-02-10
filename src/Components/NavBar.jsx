import React from "react";

const NavBar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center  border-zinc-700">
      <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt="refokus-logo"
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture"].map((elem,index) => (
          <a
            href="#"
            className="font-regular flex text-sm items-center gap-1 cursor-pointer"
          >
            {index === 1 && (
              <span
                style={{ boxShadow: "0 0 0.25em #00FF19" }}
                className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
              ></span>
            )}
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
};
export default NavBar;
