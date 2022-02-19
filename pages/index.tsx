import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Todo from './Todo';
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Todo />
    </div>
  );
};

export default Home;
