import useSWR from "swr";
import { getMovies } from "../apis";

const fetcher = (url: string) => getMovies(url);

const useMovies = () => {
  const { data, error } = useSWR("movies/", fetcher);
  return { data, error };
};

export default useMovies;
