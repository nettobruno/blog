
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#8000FF] via-[#C300E9] to-[#FF00C7] h-1"></div>

      <footer className="w-full bg-black p-7">
        <p className="text-white text-center text-xl">Feito com ❤️ por <Link className="underline hover:text-blue-400" href="https://www.linkedin.com/in/bruno-netto-77434b187/">Bruno Netto</Link> e <Link className="underline hover:text-blue-400" href="https://www.linkedin.com/in/guilherme-cezario/">Guilherme Cezário</Link></p>
      </footer>
    </>
  );
}
