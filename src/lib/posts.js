import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "./src/posts");
  const filenames = await fs.readdir(postsDirectory);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const document = matter(fileContents);
      
      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        date: document.data.date,
        creator: document.data.creator,
        avatarCreator: document.data.avatarCreator,
        imageBackground: document.data.imageBackground,
        creditImageBrackground: document.data.creditImageBrackground,
        markdown: document.content,
      };
    })
  );
};

export default getPosts;