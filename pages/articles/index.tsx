import type { NextPage } from "next";
import { getArticles } from "../../apis/articles";
import useArticles from "../../hooks/useArticles";
const Articles: NextPage = ({ articles }) => {
  return <></>;
};

export const getServerSideProps = async () => {
  const res = getArticles("community/all/");
  console.log(res);
  return {
    props: {
      articles: res ? res.data : [],
    },
  };
};

export default Articles;
