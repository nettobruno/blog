import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../../assets/logo-white.svg"

export default function Header() {
  const [navbar, setNavbar] =  useState(false);

  return (
    <header className="w-full bg-black">
      <nav className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" onClick={() => setNavbar(false)}>
              <Image
                src={LogoWhite}
                alt="Logo do projeto"
                width="auto"
                height="auto"
              />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-white"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-14 md:space-y-0">
              <li className="font-poppins text-xl text-white hover:underline">
                <Link href="/" onClick={() => setNavbar(false)}>Home</Link>
              </li>

              <li className="font-poppins text-xl text-white hover:underline">
                <Link href="/about" onClick={() => setNavbar(false)}>Sobre</Link>
              </li>

              <li className="font-poppins text-xl text-white hover:underline">
                <Link href="/contact" onClick={() => setNavbar(false)}>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
