import React from "react";
import UseNowPlayingMovies from "../hooks/UseNowPlayingMovies";
import HeaderComponant from "./HeaderComponant";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";

const BrowseComponant = () => {
  UseNowPlayingMovies();
  
  return (
    <div>
      <HeaderComponant />
      <MainContainer/>
      <SecoundaryContainer/>
    </div>
  );
};

export default BrowseComponant;
