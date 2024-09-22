import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 text-black" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <address className="not-italic">
            <h3 className="mb-2 text-lg font-semibold">PK:s Herrfrisering</h3>
            <p>Adress: Väderkvarnsgatan 32, 753 29 Uppsala</p>
          </address>

          <div>
            <h3 className="mb-2 text-lg font-semibold">Kontakt</h3>
            <address className="not-italic">
              <a href="tel:0709-967570" className="text-blue-400">
                Tel: 0709-967570
              </a>
            </address>
            <address className="not-italic">
              E-post:
              <a href="mailto:paulnordholm@gmail.com" className="text-blue-400">
                {" "}
                paulnordholm@gmail.com
              </a>
            </address>
          </div>

          {/* Öppettider */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Öppettider</h3>
            <p>Måndag - Onsdag: 09:00 - 17:00</p>
            <p>Torsdag - Fredag: 09:00 - 15:30</p>
            <p>Helger: Stängt</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} PK:s Herrfrisering. Alla
            rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
