import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>home page</h1>
    </div>
  );
};

export default Home;
