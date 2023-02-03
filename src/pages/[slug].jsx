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

export default function Post({ title, date, creator, avatarCreator, markdown }) {
  return (
    <article>
      <header className="flex flex-col items-center">
        <Image
            src={avatarCreator}
            alt="Imagem do autor"
            width={70}
            height={70}
            className="rounded-full"
          />
        <span className="-mt-10 mb-10 text-md font-light text-gray-500">{creator}</span>
        <h1 className="my-7 text-6xl font-bold text-center">{title}</h1>
        <time className="text-sm font-light text-gray-500">{date}</time>

        <span className="mt-5 h-0.5 w-full bg-gray-200" />
      </header>

      <ReactMarkdown className="px-10 py-20">
        {markdown}
      </ReactMarkdown>
    </article>
  )
}