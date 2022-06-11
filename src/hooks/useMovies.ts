import useSWR from "swr";
import { getMovies } from "../apis";

const fetcher = () => getMovies();

const useMovies = () => {
  const { data, error } = useSWR("movies/", fetcher);
  console.log(data);
  return { data, error };
};

export default useMovies;
