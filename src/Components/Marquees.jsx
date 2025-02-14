import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  var images = [
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1c44ab856f14a95fc70_Logo-lockup-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",
    ],
    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071efe_63aedb0e917c0cce57418785_haufe.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842b14070a2366d8a6bd_jologo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf6938856f07f92f4e2_logo-onDark.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d4ee1fe5ae69e47b6c1c_Lavendar-logo-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a7f6e278782c11c6370_Keystone-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62c438b36ad60fdcd_663a62d3cc5a74576d82a863_Singularity_logo.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696b1c44ab856f14a95fc70_Logo-lockup-white.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f104c9b6ce2c0a0d0d13_botify-white.svg",
    ],
  ];
  return (
    <div className="py-20 mt-32 w-full relative overflow-hidden">
      {images.map((item,index) => (
        <Marquee key={index} imagesurls={item} direction={index===0?"left":"right"} />
      ))}
    </div>
  );
};

export default Marquees;
