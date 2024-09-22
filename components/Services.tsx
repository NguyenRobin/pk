import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services: Array<{ service: string; price: string; img: string }> = [
  {
    service: "Klippning kort hår",
    price: "350 - 400",
    img: "/hair-removebg-preview.png",
  },
  {
    service: "Klippning långt hår",
    price: "från 400",
    img: "/longhair-removebg-preview.png",
  },
  {
    service: "Klippning + skägg",
    price: "500 - 700",
    img: "/fulltrim-removebg-preview.png",
  },
  {
    service: "Endast skulpterat skägg",
    price: "350 - 400",
    img: "/knife-removebg-preview.png",
  },
  {
    service: "Hårtvätt samtidigt som klippning",
    price: "100",
    img: "/blosser-removebg-preview.png",
  },
  {
    service: "Maskin över hela huvudet",
    price: "150 - 300",
    img: "/clipper-removebg-preview.png",
  },
];

const Services = () => {
  return (
    <div className="flex w-full flex-col gap-10" id="priser">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold lg:text-4xl">Tjänster</h2>
        <Image src="/2023997.svg" height={100} width={100} alt="mustache" />
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <Card className="w-full border">
          <CardHeader>
            <CardTitle className="text-lg">PRISER</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="">
              {services.map((service) => (
                <li
                  key={service.service}
                  className="mb-5 flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={service.img}
                      height={20}
                      width={20}
                      alt={service.service}
                    />
                    <p className="text-xs">{service.service}</p>
                  </div>
                  <p className="font-semibold">{service.price} kr</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
