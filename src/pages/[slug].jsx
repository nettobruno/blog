import Image from "next/image";
import ReactMarkdown from "react-markdown";
import getPosts from "../lib/posts";

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  return { props: post };
};

export default function Post({
  title,
  date,
  creator,
  avatarCreator,
  imageBackground,
  creditImageBrackground,
  markdown,
}) {
  return (
    <article className="max-w-4xl mx-auto py-20 px-4 md:px-8">
      <header className="flex flex-col items-center">
        <h1 className="font-poppins mb-12 text-4xl md:text-6xl font-bold text-center">{title}</h1>

        <Image
          src={imageBackground}
          alt="Imagem do artigo"
          width={1216}
          height={70}
        />
        <figcaption className="font-poppins text-xs text-gray-400 mb-5 prose prose-a:text-gray-400 prose-a:font-bold" dangerouslySetInnerHTML={{__html: creditImageBrackground}}></figcaption>
      </header>

      <ReactMarkdown className="font-poppins prose-xl prose-li:list-disc prose-p:my-4 prose-img:my-5 prose-h2:mb-3 prose-h2:font-bold">
        {markdown}
      </ReactMarkdown>

      <div className="flex flex-col items-center mt-20">
        <Image
          src={avatarCreator}
          alt="Imagem do autor"
          width={70}
          height={70}
          className="rounded-full mb-1"
        />
        <span className="font-poppins text-lg font-medium text-black mb-1">{creator}</span>
        <time className="font-poppins text-lg font-medium text-gray-300">{date}</time>
      </div>
    </article>
  );
}
