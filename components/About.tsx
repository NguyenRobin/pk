import React from "react";

const About = () => {
  return (
    <div className="relative flex min-h-[500px] items-center bg-[url('/about.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="z-12 relative flex flex-col items-center justify-center p-10 text-white">
        <h2 className="text-center text-3xl font-bold">Om Oss</h2>
        <div className="mt-4">
          <p className="text-sm md:text-lg">
            Det har varit herrfrisering i vår lokal sedan 1939 då huset byggdes.
            David Sondered drev verksamheten från 1939 till 1968 då Kennet
            Eriksson (min far) och Lennart Lundgren tog över. De drev Eriksson
            och Lundgrens herrfrisering tillsammans till 1988, Lennart slutade
            och jag fick möjligheten att göra min praktik där. Mellan 1988-1996
            hette salongen Kennet Eriksson frisersalong AB, 1996 när jag gick in
            som delägare ändrades namnet till PK´s Herrfrisering. Nu är det jag,
            Paul Nordholm, som ensam sköter verksamheten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
