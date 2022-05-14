import type { NextPage } from "next";
import { useEffect } from "react";

import { getMovies } from "../../apis";
const Movies: NextPage = () => {
  useEffect(() => {
    getMovies().then((res) => {
      console.log(res);
    });
  });
  return <></>;
};

export default Movies;
