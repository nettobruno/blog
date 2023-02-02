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
      <h1>{title}</h1>
      <time className="font-extralight tracking-wider text-gray-500">{date}</time>
      <div className="flex items-center gap-4">
        <Image
          src={avatarCreator}
          alt=""
          width={70}
          height={70}
          className="rounded-full"
        />
        <span>{creator}</span>
      </div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </article>
  )
}