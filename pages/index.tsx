import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Box from "@mui/material/Box";

import styles from "../styles/Home.module.css";

const Home: NextPage = ({ posts }) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(posts);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    accessToken ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const handleClickLogOut = () => {
    localStorage.removeItem("accessToken");
    setIsLogin(false);
  };
  return (
    <div className={styles.container}>
      <h2>Home</h2>
      {isLogin ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Link href="/movies">
            <a>Movies</a>
          </Link>
          <button onClick={handleClickLogOut}>로그아웃</button>
        </Box>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href="/authentication/signup">
            <a>Signup</a>
          </Link>
          <Link href="/authentication/login">
            <a>Login</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;

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
