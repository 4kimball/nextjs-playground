import useSWR from "swr";
import { getMovies } from "../apis";

const fetcher = (url: string) => getMovies(url);

const useArticles = () => {
  const { data, error } = useSWR("community/all/", fetcher);
  return { data, error };
};

export default useArticles;
