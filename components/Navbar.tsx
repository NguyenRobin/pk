"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 flex w-full items-center justify-between bg-black bg-opacity-90 p-5">
      <div className="flex items-center">
        <Image src="/logo-1.png" height={80} width={80} alt="logo" />
      </div>

      {/* Hamburgarikonen - visas bara på små skärmar */}
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

      {/* Navigationsmeny - döljs på små skärmar och visas på stora skärmar */}
      <nav className="hidden sm:flex">
        <ul className="flex items-center justify-end gap-4 font-bold text-white">
          <li>
            <Link href={"/"}>Hem</Link>
          </li>
          <li>
            <Link href={"/Priser"}>Priser</Link>
          </li>
          <li>
            <Link href={"/öppettider"}>Öppettider</Link>
          </li>
          <li>
            <Link href={"/drop-in"}>Drop in</Link>
          </li>
          <li>
            <Link href={"/galleri"}>Galleri</Link>
          </li>
          <li>
            <Link href={"/kontakt"}>Kontakt</Link>
          </li>
        </ul>
      </nav>
      {/* Hamburgarmenyn - visas bara om den är öppen på små skärmar */}
      {isMenuOpen && (
        <nav className="absolute left-0 top-20 z-50 flex w-full flex-col items-center bg-black bg-opacity-90 p-10 text-white sm:hidden">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href={"/"}>Hem</Link>
            </li>
            <li>
              <Link href={"/Priser"}>Priser</Link>
            </li>
            <li>
              <Link href={"/öppettider"}>Öppettider</Link>
            </li>
            <li>
              <Link href={"/drop-in"}>Drop in</Link>
            </li>
            <li>
              <Link href={"/galleri"}>Galleri</Link>
            </li>
            <li>
              <Link href={"/kontakt"}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
