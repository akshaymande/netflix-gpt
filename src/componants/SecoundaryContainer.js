import React from "react";
import { useSelector } from "react-redux";
import MovieListComponant from "./MovieListComponant";

const SecoundaryContainer = () => {
  const movieData = useSelector((store) => store?.movies);
  return (
    movieData && (
      <div>
        <MovieListComponant
          title={"Now Playing"}
          movieData={movieData?.nowPlayingMovies}
        />
        <MovieListComponant
          title={"Trainding"}
          movieData={movieData?.popularMovies}
        />
        <MovieListComponant
          title={"Popular"}
          movieData={movieData?.nowPlayingMovies}
        />
      </div>
    )
  );
};

export default SecoundaryContainer;
