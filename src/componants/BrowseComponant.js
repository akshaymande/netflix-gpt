import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import HeaderComponant from "./HeaderComponant";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const BrowseComponant = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <HeaderComponant />
      <MainContainer/>
      <SecoundaryContainer/>
    </div>
  );
};

export default BrowseComponant;
