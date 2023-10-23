import React from "react";
import MovieCardComponant from "./MovieCardComponant";

const MovieListComponant = ({ title, movieData }) => {
  return (
    <div className="bg-black w-screen">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieData?.map((movie) => {
            return (
              <MovieCardComponant
                key={movie.id}
                posterpath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieListComponant;
