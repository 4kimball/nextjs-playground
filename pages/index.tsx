import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";
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
        <button onClick={handleClickLogOut}>로그아웃</button>
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
