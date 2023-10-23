import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const UseNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    nowPlayingMoviesList();
  }, []);

  const nowPlayingMoviesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json);


  };
};
export default UseNowPlayingMovies;
