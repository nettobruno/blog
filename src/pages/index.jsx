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
      <h1>Artigos</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
