import React from "react";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-between gap-4 sm:gap-10 md:flex-row">
      <p className="text-sm font-light md:text-base md:font-normal">
        Copyright © 2024 PKs herrfrisering
      </p>

      <div className="flex items-center gap-4 md:gap-3">
        {/* {socialMedia.map((info) => (
          <a
            key={info.id}
            className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
            href={info.link}
            target="_blank"
          >
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))} */}
      </div>
    </div>
  );
};

export default Footer;
