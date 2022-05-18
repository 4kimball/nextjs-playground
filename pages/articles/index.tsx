import type { NextPage } from "next";
import { getArticles } from "../../apis/articles";
import useArticles from "../../hooks/useArticles";
const Articles: NextPage = (props) => {
  const res = getArticles("community/all/");
  res.then((data) => {
    console.log(data);
  });
  return <></>;
};

export const getStaticProps = async () => {
  const res = getArticles("community/all/");
  console.log(res);
  return {
    props: {
      articles: [],
    },
  };
};

export default Articles;
