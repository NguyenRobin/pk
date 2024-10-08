import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero-image relative flex h-screen w-full items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-top bg-no-repeat md:h-[80vh] md:bg-top">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute z-10 flex flex-col items-center justify-center gap-4 p-7 text-white">
        <h1 className="animate-fadeIn text-center text-3xl font-bold sm:text-5xl">
          Professionell Herrfrisering i Uppsala.
        </h1>

        <p className="mb-5 text-center text-sm sm:text-lg">
          Vi erbjuder endast drop-in-besök, så kom förbi när det passar dig! Vi
          ser fram emot att ta hand om ditt hår.
        </p>

        <div>
          <Button className="text-brown bg-orange-400 font-bold">
            <a href="#oppettider">Drop-in</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
