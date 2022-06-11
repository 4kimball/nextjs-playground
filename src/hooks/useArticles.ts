import useSWR from "swr";
import { getMovies } from "../apis";

const fetcher = () => getMovies();

const useArticles = () => {
  const { data, error } = useSWR("community/all/", fetcher);
  return { data, error };
};

export default useArticles;
