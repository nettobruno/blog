import Image from "next/image";
import Link from "next/link";
import getPosts from "../lib/posts";

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <h1 className="font-poppins text-5xl text-center font-bold mb-5 md:text-start">Descomplica Código</h1>
        <p className="font-poppins text-3xl text-center md:text-start">
          Queremos ajudar, facilitar, e melhorar o entendimento de pessoas que estão iniciando no mundo da programação.
        </p>
      </div>
    </div>

    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
          {posts.map(({ slug, title, date, imageBackground }) => (
            <li key={slug}>
              <Link href={`/${slug}`} className="">
                <Image
                  src={imageBackground}
                  alt="Imagem de capa do artigo"
                  width={800}
                  height={100}
                  className="rounded-t-lg"
                />

                <div className="border border-gray-300 p-5 rounded-b-lg">
                  <h2 className="font-poppins font-medium text-black text-2xl text-center mb-2 md:text-start">{title}</h2>
                  <p className="font-poppins text-gray-400 text-base text-center md:text-start">{date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul> 
      </div>
    </div>
    </>
  )
}
