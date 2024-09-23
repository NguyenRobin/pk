"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const navMenu = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeOpenMenus = (e: MouseEvent) => {
    if (
      isMenuOpen &&
      !navMenu.current?.contains(e.target as Node) &&
      !buttonRef.current?.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed z-50 flex w-full items-center justify-center bg-black bg-opacity-90 p-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <a href="#hem">
            <Image
              src="/logo-1.png"
              height={80}
              width={80}
              alt="logo"
              style={{ height: "auto" }}
            />
          </a>
        </div>

        <div className="flex gap-4 sm:hidden">
          <Button className="border border-white">
            <a href="#oppettider">Drop-in</a>
          </Button>

          <button
            ref={buttonRef}
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <nav className="hidden max-w-screen-2xl sm:flex">
          <ul className="flex items-center justify-end gap-6 font-bold text-white">
            <li>
              <a href="#hem">Hem</a>
            </li>
            <li>
              <a href="#priser">Priser</a>
            </li>
            <li>
              <a href="#oppettider">Öppettider</a>
            </li>
            <li>
              <a href="#dropin">Drop-in</a>
            </li>
            <li>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        ref={navMenu}
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } absolute left-0 top-20 z-50 w-full overflow-hidden bg-black bg-opacity-90 transition-all duration-500 ease-in-out sm:hidden`}
      >
        <nav className="p-10 text-white">
          <ul className="flex flex-col items-center gap-4">
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#hem">Hem</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#priser">Priser</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#oppettider">Öppettider</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#oppettider">Drop-in</a>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
