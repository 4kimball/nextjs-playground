import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <Link href="/authentication/signup">
        <a>Signup</a>
      </Link>
    </div>
  );
};

export default Home;
