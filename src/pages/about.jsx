import Image from "next/image";
import Link from "next/link";
import { Link as LinkLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export default function About() {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
          <p className="font-poppins text-3xl text-center md:text-start">
            Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.        
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-100">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
          <div className="grid gap-2 grid-cols-1 grid-rows-1 md:gap-10 md:grid-cols-2">
            <div className="mb-10 flex justify-center mb:mb-0 md:justify-start">
              <Image
                src="https://github.com/nettobruno.png"
                alt="Imagem de perfil do Bruno Netto"
                width={450}
                height={100}
              />
            </div>

            <div className="flex flex-col justify-start md:justify-center">
              <h2 className="text-4xl font-bold text-center md:text-left">Bruno Netto</h2>
              <h3 className="text-1xl text-gray-400 font-light mb-3 text-center md:text-left">Desenvolvedor Front End</h3>

              <p className="text-1xl font-light text-center md:text-left">Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Pra lá , depois divoltis porris, paradis.</p>

              <div className="flex gap-5 mt-5 justify-center md:justify-start">
                <Link href="https://www.linkedin.com/in/bruno-netto-77434b187/" className="flex justify-center items-center bg-black p-2 rounded-full transition-all hover:">
                  <LinkedinLogo size={32} color="#ffffff" />
                </Link>

                <Link href="https://www.instagram.com/netttobruno/" className="flex justify-center items-center bg-black p-2 rounded-full">
                  <InstagramLogo size={32} color="#ffffff" />
                </Link>

                <Link href="https://brunonetto.vercel.app/" className="flex justify-center items-center bg-black p-2 rounded-full">
                  <LinkLogo size={32} color="#ffffff" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-40 bg-gradient-to-r from-[#8000FF] via-[#C300E9] to-[#FF00C7] h-1"></div>
        </div>

        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
          <div className="grid gap-2 grid-cols-1 grid-rows-1 md:gap-10 md:grid-cols-2">
            <div className="mb-10 flex justify-center mb:mb-0 md:justify-start">
              <Image
                src="https://github.com/guilhermecezario.png"
                alt="Imagem de perfil do Guilherme Cezário"
                width={450}
                height={100}
              />
            </div>

            <div className="flex flex-col justify-start md:justify-center">
              <h2 className="text-4xl font-bold text-center md:text-left">Guilherme Cezário</h2>
              <h3 className="text-1xl text-gray-400 font-light mb-3 text-center md:text-left">Desenvolvedor Full Stack</h3>

              <p className="text-1xl font-light text-center md:text-left">Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Pra lá , depois divoltis porris, paradis.</p>

              <div className="flex gap-5 mt-5 justify-center md:justify-start">
                <Link href="https://www.linkedin.com/in/guilherme-cezario/" className="flex justify-center items-center bg-black p-2 rounded-full transition-all hover:">
                  <LinkedinLogo size={32} color="#ffffff" />
                </Link>

                <Link href="https://www.instagram.com/guilherme.cezarioo/" className="flex justify-center items-center bg-black p-2 rounded-full">
                  <InstagramLogo size={32} color="#ffffff" />
                </Link>

                <Link href="https://guilhermecezario.dev/" className="flex justify-center items-center bg-black p-2 rounded-full">
                  <LinkLogo size={32} color="#ffffff" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
