import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="hero-image relative flex h-[500px] w-full items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute z-10 flex flex-col items-center justify-center gap-4 p-7 text-white">
        <h1 className="text-center text-3xl font-bold sm:text-5xl">
          Professionell Herrfrisering i Uppsala.
        </h1>

        <p className="mb-5 text-sm sm:text-lg">
          Vi erbjuder klassisk och modern klippning för alla!
        </p>

        <div>
          <Button className="text-brown bg-orange-400 font-bold">
            <a href="#oppettider">Boka</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
