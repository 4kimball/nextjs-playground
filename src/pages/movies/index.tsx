import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "next/link";
import useMovies from "../../hooks/useMovies";

const Movies: NextPage = () => {
  const { data: movies, error } = useMovies();
  console.log(movies);
  return (
    <Grid container spacing={2}>
      {movies?.map((movie: Movie) => {
        return (
          <Link
            key={movie.id}
            href={{
              pathname: `/movies/${movie.id}`,
            }}
          >
            <Grid item xs={4}>
              <Box
                sx={{
                  border: "1px solid #000",
                }}
              >
                {movie.title}
              </Box>
            </Grid>
          </Link>
        );
      })}
    </Grid>
  );
};

export default Movies;
