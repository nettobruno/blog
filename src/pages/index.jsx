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
      <h1 className="text-6xl mb-10 font-bold">Artigos</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug} className="list-disc">
            <Link href={`/${slug}`} className="text-2xl text-blue-500">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
