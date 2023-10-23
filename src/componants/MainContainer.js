import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movieData = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movieData) return;
  const mainMovie = movieData[1];
  const { title, overview, id } = mainMovie;
  
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
