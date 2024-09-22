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
    // <div className="flex h-full w-full flex-col gap-5" id="oppettider">
    <div className="h-full w-full" id="oppettider">
      <div className="flex w-full flex-col items-center justify-center gap-3 pb-5">
        <h2 className="text-2xl font-bold">Öppettider</h2>
        <a className="text-xl font-bold" href={`tel:0709-967570`}>
          Tel: 0709-967570
        </a>
        <h3 className="text-center">Endast drop in!</h3>
        <p className="text-center">
          Välkommen in och vänta på din tur. Ingen förbokning!
        </p>
      </div>

      {/* <div className="flex h-full w-full flex-wrap justify-center gap-5"> */}
      {/* <div className="flex flex-col gap-3"> */}
      <div className="grid auto-rows-fr gap-2 md:grid-cols-2 lg:grid-cols-3">
        {openHours.map((day) => (
          <Card key={day.day} className="flex h-full flex-col justify-center">
            <CardContent className="flex items-center justify-between gap-2 p-5 md:flex-col">
              <p className="font-bold">{day.day}</p>
              <p className="font-bold">{day.open}</p>
            </CardContent>

            {day.information && (
              // <div className="flex items-center justify-center text-center">
              <div className="pb-3 pl-5">
                <p className="text-xs italic leading-tight">
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
