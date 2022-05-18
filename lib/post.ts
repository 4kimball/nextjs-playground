import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POST_PATH = path.join("posts");

export const getAllPosts = () => {
  const files = fs.readdirSync(POST_PATH);

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      id: filename.split(".")[0],
    };
  });

  return posts;
};

export const getAllPostPaths = () => {
  const postFilePaths = fs
    .readdirSync(POST_PATH)
    .filter((path) => /\.mdx?$/.test(path));
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((id) => ({ params: { id } }));

  return paths;
};

export const getPostBySlug = (targetId) => {
  return getAllPosts().filter((post) => post.id === targetId)[0];
};
