import type { NextPage } from "next";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMovieQuery from "../../hooks/useMovieQuery";
const Movie: NextPage = () => {
  const router = useRouter();
  const movieId = router.query.id;
  const { data: movie, error } = useMovieQuery(movieId as string);
  if (error) {
    return <>error</>;
  }

  return (
    <Box>
      <Typography>{movie?.title}</Typography>
      <Typography>{movie?.release_date}</Typography>
      <Typography>{movie?.content}</Typography>
    </Box>
  );
};

export default Movie;
