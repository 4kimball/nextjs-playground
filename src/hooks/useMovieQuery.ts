import useSWR from "swr";
import { getMovies } from "../apis";

const fetcher = (url: string) => getMovies(url);

const useMovieQuery = (id: string) => {
  const { data, error } = useSWR(`movies/detail/${id}/`, fetcher);
  return { data, error };
};

export default useMovieQuery;
