"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Navbar() {
  const navMenu = useRef<HTMLDivElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeOpenMenus = (e: MouseEvent) => {
    if (isMenuOpen && !navMenu.current?.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [isMenuOpen]);
  console.log(isMenuOpen);
  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-black bg-opacity-90 p-5">
      <div className="flex items-center">
        <Image src="/logo-1.png" height={80} width={80} alt="logo" />
      </div>

      <div className="block sm:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
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
        </button>
      </div>

      <nav className="hidden sm:flex">
        <ul className="flex items-center justify-end gap-4 font-bold text-white">
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
            <a href="#drop-in">Drop-in</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <nav
          ref={navMenu}
          className="absolute left-0 top-20 z-50 flex w-full flex-col items-center bg-black bg-opacity-90 p-10 text-white sm:hidden"
        >
          <ul className="flex flex-col items-center gap-4">
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#hem">Hem</a>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#priser">Priser</a>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#oppettider">Öppettider</a>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#drop-in">Drop-in</a>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
