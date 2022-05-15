import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import useMovies from "../../hooks/useMovies";

const Movies: NextPage = () => {
  const { data, error } = useMovies();

  return (
    <Grid container>
      {data?.data.map((movie) => {
        return (
          <Grid item xs={3} key={movie.id}>
            <Box>
              <img src={movie.poster_path} />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Movies;
