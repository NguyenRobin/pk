import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const openHours = [
  { day: "Måndag", open: "9.00 - 17.00" },
  { day: "Tisdag", open: "9.00 - 17.00" },
  { day: "Onsdag", open: "9.00 - 17.00" },
  {
    day: "Torsdag",
    open: "9.00 - 15.30",
    information: "Måste bli klar med sista kunden senast 15.30",
  },
  {
    day: "Fredag",
    open: "9.00 - 15.30",
    information: "Måste bli klar med sista kunden senast 15.30",
  },
  { day: "Helger", open: "Stängt" },
];

const OpenHours = () => {
  return (
    <div className="mt-10 flex h-full w-full flex-col gap-5">
      <div className="flex w-full flex-col items-center justify-center gap-3 pb-5">
        <h2 className="text-2xl font-bold">Öppettider</h2>
        {/* <Image src="/2023997.svg" height={100} width={100} alt="mustache" /> */}
        <a className="text-xl font-bold" href={`tel:0709-967570`}>
          Tel: 0709-967570
        </a>
      </div>

      {/* <div className="flex h-full w-full flex-wrap justify-center gap-5"> */}
      <div className="flex flex-col gap-3">
        {openHours.map((day) => (
          <Card key={day.day} className="">
            <CardContent className="flex items-center justify-between p-5">
              <p className="font-bold">{day.day}</p>
              <p className="font-bold">{day.open}</p>
            </CardContent>

            {day.information && (
              // <div className="flex items-center justify-center text-center">
              <div className="pb-3 pl-5">
                <p className="text-xs italic">
                  <span className="font-bold text-red-500">OBS: </span>
                  {day.information}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OpenHours;
