import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-300 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-300 capitalize">Sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
          <div className=" basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
              className="w-32 mt-5 bg-indigo-500 shadow-lg shadow-indigo-500/50 mt-10"
            />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-1 flex gap-10">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a key={index} className="text-zinc-500 capitalize tracking-wide">{item}</a>
          )
        )}
        <div className="mr-10">
          <h3 className="text-zinc-400 font-normal  ml-32 ">
            vsravansurya@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
