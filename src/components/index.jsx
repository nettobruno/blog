import Image from "next/image";
import Link from "next/link";

import LogoWhite from "../assets/logo-white.svg"

export default function Header() {
  return (
    <header className="bg-black p-10 text-white text-xl">
      <div className="container mx-auto flex justify-between">
        <Image
          src={LogoWhite}
          alt="Logo do projeto"
          width="auto"
          height="auto"
        />

        <nav className="flex items-center">
          <ul className="flex justify-between items-center gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Sobre</Link>
            </li>
            <li>
              <Link href="/contact">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
