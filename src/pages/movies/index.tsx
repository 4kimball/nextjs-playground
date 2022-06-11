import { resolveSoa } from "dns";
import type { NextPage } from "next";

import useMovies from "../../hooks/useMovies";
import { getMovies } from "../../apis";
import axios from "axios";

interface MoviesProps {
  movies: Array<Movie>;
}
const Movies: NextPage<MoviesProps> = ({ movies }) => {
  console.log(movies);
  return <></>;
};

export const getStaticProps = async () => {
  // 여기는 server side에서 렌더링을 하기 때문에 window 객체에 접근할 수 없고,
  // axios interceptor에서 localstorage에 접근하기 때문에 에러가 발생
  // => 그럼 pre fetching할 수 있는게 무엇인지?
  const response = await axios.get("http://127.0.0.1:8000/api/v1/movies/");
  const movies = response.data.json();
  return {
    props: {
      movies,
    },
  };
};

export default Movies;
