import type { NextPage } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Box from "@mui/material/Box";

const Posts: NextPage = ({ posts }) => {
  console.log(posts);
  return <Box></Box>;
};

export default Posts;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export async function getStaticPaths() {
  const postFilePaths = fs
    .readdirSync(path.join("posts"))
    .filter((path) => /\.mdx?$/.test(path));
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
