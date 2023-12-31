import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const popularMovieData = await data.json();
    dispatch(addPopularMovies(popularMovieData.results));
  };

  useEffect(() => {
    getPopularMovieData();
  },[]);
};

export default usePopularMovies;

// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
