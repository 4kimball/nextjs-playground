import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState(false);
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
