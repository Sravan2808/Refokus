import React from "react";
import { animate, motion } from "framer-motion";

const Marquee = ({ imagesurls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="w-[7vw] flex-shrink-0"></img>
        ))}
      </motion.div>
      <motion.div initial={{x:direction==='right'?"-100%":"0"}}
      animate={{x:direction==="right"?"0":"-100%"}}
      transition={{ease:"linear",duration:15,repeat:Infinity}}
      className="flex flex-shrink-0 gap-40 py-10 pr-40">

      {imagesurls.map((url, index) => (
        <img key={index} src={url} className="flex-shrink-0 w-[7vw]"></img>
      ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
