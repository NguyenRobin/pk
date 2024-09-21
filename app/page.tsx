import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

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
  { day: "Lördag", open: "Stängt" },
  { day: "Söndag", open: "Stängt" },
];

export default function Home() {
  return (
    <>
      <div className="hero-image relative flex h-1/2 min-h-96 w-full items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute z-10 flex flex-col items-center gap-2 text-white">
          <h1 className="font-bold lg:text-5xl">
            Professionell Herrfrisering i Uppsala.
          </h1>
          <p className="mb-5 lg:text-lg">
            Vi erbjuder klassisk och modern klippning för alla!
          </p>

          <div>
            <Button className="text-brown bg-orange-400 font-bold">Boka</Button>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between p-5">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h2 className="font-bold lg:text-4xl">Tjänster</h2>
            <Image src="/2023997.svg" height={100} width={100} alt="mustache" />
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <Card className="min-h-96 w-1/2 min-w-72 border-2">
              <CardHeader>
                <CardTitle className="lg:text-xl">PRISER</CardTitle>
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
                          height={24}
                          width={24}
                          alt={service.service}
                        />
                        <p>{service.service}</p>
                      </div>
                      <p className="font-semibold">{service.price} kr</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="gap- flex h-full w-full flex-col">
          <div className="flex w-full flex-col items-center justify-center gap-2 pb-5">
            <h2 className="font-bold lg:text-4xl">Öppettider</h2>
            {/* <Image src="/2023997.svg" height={100} width={100} alt="mustache" /> */}
            <a className="font-bold lg:text-3xl" href={`tel:0709-967570`}>
              Tel: 0709-967570
            </a>
          </div>

          <div className="flex h-full flex-wrap justify-center gap-5">
            {openHours.map((day) => (
              <Card className="flex min-h-48 w-full max-w-48 flex-grow flex-col items-center justify-center">
                <CardHeader>
                  <CardTitle className="lg:text-xl">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <p>{day.open}</p>
                  <p>{day.information ?? ""}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-48 pr-48">
        <div className="flex h-full w-full flex-col gap-5">
          <div className="flex w-full justify-center">
            <h2 className="font-bold lg:text-2xl">Om Oss</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <p>
              Det har varit herrfrisering i vår lokal sedan 1939 då huset
              byggdes. David Sondered drev verksamheten från 1939 till 1968 då
              Kennet Eriksson ( min far) och Lennart Lundgren tog över. De drev
              Eriksson och Lundgrens herrfrisering tillsammans till 1988 ,
              Lennart slutade och jag fick möjligheten att göra min praktik där.
              Mellan 1988-1996 hette salongen Kennet Eriksson frisersalong AB,
              1996 när jag gick in som delägare ändrades namnet till PK´s
              Herrfrisering. Nu är det jag, Paul Nordholm, som ensam sköter
              verksamheten.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
