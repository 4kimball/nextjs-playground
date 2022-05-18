import type { NextPage } from "next";
import Box from "@mui/material/Box";

import { getAllPosts, getAllPostPaths, getPostBySlug } from "../../lib/post";

const Posts: NextPage = ({ posts }) => {
  console.log(posts);
  return (
    <Box>
      <h2>{posts.id}</h2>
    </Box>
  );
};

export default Posts;

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      posts: getPostBySlug(params.id),
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: getAllPostPaths(),
    fallback: false,
  };
}
